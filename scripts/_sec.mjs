import { chromium } from "playwright";
const [url, sel, out] = process.argv.slice(2);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1400, height: 1000 } });
const errs = []; p.on("pageerror", (e) => errs.push(String(e)));
await p.goto(url, { waitUntil: "networkidle" }); await p.waitForTimeout(700);
if (sel) { await p.locator(sel).first().scrollIntoViewIfNeeded(); await p.evaluate((s) => document.querySelector(s)?.scrollIntoView({ block: "start" }), sel); await p.evaluate(() => window.scrollBy(0, -80)); await p.waitForTimeout(400); }
await p.screenshot({ path: out }); console.log(out, errs.length ? errs : "ok"); await b.close();
