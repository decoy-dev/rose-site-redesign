#!/usr/bin/env python3
"""Compare the <slug>.clone.png / <slug>.live.png pairs written by tools/clone-check.mjs.

usage: python3 tools/imgdiff.py <dir>

Prints, per page, both image sizes and the share of pixels whose channels differ by more than 16/255,
and writes <slug>.diff.png (differing pixels in red over a faded copy of the clone) when any differ.
"""
import sys
from pathlib import Path

import numpy as np
from PIL import Image

d = Path(sys.argv[1])
worst = 0.0
for clone in sorted(d.glob("*.clone.png")):
    slug = clone.name[: -len(".clone.png")]
    live = d / f"{slug}.live.png"
    if not live.exists():
        print(f"{slug:32} no live shot")
        continue
    a = np.asarray(Image.open(clone).convert("RGB")).astype(np.int16)
    b = np.asarray(Image.open(live).convert("RGB")).astype(np.int16)
    h, w = min(a.shape[0], b.shape[0]), min(a.shape[1], b.shape[1])
    mask = (np.abs(a[:h, :w] - b[:h, :w]) > 16).any(axis=2)
    share = mask.mean() * 100
    worst = max(worst, share if a.shape == b.shape else 100.0)
    note = "" if a.shape == b.shape else f"  SIZE {a.shape[1]}x{a.shape[0]} vs {b.shape[1]}x{b.shape[0]}"
    print(f"{slug:32} {a.shape[1]}x{a.shape[0]}  {share:6.3f}% pixels differ{note}")
    if mask.any():
        out = (a[:h, :w] * 0.25 + 191).astype(np.uint8)
        out[mask] = (220, 30, 40)
        Image.fromarray(out).save(d / f"{slug}.diff.png")
print(f"worst: {worst:.3f}%")
