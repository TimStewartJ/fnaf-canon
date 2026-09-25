# Keep in-game quotes to short excerpts: trim any quote over MAX words at a sentence boundary.
import json, glob, re
MAX = 35
for f in glob.glob("src/data/evidence/*.json"):
    data = json.load(open(f))
    changed = 0
    for e in data:
        q = e.get("quote")
        if not q or len(q.split()) <= MAX: continue
        sents = re.split(r'(?<=[.!?…])\s+', q)
        out = ""
        for s in sents:
            cand = (out + " " + s).strip()
            if len(cand.split()) > MAX: break
            out = cand
        if not out:
            out = " ".join(q.split()[:MAX])
        e["quote"] = out.rstrip() + " …"
        changed += 1
    json.dump(data, open(f, "w"), indent=2, ensure_ascii=False)
    print(f, "trimmed", changed)
