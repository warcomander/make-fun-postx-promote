// Entry for the make.fun bounty "post-x-promote-make-your-own-bounty-01"
// (promote make.fun's make-your-own-bounty post on X).
//
// The entry itself is a single post of our own on X: it quotes make.fun's
// post at https://x.com/makefunai/status/2124915864336236646, carries a photo
// of its own, and its text names make.fun / @makefunai plus our play code.
// POST.json in this repository's root holds that post's address, and the
// house reads the post from X and scores its replies + reposts + quotes.
// This program only hands POST.json to the grader: it first checks that the
// address in POST.json is really an X post address, then copies POST.json
// from the repository root into the output directory, byte for byte.
//
// Run the way the grader runs it (Node 22, standard library only):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// An X post address: https://x.com/<handle>/status/<digits>, or the same
// on twitter.com. Anything else (a placeholder, make.fun's own post, a
// profile link) is not a post of our own and must fail loudly here instead
// of silently handing the gate a bad address.
const POST_URL = /^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+\/?$/;

const postPath = join(BOT_DIR, 'POST.json');
const post = JSON.parse(readFileSync(postPath, 'utf8')) as { url?: unknown };
if (typeof post.url !== 'string' || !POST_URL.test(post.url)) {
  console.error(`POST.json url is not an X post address: ${String(post.url)}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
