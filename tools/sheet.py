#!/usr/bin/env python3
"""Tile frames from tools/filmstrip.mjs into one contact sheet.

  python3 tools/sheet.py <framedir> <out.png> [cols=4] [thumb_width=480] [step=1]
"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw

src, out = Path(sys.argv[1]), Path(sys.argv[2])
cols = int(sys.argv[3]) if len(sys.argv) > 3 else 4
tw = int(sys.argv[4]) if len(sys.argv) > 4 else 480
step = int(sys.argv[5]) if len(sys.argv) > 5 else 1
frames = sorted(src.glob("f*.png"))[::step]
first = Image.open(frames[0])
th = round(first.height * tw / first.width)
rows = (len(frames) + cols - 1) // cols
sheet = Image.new("RGB", (cols * tw, rows * (th + 22)), "white")
draw = ImageDraw.Draw(sheet)
for n, f in enumerate(frames):
    im = Image.open(f).convert("RGB").resize((tw, th))
    x, y = (n % cols) * tw, (n // cols) * (th + 22)
    sheet.paste(im, (x, y + 22))
    draw.text((x + 6, y + 4), f.stem.split("-")[1], fill="black")
sheet.save(out)
print(out, sheet.size, len(frames), "frames")
