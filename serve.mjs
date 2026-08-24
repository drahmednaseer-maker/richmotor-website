import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const OUT = path.join(process.cwd(), 'dist');
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.avif': 'image/avif', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.pdf': 'application/pdf', '.xml': 'application/xml', '.txt': 'text/plain', '.svg': 'image/svg+xml' };

createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  let file = path.join(OUT, p);
  try {
    const s = await stat(file).catch(() => null);
    if (!s || s.isDirectory()) file = path.join(file, 'index.html');
    const data = await readFile(file);
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404</h1>');
  }
}).listen(4321, () => console.log('http://localhost:4321'));
