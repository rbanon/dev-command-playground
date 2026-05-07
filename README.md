# Dev Command Playground

A modern **Single Page Application (SPA)** for developers to quickly look up commands organized by technology and use case.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)]()
[![Built with Vue 3](https://img.shields.io/badge/built%20with-Vue%203-4FC08D?style=flat-square&logo=vue.js)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)]()
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite)]()

## ✨ Features

### 🔍 Smart Filtering
- Search commands by text (command, description, example)
- Filter by category, use case, difficulty level, and risk level
- Real-time results with instant feedback

### 📋 Dual View Modes
- **Table view** — compact, scannable list with all details
- **Cards view** — larger cards with full context

### 🛠️ 13 Technologies
Git, GitHub CLI, Bash, Docker, Kubectl, Node.js, npm, Yarn, pnpm, SQL, Vue/Vite, Angular CLI, Claude CLI

### 🌐 Internationalization (i18n)
- **English and Spanish**
- Real-time language switching
- localStorage persistence

### 🎨 Light/Dark Theme
- **Dark mode** by default
- **Light mode** with clean colors
- Auto-detection of system theme
- Header toggle

### 📋 Copy to Clipboard
- One-click copy for any command
- Visual confirmation feedback

### ⭐ Featured Commands
- Home page highlights commands from across all technologies

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| **Framework** | Vue 3 + Composition API |
| **Language** | TypeScript |
| **Bundler** | Vite 6 |
| **Styles** | Custom SCSS + CSS custom properties |
| **i18n** | vue-i18n |
| **State/Cache** | TanStack Vue Query |
| **Router** | Vue Router 4 |
| **Data** | Static TypeScript files |
| **Icons** | lucide-vue-next |

## 📦 Installation

### Requirements
- Node.js 18+
- npm, yarn, or pnpm

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/rbanon/dev-command-playground.git
cd dev-command-playground

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

## 📁 Project Structure

```
src/
├── assets/styles/
│   ├── tokens.scss            # CSS custom properties (colors, spacing, etc.)
│   └── global.scss            # Global resets and base styles
├── components/
│   ├── AppHeader.vue          # Sticky header with theme/language controls
│   ├── TechnologySidebar.vue  # Left nav with technology list + search
│   ├── CommandToolbar.vue     # Search + filter bar above command list
│   ├── CommandTable.vue       # Table view for commands
│   ├── CommandCard.vue        # Card view for individual command
│   ├── FeaturedCommands.vue   # Home page featured commands grid
│   ├── CopyButton.vue         # One-click copy with feedback
│   ├── LoadingState.vue       # Skeleton and spinner states
│   └── EmptyState.vue         # Empty / error / not-found states
├── composables/
│   ├── useTechnologies.ts     # Technologies data via TanStack Query
│   ├── useCommands.ts         # Commands data filtered by technology
│   ├── useFilters.ts          # Search and filter state logic
│   └── useTheme.ts            # Dark/light mode toggle
├── data/
│   ├── index.ts               # Aggregates and exports all data
│   ├── technologies.ts        # Technology list
│   └── commands/
│       ├── git.ts
│       ├── github.ts
│       ├── bash.ts
│       ├── docker.ts
│       ├── kubectl.ts
│       ├── nodejs.ts
│       ├── npm.ts
│       ├── yarn.ts
│       ├── pnpm.ts
│       ├── sql.ts
│       ├── vue.ts
│       ├── angular.ts
│       └── claude.ts
├── i18n/
│   ├── index.ts
│   └── locales/
│       ├── en.ts              # English translations
│       └── es.ts              # Spanish translations
├── router/index.ts            # Vue Router (/, /tech/:slug)
├── types/
│   ├── technology.ts
│   └── command.ts
├── views/
│   ├── HomeView.vue           # Featured commands home page
│   └── TechView.vue           # Per-technology command browser
├── App.vue                    # Root component with sidebar layout
└── main.ts                    # Entry point
```

## 🎨 Themes

### Dark Mode (Default)
```scss
--bg-primary:   #0d1117
--text-primary: #e6edf3
--accent:       #58a6ff
```

### Light Mode
```scss
--bg-primary:   #ffffff
--text-primary: #1f2328
--accent:       #0969da
```

## 🚦 Available Scripts

```bash
npm run dev        # Start Vite dev server at http://localhost:5173
npm run build      # Build for production (dist/)
npm run preview    # Preview the production build
npm run type-check # TypeScript type check
```

## 🌍 Deployment

### Vercel (Recommended)

Connect the repository at [vercel.com](https://vercel.com) for automatic deployments on every push.

```bash
# Or via CLI
npm i -g vercel
vercel
```

### Static Hosting

```bash
npm run build
# Deploy contents of dist/ to any static host
```

## 📝 License

This project is under the MIT license.

## 👨‍💻 Author

Created by Rafael Bañón

## 🐛 Issues & Support

Found a bug? [Open an issue](../../issues/new)

## 🙏 Acknowledgments

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TanStack Query](https://tanstack.com/query)
- [lucide-vue-next](https://lucide.dev/)

---

**⭐ If you find this useful, leave a star!**

[Back to top ⬆️](#dev-command-playground)
