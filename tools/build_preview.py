#!/usr/bin/env python3
"""Build the GitHub Pages preview of the clone's landing page.

usage: python3 tools/build_preview.py [src=clone/site] [out=_site] [base=/rose-site-redesign]

Copies only the homepage (index.html), its assets and icons from src to out, and adapts the copy, never the source
(clone/site stays byte for byte what Jules gets):
- Pages serves the project under a sub-path, so the homepage's own files ("/assets/...", "/", the icons) get the base
  path in front, and links to every other page go to the live site (https://rosepracticesolutions.com/...).
- The page gets <meta name="robots" content="noindex, nofollow"> and robots.txt disallows everything, so the preview
  never competes with the live site in search (its canonical already points there).
- The LeadConnector chat widget is left out, so nobody starts a real conversation from the preview. GTM and Clarity
  already load only on the production domain, and the forms post to the preview's own path, so nothing is sent.
"""
import re
import shutil
import sys
from pathlib import Path

SRC = Path(sys.argv[1] if len(sys.argv) > 1 else "clone/site")
OUT = Path(sys.argv[2] if len(sys.argv) > 2 else "_site")
BASE = (sys.argv[3] if len(sys.argv) > 3 else "/rose-site-redesign").rstrip("/")
LIVE = "https://rosepracticesolutions.com"
KEEP = ["index.html", "assets", "favicon.ico", "icon-32.png", "icon-192.png", "icon-512.png", "apple-touch-icon.png", "site.webmanifest"]
OWN = ("assets/", "favicon.ico", "icon-", "apple-touch-icon", "site.webmanifest", "api/")

ATTR = re.compile(r'(\s(?:href|src|action|poster|srcset|content)=)(["\'])/(?!/)([^"\']*)')
CSS_URL = re.compile(r'url\((["\']?)/(?!/)')
JS_ASSET = re.compile(r'(["\'`])/(?=assets/)')
JS_PAGE = re.compile(r'(["\'`])/(?=(?:contact|about|services|pricing|privacy|terms|accessibility|ai-policy|orthodontic-marketing|dental-marketing)\b)')
WIDGET = re.compile(r'[ \t]*<!-- LeadConnector chat widget[^>]*-->\s*\n[ \t]*<script src="https://widgets\.leadconnectorhq\.com/[^"]*"[^>]*></script>\s*\n?')
NOINDEX = '<meta name="robots" content="noindex, nofollow"><!-- preview build only (tools/build_preview.py) -->'


def url(m):
    path = m.group(3)
    if path == "" or path.startswith(("#", "?")) or path.startswith(OWN):
        return f"{m.group(1)}{m.group(2)}{BASE}/{path}"
    return f"{m.group(1)}{m.group(2)}{LIVE}/{path}"


def main():
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)
    for name in KEEP:
        src = SRC / name
        (shutil.copytree if src.is_dir() else shutil.copy2)(src, OUT / name)
    page = OUT / "index.html"
    text = ATTR.sub(url, page.read_text("utf-8"))
    text = CSS_URL.sub(lambda m: f"url({m.group(1)}{BASE}/", text)
    text = WIDGET.sub("", text)
    text = re.sub(r"(<meta charset=[^>]*>)", r"\1\n" + NOINDEX, text, count=1)
    page.write_text(text, "utf-8")
    for css in (OUT / "assets").glob("*.css"):
        css.write_text(CSS_URL.sub(lambda m: f"url({m.group(1)}{BASE}/", css.read_text("utf-8")), "utf-8")
    js = OUT / "assets" / "site.js"
    js.write_text(JS_PAGE.sub(lambda m: f"{m.group(1)}{LIVE}/", JS_ASSET.sub(lambda m: f"{m.group(1)}{BASE}/", js.read_text("utf-8"))), "utf-8")
    manifest = OUT / "site.webmanifest"
    manifest.write_text(re.sub(r'"/', f'"{BASE}/', manifest.read_text("utf-8")), "utf-8")
    (OUT / "robots.txt").write_text("User-agent: *\nDisallow: /\n", "utf-8")
    print(f"built {OUT}: the landing page from {SRC}, base {BASE}/")


if __name__ == "__main__":
    main()
