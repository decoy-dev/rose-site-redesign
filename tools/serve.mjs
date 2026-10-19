// Serve a static folder the way Vercel's cleanUrls does, so root-relative links work locally.
//   bun tools/serve.mjs <dir> [port=4173]
// "/about" -> about.html, "/services" -> services.html, "/" -> index.html.
// "/about.html" and "/x/index.html" redirect (308) to the clean URL, as on the live site.
// Anything else is a 404 with 404.html as the body. POSTs (the /api/book-a-call forms) get a 404 JSON reply,
// so nothing is ever sent to the real API from a local preview.
import { resolve, join, normalize } from "node:path";
import { existsSync, statSync } from "node:fs";

const [dir = "clone/site", port = "4173"] = process.argv.slice(2);
const root = resolve(dir);

const isFile = (p) => existsSync(p) && statSync(p).isFile();

function lookup(pathname) {
  const rel = normalize(decodeURIComponent(pathname)).replace(/^\/+/, "");
  if (rel.startsWith("..")) return null;
  const base = join(root, rel);
  if (!base.startsWith(root)) return null;
  if (rel === "" || rel === "/") return join(root, "index.html");
  for (const candidate of [base, base + ".html", join(base, "index.html")]) {
    if (isFile(candidate)) return candidate;
  }
  return null;
}

Bun.serve({
  port: Number(port),
  fetch(req) {
    const url = new URL(req.url);
    if (req.method !== "GET" && req.method !== "HEAD") {
      return Response.json({ ok: false, error: "local preview: forms are not sent" }, { status: 404 });
    }
    const clean = url.pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
    if (clean !== url.pathname && clean !== "") {
      const target = clean.length > 1 ? clean.replace(/\/$/, "") : "/";
      return Response.redirect(target + url.search, 308);
    }
    if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
      return Response.redirect(url.pathname.replace(/\/+$/, "") + url.search, 308);
    }
    const file = lookup(url.pathname);
    if (file) return new Response(Bun.file(file));
    const notFound = join(root, "404.html");
    return new Response(isFile(notFound) ? Bun.file(notFound) : "Not found", {
      status: 404,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  },
});
console.log(`serving ${root} at http://127.0.0.1:${port}/`);
