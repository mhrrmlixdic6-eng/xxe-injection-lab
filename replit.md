# XXE Injection Interactive Laboratory

An interactive cybersecurity education app that teaches students about XXE (XML External Entity) injection attacks through hands-on flag-based CTF challenges. All text is in Azerbaijani.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)
- Frontend: React + Vite + Tailwind

## Where things live

- `lib/api-spec/openapi.yaml` — API contract (source of truth)
- `lib/db/src/schema/lab.ts` — DB schema: `lab_sessions`, `flag_captures`
- `artifacts/api-server/src/routes/` — Backend routes: session, xml, flags, admin
- `artifacts/xxe-lab/src/` — Frontend React app

## Architecture decisions

- Flag logic lives entirely on the backend (route handlers in `xml.ts` and `flags.ts`)
- Flag 6 is discovered via GET /api/user then submitted via POST /api/flags/submit
- Session tracking uses PostgreSQL; progress is also mirrored to localStorage for resilience
- Admin panel at /admin shows all student sessions with real-time progress
- Filter bypass (Flag 4): backend does `xml.replace(/xxe/gi, '')` — bypass is `xXXExe`

## Product

- **Home**: Name input → creates session → stored in localStorage
- **Level 1**: 3 XXE challenges (entity expansion, external entity, CDATA/parsing logic) with 60-min timer and progress bar
- **Level 2**: 3 advanced challenges (filter bypass, IP bypass, route discovery) — unlocks after Level 1 completion
- **Admin panel** (`/admin`): Teacher view with all student names, flags found, scores, time
- **Completion page**: Final score and congratulations

## Flag answers (for reference)

- Flag 1: `FLAG{xxe_l1_entity_expansion_1337}` — XML with `<!ENTITY name "value">` + `&name;`
- Flag 2: `FLAG{xxe_l1_external_entity_1337}` — XML with SYSTEM keyword
- Flag 3: `FLAG{xxe_l1_xml_logic_1337}` — XML with `<![CDATA[...]]>` or nested data tags
- Flag 4: `FLAG{xxe_l2_filter_bypass_1337}` — bypass filter with `xXXExe` → after filter = `xxe`
- Flag 5: `FLAG{xxe_l2_ip_bypass_1337}` — use `0x7f000001` or `2130706433` etc. instead of 127.0.0.1
- Flag 6: `FLAG{xxe_l2_route_discovery_1337}` — GET /api/user, submit flag value

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Flag 6 uses a separate submit flow (manual paste into submit field), not the XML parser
- DB has unique constraint on (sessionId, flagNumber) — duplicate captures are silently ignored
- Timer starts when the Level 1 page first loads (stored in localStorage under `xxe_timer_start`)

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
