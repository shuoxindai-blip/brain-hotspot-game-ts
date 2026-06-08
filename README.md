# Brain Anatomy Challenge

React + TypeScript + Tailwind implementation of the Brain Anatomy Challenge.

## Stack

- React
- TypeScript
- Tailwind CSS
- Vite

## Structure

- `src/types/game.ts` defines reusable game, question, and result contracts.
- `src/data/brainGame.ts` contains the current brain anatomy hotspot question set.
- `src/data/gameModes.ts` contains shared mode definitions.
- `src/hooks/useHotspotGame.ts` owns gameplay state, scoring, timing, logs, and results.
- `src/components/` contains the UI pieces for HUD, mode selection, hotspot diagram, quiz panel, answer log, related games, and result board.

## Development

```bash
npm install
npm run dev
npm run build
```
