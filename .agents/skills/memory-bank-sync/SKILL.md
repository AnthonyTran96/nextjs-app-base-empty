---
name: memory-bank-sync
description: Detect source code changes that are not yet reflected in the Memory Bank and auto-update the relevant memory-bank files. Use when the user says "sync memory bank", "check memory bank", "cập nhật memory bank", "kiểm tra memory bank", or after pulling new code from team members. Compares actual source code state against what is documented in memory-bank/*.md files.
---

# Memory Bank Sync

Detect drift between the actual source code and what is documented in `memory-bank/` files, then auto-update the Memory Bank to stay current.

## When to Use

- After `git pull` / merging team branches
- When the user says: "sync memory bank", "check memory bank", "cập nhật memory bank"
- Periodically to ensure Memory Bank reflects reality
- Before starting new feature work (to have accurate context)

## Sync Workflow

```
Sync Progress:
- [ ] Step 1: Read all Memory Bank files
- [ ] Step 2: Scan source code for changes
- [ ] Step 3: Diff findings vs Memory Bank
- [ ] Step 4: Auto-update Memory Bank files
- [ ] Step 5: Summary report
```

### Step 1: Read All Memory Bank Files

Read all 6 core files to understand what is currently documented:

```
memory-bank/
├── projectbrief.md     — Project scope, goals, target product
├── productContext.md    — Why it exists, problems solved, UX goals
├── activeContext.md     — Current state, recent changes, next steps
├── systemPatterns.md    — Architecture, patterns, folder structure
├── techContext.md       — Technologies, dependencies, scripts, constraints
└── progress.md          — What works, what's left, known issues
```

### Step 2: Scan Source Code

Check each area below. For each, extract the **current actual state** from source code.

#### 2a. Dependencies (`package.json`)

Read `package.json` and compare against `techContext.md` tables:
- New dependencies added?
- Dependencies removed?
- Version changes in key packages?
- New scripts added?
- Changes to `overrides`?

#### 2b. Components (`src/components/`)

List all directories under `src/components/` and compare against `progress.md` component list:
- New component directories?
- Removed component directories?
- New or removed `.stories.tsx` files?

#### 2c. App Routes (`src/app/`)

Scan `src/app/` for new route groups, pages, or layouts:
- New page directories under `(authentication)/` or `(un-authentication)/`?
- New or changed layouts?
- New API routes under `app/api/`?

#### 2d. Redux Store (`src/stores/`)

Check for new or removed:
- Action slices (`src/stores/action-slice/`)
- Selectors (`src/stores/selector/`)
- Action types (`src/stores/action-type/`)
- Listeners (`src/stores/listener/`)

#### 2e. Services (`src/services/`)

Check for new or removed API service files.

#### 2f. Screens (`src/screens/`)

Check for new screen directories under:
- `src/screens/authentication/`
- `src/screens/un-authentication/`
- `src/screens/@common/`

#### 2g. Hooks (`src/hooks/`)

Check for new custom hooks.

#### 2h. Config (`src/config/`)

Check for changes in route config, API config, env config, pilot config.

#### 2i. Models (`src/model/`)

Check for new TypeScript model/interface files.

#### 2j. Utils (`src/utils/`)

Check for new utility directories or files.

#### 2k. Storybook Config (`.storybook/`)

Check if `main.ts` or `preview.ts` have changed (new addons, aliases, etc.).

#### 2l. Agent Skills (`.agents/skills/`)

List all skill directories and compare against what's documented.

#### 2m. AI Context (`ai-context/`)

Check for new or removed Markdown files.

### Step 3: Diff Findings vs Memory Bank

For each area, classify changes:

```
| Area | Change Type | Details |
|------|-------------|---------|
| components | ➕ ADDED | new-component/ |
| dependencies | 🔄 UPDATED | antd ^5.23.1 → ^5.24.0 |
| stores | ➕ ADDED | new-slice |
| screens | ➕ ADDED | new-screen/ |
| services | ➖ REMOVED | old-service.ts |
| routes | ➕ ADDED | /new-page |
```

### Step 4: Auto-Update Memory Bank Files

Update each affected file. Follow these rules per file:

**`projectbrief.md`** — Only update if project scope/goals fundamentally changed. Rarely needs changes.

**`productContext.md`** — Update if new feature groups, user groups, or business flows are added.

**`techContext.md`** — Update for:
- New/removed/updated dependencies (add to appropriate table)
- New scripts in package.json
- New technical constraints discovered
- Changes to AI context or agent skills directories

**`systemPatterns.md`** — Update for:
- New folders in the folder structure tree
- New architectural patterns or design patterns
- New path aliases
- New agent skills
- Changes to provider composition or state management

**`activeContext.md`** — Always update:
- `Current State` — reflect actual current state
- `Recent Changes` — add new section at top for detected changes, push previous to "(previous)"
- `Installed Skills` — update if skills added/removed
- `Next Steps` — adjust if completed items detected
- `Active Decisions` — add any new decisions implied by code changes

**`progress.md`** — Update for:
- New components → add to component list and Storybook stories section
- New features implemented → move from "What's Left" to "What Works"
- New agent skills → add to skills section
- New known issues discovered
- Update `Current Status` summary

### Step 5: Summary Report

After all updates, output a concise summary:

```
## Memory Bank Sync Complete

### Changes Detected
- X new dependencies
- Y new components
- Z new screens/routes
- ...

### Files Updated
- techContext.md — added N new dependencies
- progress.md — added M new components
- activeContext.md — updated current state
- ...

### No Changes Needed
- projectbrief.md
- productContext.md
```

## Important Notes

- **Preserve existing content** — only add/modify what changed; never remove documented information unless the source code confirms removal
- **Vietnamese content** — preserve any Vietnamese text in Memory Bank files
- **Formatting consistency** — match the existing Markdown formatting style of each file (tables, lists, headers)
- **Atomic updates** — update all affected files in one pass, not piecemeal
- **No guessing** — only document what can be verified from actual source code files
