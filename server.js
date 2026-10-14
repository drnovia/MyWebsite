#!/usr/bin/env node
/**
 * Minimal static server for the NOVIA STUDIO portfolio (no install step).
 */
const { createServer } = require("node:http");
const { readFile } = require("node:fs/promises");
const { join, extname } = require("node:path");

const PORT = Number(process.env.PORT) || 4173;
const ROOT = __dirname;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webm": "video/webm",
};

createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? "/", `http://127.0.0.1:${PORT}`);
    let pathname = decodeURIComponent(url.pathname);
    if (pathname.endsWith("/")) pathname += "index.html";
    const filePath = join(ROOT, pathname.replace(/^\//, ""));
    const data = await readFile(filePath);
    const type = MIME[extname(filePath).toLowerCase()] ?? "application/octet-stream";
    res.writeHead(200, { "Content-Type": type, "Cache-Control": "no-cache" });
    res.end(data);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
  }
}).listen(PORT, "127.0.0.1", () => {
  console.log(`NOVIA STUDIO portfolio → http://127.0.0.1:${PORT}`);
});
