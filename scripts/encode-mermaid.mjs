import { deflateSync } from 'node:zlib';
import { readFileSync } from 'node:fs';

function encodeMermaid(code) {
  const deflated = deflateSync(Buffer.from(code, 'utf-8'));
  const base64 = deflated.toString('base64url');
  return `https://mermaid.ink/img/pako:${base64}`;
}

function extractAndEncode(mdPath) {
  const content = readFileSync(mdPath, 'utf-8');
  const blocks = [];
  const re = /```mermaid\n([\s\S]*?)```/g;
  let match;
  let idx = 0;
  while ((match = re.exec(content)) !== null) {
    idx++;
    const code = match[1].trim();
    const url = encodeMermaid(code);
    blocks.push({ index: idx, code, url, full: match[0] });
  }
  return blocks;
}

const files = process.argv.slice(2);
for (const f of files) {
  const blocks = extractAndEncode(f);
  if (blocks.length > 0) {
    console.log(`\n=== ${f} (${blocks.length} diagrams) ===`);
    for (const b of blocks) {
      console.log(`\n[Diagram ${b.index}]`);
      console.log(`URL: ${b.url}`);
    }
  }
}
