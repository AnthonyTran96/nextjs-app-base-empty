# Active Context

## Current State
Base template is complete with Storybook. URD (User Requirements Document) for ProfiX Phase 1 has been converted into 24 structured Markdown files in `ai-context/` for AI context integration.

## Current Work Focus
- URD-to-Markdown conversion completed
- 24 feature-level Markdown files created in `ai-context/`
- Ready for feature implementation based on URD requirements

## Recent Changes

### URD Conversion (latest)
- Read and parsed the 103-page URD PDF (`ai-context/2026-02-03_PVCB_URD_ProfiX Phase 1_ver0.6.1.pdf`)
- Created 24 Markdown files in `ai-context/`, one per feature:
  - `00-overview.md` — System overview, abbreviations, function list, user groups, business processes
  - `PR01-product-service-fee-code.md` — SPDV catalog & fee codes (6-level hierarchy)
  - `PR02-fee-formula.md` — Fee calculation formulas (3 methods + combinations)
  - `PR03-fee-schedule.md` — Fee schedule management (create, copy, transfer)
  - `PR04-unused-fee-codes.md` — Unused fee code listing
  - `PR05-promotions.md` — Promotional programs (CTƯĐ)
  - `SE01-tree-view.md` — Tree view navigation
  - `SE02-fee-by-customer.md` — Fee lookup by customer
  - `SE03-fee-history.md` — Fee collection history
  - `SE04-periodic-fee-schedule.md` — Periodic fee schedule forecast
  - `OT01-pending-approval.md` — Approval workflow (Checker)
  - `OT02-my-pending-tasks.md` — My pending tasks (Maker)
  - `SA01-login.md` through `SA11-job-history.md` — 11 system admin features
  - `appendix.md` — Auto-processing functions, system parameters, fee code examples, data access rules

### Storybook (previous)
- Storybook 8.6.0 fully set up and refined with best practices
- 18 base components with CSF3 stories, autodocs, comprehensive argTypes

## Installed Storybook Skills
- `storybook-story-writing`, `storybook-component-documentation`, `storybook-args-controls`, `storybook-play-functions`, `storybook`

## Next Steps
- Begin implementing ProfiX features based on URD Markdown files
- Consider adding Dialog and Toast stories with custom render decorators
- Consider adding interaction tests via play functions

## Active Decisions
- URD Markdown files are organized per individual feature (not grouped by category)
- Each Markdown file follows structure: Mô tả chung → Luồng nghiệp vụ → Business Rules → Màn hình tham khảo
- `ai-context/` directory is the designated location for AI context documents
- Used `@storybook/nextjs` (Webpack) over Vite because project has custom webpack config for SVG
- Pinned webpack to 5.101.2 to avoid known Storybook bug

## Considerations
- URD is in Vietnamese — all Markdown files preserve original Vietnamese content
- Screenshots from URD are referenced but not embedded (noted as `> [Tham khảo URD trang X]`)
- The URD PDF remains in `ai-context/` as the authoritative source document
- Maker/Checker approval workflow is a cross-cutting pattern used across PR features
