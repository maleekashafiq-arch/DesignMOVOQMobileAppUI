# MOVOQ — Cursor Handoff Guide

This project was built in **Figma Make**. It's a standard **React 18 + TypeScript + Vite + Tailwind v4** codebase, so Cursor can develop it directly. Follow the steps below to get it running outside Figma.

---

## 1. Get the code into Cursor

1. Export/download the project from Figma Make (everything **except** `node_modules`).
2. Push it to a Git repo (GitHub/GitLab), or just keep the folder locally.
3. In Cursor: **File → Open Folder** (or **Clone Repo**). No plugin needed — Cursor reads any local folder.

## 2. Install & run

This repo uses **pnpm** (see `pnpm-lock.yaml`):

```bash
pnpm install
pnpm dev      # after adding the script in step 3
```

## 3. Convert 3 Figma-Make-specific bits to a normal Vite app

These only work inside Figma's runtime and must be replaced once:

### a) Add scripts to `package.json`
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

### b) Create `index.html` at the project root
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>MOVOQ</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### c) Create `src/main.tsx` and delete `__figma__entrypoint__.ts`
```tsx
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);
```
Then delete `__figma__entrypoint__.ts` (it imports `figma:foundry-client-api`, a virtual module that doesn't exist outside Figma).

> Images currently use Unsplash URLs via `ImageWithFallback` — those keep working. If any `figma:asset/...` imports appear later, move those files into `src/assets/` and import them normally.

After this, `pnpm dev` serves the app on `localhost` like any Vite project.

---

## 4. Project map

| Path | What's there |
|---|---|
| `src/app/App.tsx` | Root — renders the router |
| `src/app/routes.tsx` | All routes: **mobile app** + **/admin** dashboard + **/** landing |
| `src/app/screens/` | Mobile screens (Splash, Onboarding, Login, Home, Wallet, Profile, LuckyDraw, SpinWheel, Marketplace, StreakRepair, team screens) |
| `src/app/screens/admin/` | Admin dashboard screens (Dashboard, Users, Points, Teams, AICoach, Settings, etc.) |
| `src/app/components/` | Shared components (BottomNav, AICoach, TeamWidget, Button, GradientCard, ProgressCircle) |
| `src/app/components/ui/` | shadcn/ui primitives |
| `src/app/components/admin/` | Admin building blocks (KPICard, DataTable, StatCard) |
| `src/app/layouts/AdminLayout.tsx` | Admin sidebar + shell |
| `src/styles/` | `theme.css` (design tokens), `globals.css`, `tailwind.css`, `fonts.css` |

**Stack:** React 18 · react-router 7 · Tailwind v4 · Motion (`motion/react`) · lucide-react · recharts

**Routes overview:**
- `/` landing page · `/onboarding` → `/login` → `/home` (mobile app)
- `/admin`, `/admin/users`, `/admin/points`, `/admin/teams`, `/admin/ai-coach`, `/admin/settings`, … (admin)

---

## 5. Backend integration checklist (everything is mock right now)

| Area | Current mock | Where |
|---|---|---|
| Auth + profile | `localStorage("movoq_user")` | `Login.tsx` writes, `Home.tsx` reads |
| Points balance | hardcoded fallback `1245` | `Home`, `Wallet`, `Profile` |
| Step counting | static `currentSteps` | `Home.tsx` — needs a real pedometer / Health Connect |
| Weather / AQI | static values | `Home.tsx` — wire to an API keyed on user city |
| AI Coach replies | rule-based `generateReply()` | `components/AICoach.tsx` — swap for Claude API behind a backend |
| AI Coach subscription | mock `isPremium` | gate on real subscription status |
| Admin data | all mock arrays | `screens/admin/*` — replace with real endpoints |

**Economy source of truth (already synced mobile ↔ admin):** Daily goal reward = 50 pts · Ad watch = 10 pts · Streak = 5 pts/day · Spin max = 50 · AI Coach = Rs 299/mo.

**Still to reconcile (design decisions):** the ticket model (mobile spends points directly vs admin's points→ticket economy) and marketplace offer pricing (three different scales).

---

## 6. Decide before building: web vs native

MOVOQ needs a real **pedometer**, which browsers expose poorly. Pick a target early:
- **PWA** — ship this code as-is; limited background step tracking.
- **Capacitor** — wraps this exact React code as a native Android app with plugin access to step data (lowest-effort path to a real app).
- **React Native** — most native, but requires porting the UI.

This choice drives how Cursor structures step-counting and native features — settle it first.

---

## 7. Recommended `.cursorrules`

A `.cursorrules` file is included at the repo root so Cursor's AI matches existing conventions. Edit it as the project evolves.
