# Changelog

All notable changes to this project will be documented in this file.
Maintained date-wise in descending order (latest first).

---

## [Unreleased]
> Changes that are in progress or planned but not yet committed.

---


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
