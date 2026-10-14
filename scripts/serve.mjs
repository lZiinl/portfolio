import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { dirname, resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = dirname(dirname(fileURLToPath(import.meta.url)));
const port = Number(process.env.PORT || 4173);
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.gif':'image/gif'};
const server = http.createServer(async (req,res) => {
  try {
    let pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (pathname.endsWith('/')) pathname += 'index.html';
    // Only serve the website, not authoring data, local notes, or Git metadata.
    if (!/^\/(index\.html|projects\/[a-z-]+\.html|assets\/[a-zA-Z0-9._/-]+)$/.test(pathname)) {
      res.writeHead(404);res.end('Not found');return;
    }
    const path = resolve(root, '.' + pathname);
    if (!path.startsWith(root + sep) || !(await stat(path)).isFile()) {res.writeHead(404);res.end('Not found');return;}
    const body = await readFile(path);
    res.writeHead(200, {'Content-Type':mime[extname(path)] || 'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
    res.end(body);
  } catch {res.writeHead(404);res.end('Not found');}
});
server.listen(port,'127.0.0.1',() => console.log(`Local: http://127.0.0.1:${port}`));
