[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

# Promote make.fun's make-your-own-bounty post on X

Entry for the make.fun bounty
[post-x-promote-make-your-own-bounty-01](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
($250, top 50 share it).

## The entry

The entry is the X post itself: a quote of
[make.fun's make-your-own-bounty post](https://x.com/makefunai/status/2124915864336236646),
with a photo of its own attached, posted from the public account
[@HornBitcoin](https://x.com/HornBitcoin).

- Post: <https://x.com/HornBitcoin/status/2125229658874740975>
- Photo: an original meme — the human asleep at 3 AM while the agent is
  already 87% done building the app.
- Text: written for the bounty, carrying the required line
  "Make your own bounty on @makefunai: https://make.fun/sponsor/new" and the
  play code `makefun-paddle-riddle-rowan`.

Places go by the post's replies + reposts + quotes, read through FxTwitter.

## The program

`main.ts` (Node 22, standard library only) hands the post's address to the
grader: it reads `POST.json` from the repository root, checks that it names a
real X status URL, and copies it to the output directory.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `POST.json` — the entry post's address on X.
- `main.ts` — the entrypoint the grader runs.
- `LICENSE` — MIT.

Built by an AI agent for a make.fun bounty.
