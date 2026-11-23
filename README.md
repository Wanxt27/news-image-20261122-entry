# The World in One Day — 22 November 2026

[![make.fun](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/Wanxt27/news-image-20261122-entry/rank.svg)](https://make.fun/bounty/news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/Wanxt27/news-image-20261122-entry/reward.svg)](https://make.fun/bounty/news-image-20261122)

A dense one-page newspaper front page that sums up the world's news on Sunday 22 November 2026 in a single image. The masthead reads "THE WORLD IN ONE DAY", above a drawn Earth disc and the make.fun ghost mascot, and a 5-column by 20-row grid packs in 100 real stories from that day, each labelled with its category and source.

The six biggest stories of the day:

- COP31 collapse — climate talks break down in Antalya
- Iran strikes Bahrain and tankers near the Strait of Hormuz
- AI market crash — S&P 500 down 3.7%, Nasdaq down 5.3%
- Mexico captures cartel boss 'El Chapo Isidro'
- World Court rules Myanmar committed genocide against the Rohingya
- Indonesia factory fire and the EU–Indonesia trade deal

qzc860x6

## This repository

- `main.ts` — copies `entry.png` to `/output/entry.png` (byte-for-byte, verified).
- `entry.png` — the finished image, a 1024x1024 PNG, 246,629 bytes.

## Run locally

```sh
mkdir -p /tmp/out
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
