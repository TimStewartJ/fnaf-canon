#!/usr/bin/env python3
"""Make small copies of the images in public/img, for the gallery and for thumbnails in cards and lists.

    python3 scripts/thumbs.py

For every image that is wider than MAX_W or heavier than MIN_BYTES, a WebP copy at most MAX_W wide is written to
public/thumb/<file name>.webp, unless the copy would not be clearly lighter than the file itself. The other
images get none and are served as they are: small pixel-art PNGs are light already, and the page draws them
crisp at any size, which a resampled copy would spoil.

scripts/thumbs-manifest.json records a hash of every image this script has looked at: under "copies" those it
made a copy of, under "as-is" those it left alone. (It is kept here and not beside the copies because everything
in public/ is published.) `npm run validate` checks it: a copy made from an image that has since been replaced
is an error (the page would show the old picture), and an image the script has not looked at is a warning (it
is served whole until the script is run). Run this script after adding or replacing an image; to make every
copy again, after changing the numbers below, delete public/thumb and the manifest first. It needs Pillow
(pip install pillow); the copies and the manifest are committed, so building the site does not need Python.
"""
import hashlib
import io
import json
import sys
from pathlib import Path

from PIL import Image, ImageCms, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "public" / "img"
OUT = ROOT / "public" / "thumb"
MANIFEST = Path(__file__).resolve().parent / "thumbs-manifest.json"
MAX_W = 560          # a gallery tile is at most about 280 CSS px wide; this serves it at twice that
MIN_BYTES = 60_000   # a lighter file that is no wider than MAX_W is served as it is
WORTH = 0.75         # a copy heavier than this share of its source is not kept
EXTS = {".png", ".jpg", ".jpeg", ".webp", ".gif"}


def sha(p: Path) -> str:
    return hashlib.sha1(p.read_bytes()).hexdigest()


def wanted(p: Path) -> bool:
    with Image.open(p) as im:
        return im.width > MAX_W or p.stat().st_size > MIN_BYTES


def make(p: Path, dst: Path) -> None:
    with Image.open(p) as im:
        im.seek(0)
        profile = im.info.get("icc_profile")
        alpha = im.mode in ("P", "LA", "RGBA", "PA") or "transparency" in im.info
        # A browser turns the image as its EXIF data says; the copy carries no such data, so it is turned here.
        im = ImageOps.exif_transpose(im).convert("RGBA" if alpha else "RGB")
        if profile:
            # The same for an embedded colour profile: the copy has none, so its colours are converted to sRGB.
            try:
                im = ImageCms.profileToProfile(im, ImageCms.ImageCmsProfile(io.BytesIO(profile)), ImageCms.createProfile("sRGB"), outputMode=im.mode)
            except (ImageCms.PyCMSError, OSError, ValueError):
                pass
        if im.width > MAX_W:
            im = im.resize((MAX_W, max(1, round(im.height * MAX_W / im.width))), Image.LANCZOS)
        im.save(dst, "WEBP", quality=78, method=6)


def main() -> int:
    OUT.mkdir(parents=True, exist_ok=True)
    old = json.loads(MANIFEST.read_text()) if MANIFEST.exists() else {}
    old_copies, old_as_is = old.get("copies", {}), old.get("as-is", {})
    copies, as_is, made, src_bytes, dst_bytes = {}, {}, 0, 0, 0
    for p in sorted(SRC.iterdir()):
        if not p.is_file() or p.suffix.lower() not in EXTS:
            continue
        digest = sha(p)
        dst = OUT / (p.name + ".webp")
        if old_as_is.get(p.name) == digest or not wanted(p):
            as_is[p.name] = digest
            continue
        if old_copies.get(p.name) != digest or not dst.exists():
            make(p, dst)
            made += 1
        if dst.stat().st_size > p.stat().st_size * WORTH:
            as_is[p.name] = digest
            continue
        copies[p.name] = digest
        src_bytes += p.stat().st_size
        dst_bytes += dst.stat().st_size
    for q in sorted(OUT.glob("*.webp")):
        if q.name[: -len(".webp")] not in copies:
            q.unlink()
    MANIFEST.write_text(json.dumps({"copies": copies, "as-is": as_is}, indent=1, sort_keys=True) + "\n")
    print(f"thumbs: {len(copies)} copies ({made} made this run), {len(as_is)} images served as they are; "
          f"{src_bytes // 1024} kB of images are {dst_bytes // 1024} kB as thumbnails")
    return 0


if __name__ == "__main__":
    sys.exit(main())
