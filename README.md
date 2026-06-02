# XXE Injection Interactive Laboratory

Azerbaijani-language cybersecurity education app — 6 CTF-style flags across 2 levels teaching XXE injection attacks hands-on.

## Stack

- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Express 5 + TypeScript
- **Database:** PostgreSQL + Drizzle ORM
- **Monorepo:** pnpm workspaces, Node.js 24

## Prerequisites

- [Node.js 24+](https://nodejs.org/)
- [pnpm 10+](https://pnpm.io/installation) — `npm install -g pnpm`
- PostgreSQL database (local or hosted, e.g. [Neon](https://neon.tech/), [Supabase](https://supabase.com/))

## Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/xxe-lab.git
cd xxe-lab
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL=postgresql://user:password@host:5432/dbname
SESSION_SECRET=any-long-random-string-here
```

> **Neon (free):** Sign up at neon.tech → create project → copy the connection string.

### 4. Push the database schema

```bash
pnpm --filter @workspace/db run push
```

### 5. Run the app

Open **two terminals**:

**Terminal 1 — API server (port 5000):**
```bash
pnpm --filter @workspace/api-server run dev
```

**Terminal 2 — Frontend (port 5173):**
```bash
pnpm --filter @workspace/xxe-lab run dev
```

Then open **http://localhost:5173** in your browser.

## Flag Overview

| # | Level | Topic |
|---|-------|-------|
| 1 | Basic | Entity Expansion |
| 2 | Basic | External Entity (SYSTEM) |
| 3 | Basic | CDATA Bypass |
| 4 | Advanced | Filter Bypass |
| 5 | Advanced | IP Bypass |
| 6 | Advanced | Route Discovery |

## Admin Panel

Visit `/admin` to see all student sessions, flags found, scores, and time spent.

## Notes

- Session data is stored in PostgreSQL.
- Timer starts when Level 1 first loads (60 minutes).
- Level 2 unlocks after all 3 Level 1 flags are found.
