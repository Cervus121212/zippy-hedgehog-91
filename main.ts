// Entry program for post-x-promote-make-your-own-bounty-01 (Node 22, stdlib only).
// The X post itself is the entry; this program hands its address to the gate by
// copying POST.json from the repo root into the grader's output directory. It also
// leaves a short note there so a reviewer can see which post was handed in
// without opening the JSON file.

import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postPath = join(repoRoot, 'POST.json');
const raw = readFileSync(postPath, 'utf8');
const entry = JSON.parse(raw) as { url?: unknown };

const url = typeof entry.url === 'string' ? entry.url.trim() : '';
const looksReal =
  /^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+/.test(url) && !url.includes('<');
if (!looksReal) {
  console.error(`POST.json does not name a real X post URL: ${url || '(empty)'}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(postPath, join(outDir, 'POST.json'));
writeFileSync(
  join(outDir, 'ENTRY.txt'),
  [
    'post-x-promote-make-your-own-bounty-01',
    `post: ${url}`,
    'quotes: https://x.com/makefunai/status/2124915864336236646',
    '',
  ].join('\n'),
  'utf8',
);
console.log(`entry post handed in: ${url}`);
