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
  const name = `/tmp/shot-${width}-${path.replace(/[^a-z0-9]+/gi, "_") || "home"}.png`;
  await p.screenshot({ path: name, fullPage: false });
  console.log(name);
}
console.log("ERRORS:", errs.length ? errs.join("\n") : "none");
await b.close();
