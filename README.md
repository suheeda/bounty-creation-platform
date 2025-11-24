# Bounty Wizard - Frontend Assignment

## Project Overview
This is a React + Vite + Tailwind CSS app implementing a 3-step **Add Bounty** wizard:
- Step 1: Basics
- Step 2: Rewards & Timeline
- Step 3: Backer & Terms
Includes validation, sidebar navigation, context state persistence, final JSON payload and result screen.

## Tech Stack
- React (hooks, functional components)
- Vite
- Tailwind CSS
- React Router

## Folder Structure
```
/src
  /components
  /context
  /pages
  /utils
  App.jsx
  main.jsx
```

## Setup & Run
1. Install dependencies:
```bash
npm install
```
2. Start dev server:
```bash
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Notes
- The submit simulates a server request using `setTimeout` and then redirects to a Confirmation & Result page showing the final JSON payload.
- Deployment: works with Vercel/Netlify (build output is `dist`).
- Deadline note: Original assignment deadline was Nov 25, 2025; please check with the reviewer if you submit after that date.

