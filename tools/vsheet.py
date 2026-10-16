#!/usr/bin/env python3
"""Contact sheet of a video at a fixed time step (needs ffmpeg).

  python3 tools/vsheet.py <video> <out.png> [every_s=0.5] [cols=5] [thumb_w=360] [crop=x,y,w,h]
"""
import subprocess
import sys
import tempfile
from pathlib import Path

from PIL import Image, ImageDraw

video, out = sys.argv[1], sys.argv[2]
every = float(sys.argv[3]) if len(sys.argv) > 3 else 0.5
cols = int(sys.argv[4]) if len(sys.argv) > 4 else 5
tw = int(sys.argv[5]) if len(sys.argv) > 5 else 360
crop = sys.argv[6] if len(sys.argv) > 6 else None
with tempfile.TemporaryDirectory() as tmp:
    vf = f"fps=1/{every}"
    if crop:
        x, y, w, h = crop.split(",")
        vf = f"crop={w}:{h}:{x}:{y}," + vf
    subprocess.run(["ffmpeg", "-loglevel", "error", "-i", video, "-vf", vf, f"{tmp}/f%04d.png"], check=True)
    frames = sorted(Path(tmp).glob("f*.png"))
    first = Image.open(frames[0])
    th = round(first.height * tw / first.width)
    rows = (len(frames) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * tw, rows * (th + 20)), "white")
    d = ImageDraw.Draw(sheet)
    for n, f in enumerate(frames):
        x, y = (n % cols) * tw, (n // cols) * (th + 20)
        sheet.paste(Image.open(f).convert("RGB").resize((tw, th)), (x, y + 20))
        d.text((x + 4, y + 4), f"{n * every:.1f}s", fill="black")
    sheet.save(out)
    print(out, sheet.size, len(frames), "frames")
