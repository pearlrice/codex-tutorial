import { deflateSync } from 'node:zlib';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

function encodeMermaid(code) {
  const deflated = deflateSync(Buffer.from(code, 'utf-8'));
  const base64 = deflated.toString('base64url');
  return `https://mermaid.ink/img/pako:${base64}`;
}

const files = [
  'K:/Ai/codex/general/codex_tut2/chapters/01-what-is-codex.md',
  'K:/Ai/codex/general/codex_tut2/chapters/02-installation.md',
  'K:/Ai/codex/general/codex_tut2/chapters/03-first-use.md',
  'K:/Ai/codex/general/codex_tut2/chapters/04-basic-features.md',
  'K:/Ai/codex/general/codex_tut2/chapters/05-skills.md',
  'K:/Ai/codex/general/codex_tut2/chapters/06-practical-capabilities.md',
  'K:/Ai/codex/general/codex_tut2/chapters/07-customization.md',
  'K:/Ai/codex/general/codex_tut2/chapters/08-best-practices.md',
];

const outDir = 'K:/Ai/codex/general/codex_tut2/chapters-notion';
mkdirSync(outDir, { recursive: true });

for (const f of files) {
  let content = readFileSync(f, 'utf-8');
  let count = 0;

  content = content.replace(/```mermaid\n([\s\S]*?)```/g, (match, code) => {
    count++;
    const url = encodeMermaid(code.trim());
    return `![Mermaid 图表 ${count}](${url})`;
  });

  const outPath = join(outDir, f.split('/').pop());
  writeFileSync(outPath, content, 'utf-8');
  console.log(`${f.split('/').pop()}: ${count} diagrams replaced -> ${outPath}`);
}
