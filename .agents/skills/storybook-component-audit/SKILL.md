---
name: storybook-component-audit
description: Audit base components against their Storybook stories to detect drift. Use when the user asks to review, check, sync, or audit components and stories — especially after team members update source code. Detects new components without stories, deleted components with orphan stories, and prop/API changes in existing components that make stories outdated.
---

# Storybook Component Audit

Systematically compare `src/components/` implementations against their `.stories.tsx` files to detect drift introduced by team changes.

## When to Use

- After pulling new code / merging branches
- When the user says: "check components", "sync storybook", "audit stories", "rà soát component"
- Periodically to ensure Storybook stays current

## Audit Workflow

Copy this checklist and track progress:

```
Audit Progress:
- [ ] Step 1: Inventory components and stories
- [ ] Step 2: Detect new components (missing stories)
- [ ] Step 3: Detect removed components (orphan stories)
- [ ] Step 4: Detect prop changes in existing components
- [ ] Step 5: Report findings
- [ ] Step 6: Update stories (with user approval)
- [ ] Step 7: Build-storybook to verify
```

### Step 1: Inventory

Scan `src/components/*/index.tsx` for all component directories and `src/components/**/*.stories.tsx` for all story files. Build two lists:

```
Components: [button, checkbox, dialog, ...]
Stories:    [Button.stories.tsx, Checkbox.stories.tsx, ...]
```

### Step 2: Detect New Components (Missing Stories)

Find component directories that have `index.tsx` but no `.stories.tsx` file.

**Output format:**
```
🆕 NEW (no story): component-name/
   → Exported: ComponentName
   → Props: { prop1: type, prop2: type, ... }
```

### Step 3: Detect Removed Components (Orphan Stories)

Find `.stories.tsx` files whose parent component `index.tsx` no longer exists or whose imported component no longer exists.

**Output format:**
```
🗑️ ORPHAN STORY: ComponentName.stories.tsx
   → Component index.tsx missing or import broken
```

### Step 4: Detect Prop Changes

For each component that HAS a story, compare:

1. **Current props** — Read the component's TypeScript interface/type from `index.tsx`
2. **Story coverage** — Read the story's `argTypes` and `args` keys

Check for:
- **New props** added to component but not in story argTypes
- **Removed props** still referenced in story args/argTypes
- **Type changes** (e.g. prop changed from `string` to `enum`) that may need argType control updates
- **Default value changes** that should update `table.defaultValue.summary`

**Output format:**
```
🔄 CHANGED: component-name/
   ➕ New props: propA (string), propB (boolean)
   ➖ Removed props: oldProp
   ✏️ Type changed: size (number → 'sm' | 'md' | 'lg')
   📋 Default changed: disabled (false → true)
```

### Step 5: Report

Present a summary table:

```
| Status | Component | Details |
|--------|-----------|---------|
| 🆕 NEW | select | No story file |
| 🗑️ ORPHAN | OldWidget | Component deleted |
| 🔄 CHANGED | button | +2 props, -1 prop |
| ✅ OK | checkbox | Up to date |
```

Count: X new, Y orphans, Z changed, W up-to-date.

### Step 6: Update Stories (Ask First)

**IMPORTANT**: Before making any changes, present the report and ask the user for approval per component.

For each component needing updates:

**New component → Create story:**
- Follow the project's CSF3 pattern (see `storybook-story-writing` skill)
- Include: meta with `title`, `component`, `tags: ['autodocs']`, `docs.description.component`, `argTypes` with descriptions, default `args`
- Create stories for key states: Default, plus meaningful variants
- For imperative API components (ref-based show/hide): use a wrapper component pattern
- For react-hook-form dependent components: use a wrapper with `useForm`

**Changed component → Update story:**
- Add new props to `argTypes` with appropriate `control`, `description`, `table.defaultValue`
- Remove deleted props from `argTypes` and `args`
- Update control types for changed prop types
- Add new stories if new props introduce meaningful new states

**Orphan story → Confirm deletion:**
- Ask user before deleting any story file

### Step 7: Build Verification

After all updates, run:

```bash
npm run build-storybook
```

If build fails:
1. Read the error output
2. Fix the issue (usually import errors or type mismatches)
3. Re-run build
4. Repeat until clean

## Project-Specific Conventions

This project follows these patterns — maintain them:

- **Story location**: Co-located as `src/components/{name}/{Name}.stories.tsx`
- **Title format**: `Components/{ComponentName}`
- **Meta pattern**: `const meta = { ... } satisfies Meta<typeof Component>`
- **Type alias**: `type Story = StoryObj<typeof meta>`
- **Tags**: Always include `tags: ['autodocs']`
- **Docs**: Always include `docs.description.component` in meta parameters
- **ArgTypes**: Include `description` for all important props, `table.defaultValue.summary` for props with defaults
- **Complex props**: Use `control: false` for non-serializable props (React nodes, functions, columns/dataSource)
- **Gallery stories**: Use custom `render` functions with `docs.description.story`
- **Imperative APIs**: Wrapper component pattern (Dialog, Toast) — call show/hide in useEffect
- **Form-dependent**: Wrapper component with `useForm` hook (Captcha, any Control variant)
- **Decorator**: Width-constraining decorator for form-like components (`<div style={{ width: 360 }}>`)

## Webpack / Build Notes

- Webpack pinned to `5.101.2` via `overrides` in `package.json`
- Use `npm install --legacy-peer-deps` if dependencies change
- `public/` directory must exist for Storybook staticDirs
- `ajv@8`, `ajv-keywords@5`, `react-refresh` are required explicit devDependencies
