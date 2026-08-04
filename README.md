# bro-website: Bro CLI Landing Page

[![React](https://img.shields.io/badge/react-18+-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-5+-blue.svg)](https://typescriptlang.org/)
[![Vite](https://img.shields.io/badge/vite-5+-purple.svg)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/tailwind-3+-cyan.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

> **Bro CLI Landing Page** — Marketing website for the Bro CLI terminal AI assistant.

---

## 🎯 Overview

Landing page website for the **Bro CLI** — a terminal-based AI assistant powered by **Groq** for fast LLM inference. Built with modern web technologies (React + Vite + Tailwind CSS) for a fast, responsive experience.

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | React 18.3+ |
| **Language** | TypeScript 5+ |
| **Build Tool** | Vite 5+ |
| **Styling** | Tailwind CSS 3.4+, PostCSS, Autoprefixer |
| **Animations** | Framer Motion 12+, react-intersection-observer |
| **Particles** | tsparticles, react-tsparticles |
| **Icons** | lucide-react |
| **Analytics** | Vercel Analytics |
| **Linting** | ESLint 9, TypeScript ESLint, Prettier |
| **Deployment** | Vercel (vercel.json configured) |

---

## 📁 Project Structure

```
bro-website/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── AnimatedCard.tsx
│   │   ├── NavBar.tsx
│   │   ├── ParticlesBackground.tsx
│   │   └── Terminal.tsx
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Entry point
│   ├── index.css            # Global styles (Tailwind)
│   └── vite-env.d.ts        # Vite type declarations
├── public/                  # Static assets
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript config (base)
├── tsconfig.app.json        # App-specific TS config
├── tsconfig.node.json       # Node-specific TS config
├── eslint.config.js         # ESLint flat config
├── postcss.config.js        # PostCSS config
├── vercel.json              # Vercel deployment config
├── package.json
└── README.md
```

---

## 🚀 Quick Start

```bash
git clone https://github.com/oovaa/bro-website.git
cd bro-website

# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

---

## 🔗 Related

- [Bro CLI](https://github.com/oovaa/bro) — The CLI tool this website promotes

---

## 📦 Deployment (Vercel)

The project is configured for Vercel deployment via `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

## 👤 Author

**Omar Abdulrahim**  
GitHub: [@oovaa](https://github.com/oovaa)