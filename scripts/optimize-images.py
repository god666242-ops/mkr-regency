"""Resize + compress hotel photos into responsive WebP files.
Reads  images-original/*.jpeg   writes  public/images/<name>-<width>.webp
Run:  python3 scripts/optimize-images.py   (needs: pip install pillow)
Also writes image-manifest.json (sizes available per photo).
Add a new photo = drop it in images-original/, add a line to MAP, re-run."""
from PIL import Image, ImageOps
import json, os

SRC, OUT = "images-original", "public/images"
WIDTHS = [480, 960, 1600]
MAP = {  # new name : original file
    "twin-1": "IMG_20260510_202443.jpg.jpeg",
    "twin-2": "IMG_20260511_145048.jpg.jpeg",
    "twin-3": "IMG_20260510_201442.jpg.jpeg",
    "king-1": "Premium King Room.jpeg",
    "king-2": "IMG_20260510_201504.jpg.jpeg",
    "king-3": "IMG_20260510_201710.jpg.jpeg",
    "mini-1": "IMG_20260511_145329.jpg.jpeg",
    "mini-2": "IMG_20260511_144844.jpg.jpeg",
    "mini-3": "IMG_20260511_145135.jpg.jpeg",
    "exec-1": "Executive Suite.jpeg",
    "exec-2": "IMG_20260511_145342.jpg.jpeg",
    "exec-3": "IMG_20260511_145125.jpg.jpeg",
    "detail-mirror": "IMG_20260511_144745.jpg.jpeg",
    "detail-lounge": "IMG_20260511_144815.jpg.jpeg",
    "detail-wardrobe": "IMG_20260510_201256.jpg.jpeg",
    "detail-desk": "IMG_20260510_201414.jpg.jpeg",
    "bath-1": "IMG_20260510_201356.jpg.jpeg",
    "bath-2": "IMG_20260511_144731.jpg.jpeg",
    "bath-3": "IMG_20260511_144723.jpg.jpeg",
}
EXTRA = {"exec-2": [2200]}  # hero image also gets a larger size

manifest = {}
for name, f in MAP.items():
    im = ImageOps.exif_transpose(Image.open(os.path.join(SRC, f))).convert("RGB")
    widths = [w for w in WIDTHS + EXTRA.get(name, []) if w <= im.width]
    if im.width < max(WIDTHS) and im.width not in widths:
        widths.append(im.width)  # small source: also keep its native size
    manifest[name] = sorted(widths)
    for w in widths:
        r = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
        r.save(f"{OUT}/{name}-{w}.webp", "WEBP", quality=76, method=6)
    # tiny blurred placeholder is not needed; sizes are small enough
json.dump(manifest, open("image-manifest.json", "w"), indent=1)
print("done")
