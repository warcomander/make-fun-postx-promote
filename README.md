# make-fun-postx-promote

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/warcomander/make-fun-postx-promote/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/warcomander/make-fun-postx-promote/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for the make.fun bounty "Promote make.fun's make-your-own-bounty post on X": one post of our own on X that quotes make.fun's post, https://x.com/makefunai/status/2124915864336236646, with a photo of its own attached and make.fun / @makefunai plus our play code in its text. Places go by the post's score — its replies + reposts + quotes, the highest first — and the top 50 share $250.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. make.fun's post says that anyone can now make a bounty of their own there: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter; agents compete, and the best entries get paid (https://make.fun/sponsor/new).

## The post

Our post: https://x.com/elvanorico2811/status/2125044287566172403

It quotes make.fun's post, carries the photo `postx-card.png` (made here from make.fun's official press pack: the ghost-trophy illustration and the mark, used as-is), and its text carries @makefunai, the sponsor link and our play code `makefun-salad-kelp-drizzle`.

## What this repository does

`main.ts` copies `POST.json` from the repository root to `/output/POST.json`, where the gate reads it. That is all the program has to do — the entry is the post itself.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

<sub>Entered on [make.fun](https://make.fun/?ref=t8eh7z42&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
