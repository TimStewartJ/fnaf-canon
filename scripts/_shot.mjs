import { chromium } from "playwright";
const [url, out, w = "1400", extra = ""] = process.argv.slice(2);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: Number(w), height: 900 } });
const errs = []; p.on("pageerror", (e) => errs.push(String(e)));
await p.goto(url, { waitUntil: "networkidle" }); await p.waitForTimeout(900);
if (extra === "lanes-off") { await p.getByRole("button", { name: /Locations chart/ }).click(); await p.waitForTimeout(300); }
await p.screenshot({ path: out }); console.log(out, errs.length ? errs : "ok"); await b.close();
