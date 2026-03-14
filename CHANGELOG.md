# Changelog

All notable changes to this project will be documented in this file.
Maintained date-wise in descending order (latest first).

---

## [Unreleased]
> Changes that are in progress or planned but not yet committed.

---

## 2026-03-14

### Added
- **`@tailwindcss/postcss`** — Installed as required PostCSS plugin for Tailwind v4

### Fixed
- **`vite.config.js`** — Fixed missing closing `})` syntax error that was causing Vercel build to fail with `Expected "}" but found end of file`; also removed stale Emergent agent `allowedHosts` from `server` and `preview` blocks

### Changed
- **`vite.config.js`** — Added `build.rollupOptions.output.manualChunks` to split large bundle into smaller cacheable chunks — `react-vendor`, `framer-motion`, `recharts` now loaded separately; main `index.js` reduced from **511 KB → 255 KB**
- **`README.md`** — Added `Deploy via Vercel CLI` section with all CLI commands: `vercel login`, `vercel`, `vercel --prod`, `vercel ls`, `vercel inspect`

### Changed
- **`package.json`** — Updated Node engine from `>=22.0.0` to `24.x`, updated Volta node pin to `24.13.1`, added `@tailwindcss/postcss` to dependencies
- **`package-lock.json`** — Updated to reflect new `@tailwindcss/postcss` package and dependency upgrades
- **`postcss.config.js`** — Replaced `tailwindcss: {}` with `'@tailwindcss/postcss': {}` — required breaking change in Tailwind v4
- **`tailwind.config.js`** — Removed dead theme config (colors, fonts, animations, keyframes) — all moved to `src/index.css @theme` block as per Tailwind v4; kept only `content` and `darkMode`
- **`src/index.css`** — Migrated from `@tailwind base/components/utilities` to `@import "tailwindcss"`, added full `@theme` block with all custom colors (primary/secondary/accent), fonts, and animations
- **`src/App.jsx`** — Fixed dark mode applying inconsistently — removed nested double div, now single div with `dark:` classes driven by `<html>` class toggle
- **`src/components/Hero.jsx`** — Moved `qaQuotes` and `typingTexts` outside component to fix `react-hooks/exhaustive-deps` ESLint warning; removed duplicate `Lakshya Sharma` h1 (already shown in Header); fixed text-over-image overlap by replacing absolute-positioned image with flexbox two-column layout (`flex-1` text + `flex-shrink-0` image); image now visible on mobile (stacked), side-by-side on desktop
- **`src/components/Experience.jsx`** — Replaced solid green gradient timeline line with subtle dashed gray line using `repeating-linear-gradient`; replaced filled dot with ring-style dot (white center, teal border, inner dot)

### Fixed
- **Dark mode** — Was only applying to some components due to nested `dark` class on wrapper div; fixed by toggling `dark` class only on `<html>` element and using a single wrapper div
- **ESLint warning** — `react-hooks/exhaustive-deps` on `useEffect` in `Hero.jsx` resolved by moving `qaQuotes` array outside component
- **Hero text overlap** — Description text was overlapping profile image on large screens due to `absolute` positioning; fixed with flexbox layout
- **Timeline UI** — Replaced visually distracting solid green left border line with cleaner dashed style

---

## 2026-03-14

### Fixed
- **`package.json`** — Removed UTF-8 BOM character (`EF BB BF`) from start of file that was causing Vercel deployment to fail with `Unexpected token` JSON parse error
- **`.prettierrc`** — Removed UTF-8 BOM character (same issue)
- **`.prettierignore`** — Removed UTF-8 BOM character (same issue)

> **Root cause:** Windows text editors sometimes save files with a UTF-8 BOM prefix which breaks JSON parsing on Linux-based systems like Vercel.

---

## 2026-03-14

### Added
- **CHANGELOG.md** — Created this changelog file to track all project changes going forward
- **`.prettierrc`** — Added Prettier configuration (semi, singleQuhnagesote, tabWidth, trailingComma, printWidth, etc.)
- **`.prettierignore`** — Added Prettier ignore rules for `node_modules`, `dist`, `build`, `*.min.js`, `package-lock.json`
- **`public/lakshyaSharmaQaAutomationEngineerResume(1).pdf`** — Uploaded updated resume PDF copy

### Changed
- **`package.json`** — Renamed project from `app` to `lakshyasharmaqa-portfolio`, bumped version to `1.0.0`, added Node/npm engine requirements, added `volta` config, added `lint:fix`, `format`, and `format:check` scripts, added `prettier` as devDependency, moved `framer-motion`, `react-intersection-observer`, `react-typed`, `recharts` to `dependencies` (from devDependencies), upgraded `tailwindcss` from `v3` → `v4`, upgraded `vite` from `v7` → `v6`, upgraded `react` and `react-dom` to `v19.2.4`
- **`package-lock.json`** — Updated to reflect all dependency changes above
- **`public/lakshyaSharmaQaAutomationEngineerResume.pdf`** — Updated resume content: added new role at TuningBill Ltd, updated location to Jaipur, added smiONE Fintech project, updated AEYE/YAKSHA projects, added ISTQB and Generative AI certifications, updated skills with TypeScript and BrowserStack
- **`README.md`** — Full rewrite: cleaner structure, removed bloated sections, added tech stack table, improved local setup steps, added detailed Vercel deployment guide with auto-deploy explanation
- **`src/App.jsx`** — Removed unused `profileData` import

### Removed
- **`.emergent/emergent.yml`** — Deleted auto-generated Emergent agent config file (not needed)
- **`.gitconfig`** — Deleted auto-generated Emergent agent git config (not needed)

---

## 2025-10-01

### Added
- Uploaded `ISTQB Result.png` certification image to the project

---

## 2025-09-23

### Fixed
- Replaced profile image (`profile-portfolio.png`) with corrected version

---

## 2025-09-22

### Added
- Added new profile image (`profile-portfolio.png`) to assets
- Added `package-lock.json` to the repository

### Changed
- Updated `.gitignore` for UAT branch testing

---

## 2025-09-21

### Changed
- **Header.jsx** — Updated name display on top-left of navigation bar
- **Hero.jsx** — Updated hero section with profile image and layout improvements
- **Resume.jsx** — Resume "Last Updated" now dynamically syncs to current month and year (no manual updates needed)
- **profile.js** — Updated project descriptions, general text content, and resume file path
- **Assets** — Uploaded updated image assets

### Removed
- Deleted unused `public/vite.svg` default Vite asset

---

## 2025-09-20

### Added
- Initial project setup — React 19 + Vite + Tailwind CSS portfolio
- Uploaded `resume.pdf` to `/public` folder

### Changed
- **Contact.jsx** — Integrated EmailJS with actual service ID, template ID, and API keys for functional contact form
- **About.jsx** — Updated section content and text copy
- **profile.js** — Updated personal information, skills, experience, and project data
- **index.html** — Updated page title, meta description, and SEO tags
- **sitemap.xml** — Updated sitemap with correct URLs

### Fixed
- Renamed resume file from `resume.pdf.pdf` → `resume.pdf` (fixed double extension issue)

---

## How to Maintain This File

- Add a new date section `## YYYY-MM-DD` at the top (below `[Unreleased]`) for every update
- Use these categories to describe changes:
  - **Added** — New features, files, or sections
  - **Changed** — Updates to existing functionality or content
  - **Fixed** — Bug fixes or corrections
  - **Removed** — Deleted files or features
- Keep entries short and clear — one line per change is enough
- Commit this file along with your code changes every time
