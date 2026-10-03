/**
 * Site QA crawl. Visits routes at one or more viewport widths and reports, per route:
 *   - console errors, uncaught page errors and failed requests
 *   - horizontal overflow (document wider than the viewport) with the elements causing it
 *   - optional axe-core accessibility violations (--axe)
 * and saves a screenshot of each.
 *
 * Usage:
 *   node scripts/qa.mjs --base http://127.0.0.1:5191 --out /path/to/dir
 *     [--routes /,/theory,/timeline]   routes to visit (default: every top-level route, sample detail pages,
 *                                      two theory chapters and the /dev/blocks fixture)
 *     [--widths 1440,390]              viewport widths (heights: 900 for >=700px wide, else 844)
 *     [--full]                         full-page screenshots, clipped to --max-height (default 12000)
 *     [--scroll 1200,2400]             extra viewport screenshots at these scroll offsets
 *     [--no-hash]                      routes are real paths (BrowserRouter) instead of /#/route
 *     [--axe]                          run axe-core on each route (serious and critical issues are listed)
 *     [--json report.json]             write the full report as JSON
 *     [--tag name]                     prefix for screenshot file names
 *     [--theme paper]                  reader theme to test (night is the default); also accepts
 *                                      --text small|large and --cites hide for the other reader settings
 * Exit code 1 when any route has a console/page error, a failed request or horizontal overflow.
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const flag = (n) => args.includes(`--${n}`);
const opt = (n, d) => { const i = args.indexOf(`--${n}`); return i >= 0 && args[i + 1] ? args[i + 1] : d; };

const base = opt("base", "http://127.0.0.1:5190").replace(/\/$/, "");
const out = opt("out", "/tmp/fnaf-qa");
const hash = !flag("no-hash");
const widths = opt("widths", "1440,390").split(",").map(Number);
const DEFAULT_ROUTES = [
  "/", "/theory", "/theory/plush", "/theory/thesis", "/dev/blocks", "/dev/kit", "/timeline", "/evidence", "/evidence/fnaf2-take-cake-to-the-children", "/people", "/people/william-afton",
  "/people/crying-child", "/family", "/graph", "/places", "/places/fredbears-family-diner", "/sources", "/sources/fnaf4",
  "/gallery", "/box", "/community", "/author", "/method", "/this-route-does-not-exist",
];
const routes = opt("routes", "").split(",").filter(Boolean);
const scrolls = opt("scroll", "").split(",").filter(Boolean).map(Number);
const maxHeight = Number(opt("max-height", "12000"));
const tag = opt("tag", "");
// Reader settings, as the site stores them (see src/components/shell/prefs.ts).
const prefs = { theme: opt("theme", "night"), cites: opt("cites", "show"), text: opt("text", "normal") };
const customPrefs = prefs.theme !== "night" || prefs.cites !== "show" || prefs.text !== "normal";
fs.mkdirSync(out, { recursive: true });

let AxeBuilder = null;
if (flag("axe")) {
  try { AxeBuilder = (await import("@axe-core/playwright")).default; }
  catch { console.log("axe requested but @axe-core/playwright is not installed; skipping"); }
}

const browser = await chromium.launch();
const report = [];
let bad = 0;
for (const width of widths) {
  const height = width >= 700 ? 900 : 844;
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1, hasTouch: width < 700, isMobile: width < 700 });
  if (customPrefs) await ctx.addInitScript((p) => { try { localStorage.setItem("fca:prefs", JSON.stringify(p)); } catch { /* about:blank has no storage */ } }, prefs);
  const page = await ctx.newPage();
  let errs = [];
  page.on("pageerror", (e) => errs.push(`pageerror: ${String(e)}`));
  page.on("console", (m) => { if (m.type() === "error") errs.push(`console: ${m.text()}`); });
  page.on("requestfailed", (r) => errs.push(`requestfailed: ${r.url()} ${r.failure()?.errorText ?? ""}`));
  page.on("response", (r) => { if (r.status() >= 400) errs.push(`http ${r.status()}: ${r.url()}`); });
  for (const route of routes.length ? routes : DEFAULT_ROUTES) {
    errs = [];
    const url = hash ? `${base}/#${route}` : `${base}${route}`;
    const t0 = Date.now();
    await page.goto("about:blank");
    await page.goto(url, { waitUntil: "networkidle" });
    // Pages are lazy chunks: wait until the route's content has replaced the loading placeholder.
    await page.waitForFunction(() => !document.querySelector("[data-route-loading]") && (document.querySelector("main")?.children.length ?? 0) > 0, null, { timeout: 20000 })
      .catch(() => errs.push("timeout: the page content never appeared"));
    await page.waitForTimeout(route.startsWith("/graph") ? 2500 : 700);
    const m = await page.evaluate(() => {
      const de = document.documentElement;
      const vw = de.clientWidth;
      const offenders = [];
      if (de.scrollWidth > vw + 1) {
        for (const el of document.querySelectorAll("body *")) {
          const r = el.getBoundingClientRect();
          if (r.width > 0 && r.right > vw + 1) {
            // skip elements inside a horizontally scrollable ancestor: they are meant to overflow
            let p = el.parentElement, scrolled = false;
            while (p && p !== document.body) { const o = getComputedStyle(p).overflowX; if (o === "auto" || o === "scroll" || o === "hidden") { scrolled = true; break; } p = p.parentElement; }
            if (!scrolled) offenders.push(`${el.tagName.toLowerCase()}${el.id ? "#" + el.id : ""}${el.className && typeof el.className === "string" ? "." + el.className.trim().split(/\s+/).join(".") : ""} (right=${Math.round(r.right)})`);
          }
          if (offenders.length >= 8) break;
        }
      }
      return { scrollWidth: de.scrollWidth, clientWidth: vw, scrollHeight: de.scrollHeight, title: document.title, h1: document.querySelector("h1")?.textContent?.trim() ?? null, offenders };
    });
    const name = `${tag ? tag + "-" : ""}${width}-${route.replace(/[^a-z0-9]+/gi, "_").replace(/^_|_$/g, "") || "home"}`;
    const file = path.join(out, `${name}.png`);
    if (flag("full")) await page.screenshot({ path: file, fullPage: true, clip: { x: 0, y: 0, width, height: Math.min(m.scrollHeight, maxHeight) } });
    else await page.screenshot({ path: file });
    for (const y of scrolls) {
      await page.evaluate((yy) => window.scrollTo(0, yy), y); await page.waitForTimeout(400);
      await page.screenshot({ path: path.join(out, `${name}-s${y}.png`) });
    }
    let axe = null;
    if (AxeBuilder) {
      const res = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
      axe = res.violations.map((v) => ({ id: v.id, impact: v.impact, nodes: v.nodes.length, help: v.help, sample: v.nodes.slice(0, 3).map((n) => n.target.join(" ")) }));
    }
    const overflow = m.scrollWidth > m.clientWidth + 1;
    const entry = { width, route, ms: Date.now() - t0, title: m.title, h1: m.h1, height: m.scrollHeight, overflow, offenders: m.offenders, errors: [...new Set(errs)], axe, screenshot: file };
    report.push(entry);
    const axeBad = (axe ?? []).filter((v) => v.impact === "serious" || v.impact === "critical");
    const problems = [overflow ? `OVERFLOW ${m.scrollWidth}>${m.clientWidth}` : "", entry.errors.length ? `${entry.errors.length} ERRORS` : "", axeBad.length ? `AXE ${axeBad.map((v) => `${v.id}×${v.nodes}`).join(" ")}` : ""].filter(Boolean).join(" · ");
    if (overflow || entry.errors.length) bad++;
    console.log(`${String(width).padStart(4)} ${route.padEnd(46)} h=${String(m.scrollHeight).padStart(6)} ${problems || "ok"}`);
    for (const o of m.offenders) console.log(`       overflow: ${o}`);
    for (const e of entry.errors.slice(0, 5)) console.log(`       ${e}`);
  }
  await ctx.close();
}
await browser.close();
if (opt("json", "")) fs.writeFileSync(opt("json"), JSON.stringify(report, null, 2));
console.log(`${report.length} checks, ${bad} with errors or overflow. Screenshots in ${out}`);
process.exit(bad ? 1 : 0);
