#!/usr/bin/env python3
"""Bake the hero letter's paper, the envelope stock, the envelope stamp and the "signed" stamp.

  python3 tools/bake_paper.py

Reads generated/paper.webp (an image-model scan of cream cotton paper), the bloom motif and the logo mark, writes
site/assets/img/paper-letter.webp, paper-envelope.webp, stamp.svg and stamp-signed.svg. Everything a CSS gradient
would have done (cockle, edge wear, light falloff, the dog-ear crease) is baked into the bitmaps, because the Rose
guideline bans gradients. Deterministic: same inputs, same files.
"""
import math
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
IMG = ROOT / "site/assets/img"

# fibres and specks only: the scan divided by a heavy blur of itself, so its own blotches and compression don't carry over
scan = Image.open(ROOT / "generated/paper.webp").convert("L")
s = np.asarray(scan.filter(ImageFilter.GaussianBlur(0.7))).astype(np.float32)
low = np.asarray(scan.filter(ImageFilter.GaussianBlur(18))).astype(np.float32)
fibre = np.clip(s / low, 0.80, 1.06)
fibre /= fibre.mean()


def field(w, h, sigma, seed):
    """Smooth, seeded noise: a small random grid upsampled bicubically (float, so no banding)."""
    g = max(2, int(round(max(w, h) / (sigma * 2.2))))
    r = np.random.default_rng(seed).standard_normal((g + 3, g + 3)).astype(np.float32)
    big = Image.fromarray(r, mode="F").resize((w + int(w / g) * 2, h + int(h / g) * 2), Image.BICUBIC)
    a = np.asarray(big)[int(h / g):int(h / g) + h, int(w / g):int(w / g) + w]
    return (a - a.mean()) / (a.std() + 1e-6)


def blur_line(w, h, pts, width, sigma):
    img = Image.new("L", (w, h), 0)
    ImageDraw.Draw(img).line(pts, fill=255, width=width)
    return np.asarray(img.filter(ImageFilter.GaussianBlur(sigma))).astype(np.float32) / 255


def edge_wear(w, h, seed, amount, reach):
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    d = np.minimum.reduce([xx, yy, w - 1 - xx, h - 1 - yy])
    e = np.clip((d + field(w, h, 6, seed) * 2.5) / reach, 0, 1)
    return 1 - amount * (1 - e) ** 2


def light(w, h, hi, lo, angle):
    """Light from the upper left: a touch brighter there, a touch darker toward the lower right."""
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    a = math.radians(angle - 90)
    t = (xx / w) * math.cos(a) + (yy / h) * math.sin(a)
    t = (t - t.min()) / (t.max() - t.min())
    return 1 + hi * np.clip(1 - t / 0.45, 0, 1) - lo * np.clip((t - 0.5) / 0.5, 0, 1)


def save(lum, rgb, name):
    out = np.clip(lum[..., None] * np.array(rgb, np.float32), 0, 255).astype(np.uint8)
    Image.fromarray(out).save(IMG / name, quality=86)
    print(name, out.shape[1], "x", out.shape[0], "mean", out.reshape(-1, 3).mean(0).round(1))


def letter(w=840, h=640, seed=11):
    lum = (1 + (fibre[:h, :w] - 1) * 1.15)
    lum *= 1 + field(w, h, 70, seed) * .022 + field(w, h, 22, seed + 5) * .006      # cockle
    lum *= edge_wear(w, h, seed + 1, .06, 16)
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    # a flattened dog-ear crease across the lower right corner
    x0, y0, x1, y1 = w - 230, h, w, h - 170
    dark = blur_line(w, h, [(x0, y0), (x1, y1)], 2, 1.0)
    lit = blur_line(w, h, [(x0 + 4, y0), (x1, y1 + 4)], 3, 2.0)
    fade = np.sin(np.pi * np.clip((xx - x0) / (x1 - x0), 0, 1)) ** .7
    lum *= (1 - .14 * dark * fade) * (1 + .05 * lit * fade)
    lum = np.where((xx - x0) / (x1 - x0) + (h - yy) / (h - y1) > 1.02, lum * 1.018, lum)
    # a very soft old fold down the middle
    cx = int(w * .52)
    lum *= (1 - .035 * blur_line(w, h, [(cx, 0), (cx + 6, h)], 2, 2.5)) * (1 + .018 * blur_line(w, h, [(cx + 5, 0), (cx + 11, h)], 6, 5))
    lum *= light(w, h, .035, .03, 140)
    save(lum, [251 * .94, 247 * .94, 238 * .94], "paper-letter.webp")   # warm cream stock, headroom for the light


def envelope(w=900, h=680, seed=23):
    lum = (1 + (fibre[:h, :w] - 1) * 1.3)
    lum *= 1 + field(w, h, 70, seed) * .02
    lum *= edge_wear(w, h, seed + 1, .06, 14)
    lum *= light(w, h, .05, .04, 150)
    save(lum, [0xDD, 0xE2, 0xD4], "paper-envelope.webp")   # sage mist, deepened toward sage


def stamp(w=46, h=56, r=2.1, step=5.75):
    holes = []
    for i in range(int(w / step) + 1):
        x = i * step + (w - int(w / step) * step) / 2
        holes += [(x, 0), (x, h)]
    for j in range(int(h / step) + 1):
        y = j * step + (h - int(h / step) * step) / 2
        holes += [(0, y), (w, y)]
    circle = lambda x, y: f"M{x - r:.2f} {y:.2f}a{r} {r} 0 1 0 {2 * r} 0a{r} {r} 0 1 0 {-2 * r} 0Z"
    perf = f"M0 0H{w}V{h}H0Z" + "".join(circle(x, y) for x, y in holes)
    bloom = (ROOT / "site/assets/motif/rose-motif-ground-a-dark.svg").read_text()
    inner = bloom[bloom.index("<circle"):bloom.rindex("</svg>")]
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">'
           f'<defs><clipPath id="edge"><rect width="{w}" height="{h}"/></clipPath>'
           f'<clipPath id="perf"><path clip-rule="evenodd" d="{perf}"/></clipPath>'
           '<clipPath id="win"><rect x="6" y="6" width="34" height="44"/></clipPath></defs>'
           '<g clip-path="url(#edge)"><g clip-path="url(#perf)">'
           f'<rect width="{w}" height="{h}" fill="#FBF8F2"/>'
           '<g clip-path="url(#win)"><rect x="6" y="6" width="34" height="44" fill="#3F4B39"/>'
           '<g transform="translate(-7 -2) scale(.6)">' + inner + '</g></g></g></g></svg>')
    (IMG / "stamp.svg").write_text(svg)
    print("stamp.svg", len(svg), "bytes")


def signed_stamp():
    """The "signed" stamp the work samples end on: the logo's bloom inside a double ring, in deep rose ink. The
    page sets it with mix-blend-mode: multiply, so the bloom's cream crescents vanish into the paper."""
    mark = (ROOT / "site/assets/logo/rose-mark.svg").read_text()
    opener = '<g clip-path="url(#tile-tile-light)">'
    start = mark.index(opener) + len(opener)
    art = mark[start:mark.index("</g>", start)]
    svg = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">'
           '<defs><clipPath id="disc"><circle cx="50" cy="50" r="34"/></clipPath></defs>'
           '<circle cx="50" cy="50" r="46" fill="none" stroke="#7E2E3F" stroke-width="4"/>'
           '<circle cx="50" cy="50" r="39.5" fill="none" stroke="#7E2E3F" stroke-width="1.4"/>'
           '<g clip-path="url(#disc)"><g transform="translate(14 14) scale(.72)">'
           '<rect width="100" height="100" fill="#7E2E3F"/>' + art + '</g></g></svg>')
    (IMG / "stamp-signed.svg").write_text(svg)
    print("stamp-signed.svg", len(svg), "bytes")


if __name__ == "__main__":
    letter()
    envelope()
    stamp()
    signed_stamp()
