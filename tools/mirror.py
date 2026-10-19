#!/usr/bin/env python3
"""Mirror rosepracticesolutions.com byte-for-byte into a local folder.

usage: python3 tools/mirror.py <outdir> [origin]

Starts from the sitemap, llms.txt, robots.txt and a few well-known files, then
follows every same-origin reference it finds in HTML (href, src, srcset,
content, data-*, inline url()), CSS (url(), @import), JS (quoted root-relative
paths with a file extension) and the web manifest. Pages are saved the way a
Vercel cleanUrls project stores them: "/" -> index.html, "/about" ->
about.html, "/services/paid-ads" -> services/paid-ads.html. Bodies are written
exactly as served. <outdir>/../manifest.json records url, file, status,
content-type, etag, last-modified and sha256 for every response.
"""
import hashlib
import json
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path
from urllib.parse import urljoin, urlsplit

OUT = Path(sys.argv[1]).resolve()
ORIGIN = (sys.argv[2] if len(sys.argv) > 2 else "https://rosepracticesolutions.com").rstrip("/")
HOST = urlsplit(ORIGIN).netloc
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"

SEEDS = [
    "/", "/sitemap.xml", "/robots.txt", "/llms.txt", "/site.webmanifest",
    "/.well-known/security.txt", "/favicon.ico", "/404", "/components",
]
# Server endpoints, not files. Recorded as references only.
SKIP_PREFIXES = ("/api/",)

# href/src-style attributes may hold relative URLs; content= and data-* only count when they look like a URL.
HTML_ATTR = re.compile(r'''\s(href|src|srcset|imagesrcset|poster|action|content|data-[\w-]+)\s*=\s*(["'])(.*?)\2''', re.I | re.S)
URL_ATTRS = {"href", "src", "srcset", "imagesrcset", "poster", "action"}
CSS_URL = re.compile(r'''url\(\s*(["']?)([^"')]+)\1\s*\)''', re.I)
CSS_IMPORT = re.compile(r'''@import\s+(["'])([^"']+)\1''', re.I)
JS_PATH = re.compile(r'''["'`](/[A-Za-z0-9_\-./]+\.(?:css|js|mjs|json|svg|png|jpe?g|webp|avif|gif|ico|woff2?|ttf|otf|mp4|webm|txt|xml|webmanifest|pdf))["'`]''')
XML_LOC = re.compile(r"<loc>\s*([^<\s]+)\s*</loc>")
MD_LINK = re.compile(r"\((https?://[^)\s]+)\)")
ROBOTS_SITEMAP = re.compile(r"^Sitemap:\s*(\S+)", re.M | re.I)


def norm(ref, base):
    """Return a same-origin path (no query/fragment) or None."""
    ref = ref.strip()
    if not ref or ref.startswith(("#", "mailto:", "tel:", "javascript:", "data:", "blob:")):
        return None
    u = urlsplit(urljoin(base, ref))
    if u.scheme not in ("http", "https") or u.netloc != HOST:
        return None
    return u.path or "/"


def local_file(path, ctype):
    if path == "/":
        return "index.html"
    rel = path.lstrip("/")
    last = rel.rsplit("/", 1)[-1]
    if "text/html" in ctype and "." not in last:
        return rel.rstrip("/") + ".html"
    return rel


def refs_from(path, ctype, body):
    base = ORIGIN + path
    text = body.decode("utf-8", "replace")
    found = set()
    if "html" in ctype:
        for attr, _, val in HTML_ATTR.findall(text):
            parts = [p.strip().split(" ")[0] for p in val.split(",")] if attr.lower().endswith("srcset") else [val.strip()]
            for p in parts:
                if not p or re.search(r"\s", p):
                    continue
                if attr.lower() in URL_ATTRS or p.startswith(("/", "http://", "https://")):
                    found.add(p)
        for _, val in CSS_URL.findall(text):
            found.add(val)
        found.update(JS_PATH.findall(text))
    elif "css" in ctype:
        found.update(v for _, v in CSS_URL.findall(text))
        found.update(v for _, v in CSS_IMPORT.findall(text))
    elif "javascript" in ctype:
        found.update(JS_PATH.findall(text))
    elif "manifest" in ctype or path.endswith(".webmanifest"):
        try:
            for icon in json.loads(text).get("icons", []):
                found.add(icon.get("src", ""))
        except json.JSONDecodeError:
            pass
    elif "xml" in ctype:
        found.update(XML_LOC.findall(text))
    elif path.endswith("robots.txt"):
        found.update(ROBOTS_SITEMAP.findall(text))
    elif path.endswith("llms.txt"):
        found.update(MD_LINK.findall(text))
    return {p for p in (norm(r, base) for r in found) if p}


def fetch(path):
    req = urllib.request.Request(ORIGIN + path, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.status, r.geturl(), dict(r.headers), r.read()
    except urllib.error.HTTPError as e:
        return e.code, e.geturl(), dict(e.headers), e.read()
    except (ValueError, urllib.error.URLError, OSError) as e:
        # Malformed reference or network failure: record it as status 0 so it shows up in the summary.
        return 0, ORIGIN + path, {"X-Mirror-Error": str(e)}, b""


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    queue, seen, records, skipped = list(SEEDS), set(), [], set()
    while queue:
        path = queue.pop(0)
        if path in seen:
            continue
        seen.add(path)
        if path.startswith(SKIP_PREFIXES):
            skipped.add(path)
            continue
        status, final, headers, body = fetch(path)
        final_path = urlsplit(final).path or "/"
        ctype = headers.get("Content-Type", "")
        rec = {
            "url": ORIGIN + path, "status": status, "content_type": ctype,
            "etag": headers.get("ETag"), "last_modified": headers.get("Last-Modified"),
            "bytes": len(body), "sha256": hashlib.sha256(body).hexdigest(),
        }
        if "X-Mirror-Error" in headers:
            rec["error"] = headers["X-Mirror-Error"]
        if final_path != path:
            rec["redirected_to"] = final_path
            if final_path not in seen:
                queue.append(final_path)
            records.append(rec)
            continue
        # The custom 404 page is served at /404 with 200; a real miss is noted, not saved.
        if status != 200:
            records.append(rec)
            print(f"  {status} {path}")
            continue
        rel = local_file(path, ctype)
        dest = OUT / rel
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(body)
        rec["file"] = rel
        records.append(rec)
        print(f"  200 {path} -> {rel} ({len(body):,} B)")
        for ref in sorted(refs_from(path, ctype, body)):
            if ref not in seen:
                queue.append(ref)
        time.sleep(0.05)
    manifest = {
        "origin": ORIGIN,
        "fetched_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "not_fetched_server_endpoints": sorted(skipped),
        "responses": sorted(records, key=lambda r: r["url"]),
    }
    (OUT.parent / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
    ok = sum(1 for r in records if r.get("file"))
    bad = [r for r in records if r["status"] != 200 and "redirected_to" not in r]
    print(f"saved {ok} files; {len(bad)} non-200; skipped endpoints: {sorted(skipped)}")


if __name__ == "__main__":
    main()
