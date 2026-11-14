# getjoe.dev

Personal portfolio site of Joe Palala, a senior full-stack engineer (Java, PHP, TypeScript). It shows selected projects and a one-page resume.

## Stack

Next.js 16 (App Router, `src/app`), React 19, Tailwind CSS 4, plain JavaScript (no TypeScript). Lint with Biome, format with Prettier.

## Commands

- `npm run dev`: dev server
- `npm run build`: production build (run before committing)
- `npm run lint`: Biome lint
- `npm run format`: Prettier (2-space indent); `npm run format:check` to verify

## Layout

- `src/app/page.js`: homepage, project cards from `_data/projects.js`
- `src/app/resume/page.js`: one-page resume, rendered from `_data/resume.json`
- `src/app/resume.json/route.js`: serves the same JSON at `/resume.json`
- `src/app/_components/`: shared components (`ProjectCard`, `TerminalBackdrop`)
- `src/app/globals.css`: theme tokens (light and dark) and print styles

## Conventions

- Content lives in `_data/`. Edit `resume.json` or `projects.js`, not the pages.
- The nav "Download Resume" button opens `/resume?download=1`, which triggers the browser print dialog (Save as PDF). Keep the resume print-friendly and on one page.
- Keep the design minimal and readable. Use the theme tokens in `globals.css`, not hard-coded colors, except on the resume page, which is intentionally plain white.
- No phone number or home address in `resume.json`. The file is served publicly.
- Commits: short single-line messages, no body.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
