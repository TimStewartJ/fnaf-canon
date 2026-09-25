import { chromium } from "playwright";
const base = process.env.BASE ?? "http://localhost:5190/#";
const pages = (process.argv[2] ?? "/,/theory,/timeline,/evidence,/people,/people/william-afton,/family,/graph,/evidence/fnaf2-take-cake-to-the-children,/places,/sources,/gallery").split(",");
const width = Number(process.env.W ?? 1400);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width, height: 900 } });
const errs = [];
p.on("pageerror", (e) => errs.push(String(e)));
p.on("console", (m) => { if (m.type() === "error") errs.push(m.text()); });
for (const path of pages) {
  await p.goto(base + path, { waitUntil: "networkidle" });
  await p.waitForTimeout(path === "/graph" ? 2500 : 600);
  if (process.env.SCROLL) { await p.evaluate((y) => window.scrollTo(0, y), Number(process.env.SCROLL)); await p.waitForTimeout(700); }
  if (process.env.HOVER) { const el = p.locator(process.env.HOVER).first(); await el.hover(); await p.waitForTimeout(300); }
  const name = `/tmp/shot-${width}${process.env.SCROLL ? "-s" + process.env.SCROLL : ""}-${path.replace(/[^a-z0-9]+/gi, "_") || "home"}.png`;
  await p.screenshot({ path: name, fullPage: false });
  console.log(name);
}
console.log("ERRORS:", errs.length ? errs.join("\n") : "none");
await b.close();
