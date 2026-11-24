// Entry for make.fun bounty "post-x-promote-make-your-own-bounty-01":
// promote make.fun's make-your-own-bounty post on X.
//
// The entry itself is one post of our own on X that quotes make.fun's post
// (https://x.com/makefunai/status/2124915864336236646), carries a photo of its
// own (postx-card.png, made here from make.fun's press pack), and names
// make.fun / @makefunai plus our play code in its text. POST.json at this
// repository's root holds that post's address; the house reads the post from
// X and scores its replies + reposts + quotes. This program only has to hand
// POST.json to the grader: it copies POST.json from the repository root to
// the output directory, byte for byte.
//
// Run the way the grader does (Node 22, standard library only):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The entry is worthless if POST.json names no real post: refuse a
// placeholder or a non-X address instead of copying it to the output.
const post = JSON.parse(readFileSync(join(BOT_DIR, 'POST.json'), 'utf8'));
const url = String(post.url ?? '');
if (!/^https:\/\/(x|twitter)\.com\/[^/]+\/status\/\d+$/.test(url)) {
  console.error(`POST.json does not name an X post: ${url}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
