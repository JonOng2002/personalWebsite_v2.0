# Personal Portfolio Website

A bento-grid portfolio site built with React + TypeScript + Vite. The layout is component-driven (each “card” is a unit), so new projects/features can be added without redesigning the whole page.

Live site: jonongca.com

## What this project does
- Renders a bento-style grid of cards for projects, experience, and interactive widgets.
- Uses a consistent design system (Tailwind + reusable components) for spacing, typography, and dark mode styling.
- Includes a Spotify widget that shows “Now Playing” (when active) or falls back to “Last Played”.

## Spotify widget (how it works)
The Spotify card reads from serverless API endpoints deployed on Vercel:
- The frontend polls an API route (e.g. `/api/now-playing`) periodically.
- The serverless function uses a Spotify refresh token to request an access token and fetch playback state.
- The UI renders either “Now Playing” (live) or “Last Played” if nothing is currently playing.

This keeps secrets on the serverless side (client never needs Spotify credentials). 
## Tech stack
- React + TypeScript
- Vite
- Tailwind CSS
- Vercel (hosting + serverless functions under `/api`)
## Local development
### Prerequisites
- Node.js
- Vercel CLI (`npm i -g vercel`)

### Run locally
```bash
git clone <your-repo-url>
cd <repo-folder>
npm install
vercel dev
