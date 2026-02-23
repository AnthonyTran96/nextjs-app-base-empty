# Progress

## What Works (Base Template Features)
- [x] Next.js 14 App Router with route groups (auth/unauth)
- [x] TypeScript with strict mode and path aliases
- [x] Redux Toolkit store with persistence (app + auth slices)
- [x] Listener middleware for async side effects
- [x] Authentication flow (login screen, route guards)
- [x] Theme system (light/dark mode with system preference detection)
- [x] Internationalization (i18next) setup
- [x] Ant Design integration with modular imports
- [x] Tailwind CSS configuration
- [x] Custom component library (button, text-field, checkbox, radio, select-date, dialog, toast, table, segment, switch, status, infobox, helper-text, take-note, loader, progressbar, icon-vec-local, date-picker)
- [x] Layout system (AppLayout with Header/Footer, AuthLayout with Header/Footer)
- [x] Maintenance pages (404, 500)
- [x] Mock server (Express-based) for local development
- [x] Environment-based configuration (dev, prod, mock)
- [x] ESLint + Prettier code quality tooling
- [x] SVG-as-component support via @svgr/webpack
- [x] Feature flag / pilot check system
- [x] **Storybook 8.6.0** — Component development & documentation environment (refined with best practices)

## Storybook Configuration Quality
- [x] `preview.ts` — `actions.argTypesRegex`, `controls.matchers` (color, date), `layout: centered`
- [x] `main.ts` — Path aliases, SVG loader, static dirs, Next.js framework
- [x] All stories — `docs.description.component` in meta
- [x] All stories — `description` on all important argTypes
- [x] All stories — `table.defaultValue` for props with defaults
- [x] Special stories — `docs.description.story` for notable variants
- [x] Table — `control: false` for columns/dataSource
- [x] Gallery stories — AllPresets (Text), AllVariants (Status), AllStates (Switch), AllTypes (Button)

## Storybook Stories (18 components covered)
- [x] TextBase — 9 stories (Default, Presets H1/H2/Title1/SubTitle2/Body1/Caption1, AllPresets gallery, WithChildren)
- [x] HelperText — 6 stories (WithCaption, WithStringError, WithFieldError, WithCaptionAndError, WithPrefix variants)
- [x] Status — 9 stories (Default, Success, Pending, Error, Branding, Disabled, SecondaryKind, GhostKind, AllVariants matrix)
- [x] LinearProgress — 4 stories (Default, CustomColors, CustomSize, Thin)
- [x] Loader — 1 story (Default)
- [x] ProgressBar — 5 stories (StepDefault, StepCompleted, StepFirstActive, LineType, LineTypeStart)
- [x] ButtonBase — 11 stories (Primary, Secondary, Ghost, WhiteGhost, SmallSize, Disabled, DisabledSecondary, WithLeftIcon, WithRightIcon, WithBothIcons, IconOnly, AllTypes gallery)
- [x] AppTextField — 10 stories (Default, WithLabel, WithLabelAndSuffix, Password, NumberInput, WithStringError, WithFieldError, WithCaption, DisabledState, WithValue)
- [x] AppCheckbox — 9 stories (Default, WithLabel, WithLabelSuffix, ColumnDirection, ColumnBlock, WithDefaultValue, WithError, WithCaption, DisabledOptions)
- [x] AppRadio — 7 stories (Default, WithLabel, WithLabelSuffix, Vertical, WithDefaultValue, WithError, WithCaption)
- [x] AppSwitch — 6 stories (Default, Checked, MediumSize, Disabled, DisabledChecked, AllStates gallery)
- [x] AppTakeNote — 9 stories (Default, WithLabel, WithLabelSuffix, WithValue, WithMaxLength, WithError, WithCaption, DisabledState, CustomRows)
- [x] InfoBox — 6 stories (Default, WithBillIcon, WithEditIcon, WithCustomFill, WithClickHandler, Gallery)
- [x] AppSegment — 6 stories (Default, TwoTabs, NotBlock, WithCustomContent, RenderAllPanels, Vertical)
- [x] AppTable — 6 stories (Default, Rounded, Empty, Loading, WithPagination, CustomEmptyComponent)
- [x] SelectDate — 7 stories (Default, WithLabel, WithValue, MonthSelector, YearSelector, WithError, WithDropdownLabel)
- [x] DatePicker — 4 stories (Default, WithLabel, WithFormat, Disabled)
- [x] IconSvgLocal — 5 stories (Default, WithFill, LargeSize, SmallSize, Gallery, ColorVariants)

## URD → Markdown Conversion (ProfiX Phase 1)
- [x] Read and parsed 103-page URD PDF
- [x] Created `00-overview.md` — system overview, abbreviations, function list, user groups, processes
- [x] Created `PR01` through `PR05` — 5 fee parameter features
- [x] Created `SE01` through `SE04` — 4 inquiry features
- [x] Created `OT01` through `OT02` — 2 workflow features
- [x] Created `SA01` through `SA11` — 11 system admin features
- [x] Created `appendix.md` — auto-processing, system params, fee code examples, data access rules
- **Total: 24 Markdown files** in `ai-context/`

## What's Left to Build
- [ ] Dialog stories (imperative API — needs custom decorator)
- [ ] Toast stories (imperative API — needs custom decorator)
- [ ] Interaction tests via play functions
- [ ] **ProfiX feature implementation** — 22 features as defined in URD (PR.01–PR.05, SE.01–SE.04, OT.01–OT.02, SA.01–SA.11)

## Current Status
**Stable & Ready for Feature Development** — The base template is complete with Storybook integration. URD has been fully converted to structured Markdown for AI context. Ready to begin implementing ProfiX features.

## Known Issues
- Webpack must be pinned to `5.101.2` (via `overrides` in `package.json`) — webpack >=5.101.3 has a `tap` error when used with `@storybook/nextjs` and Next.js 14's bundled webpack
- Sass deprecation warnings appear during Storybook build (cosmetic only, does not affect functionality)
- Asset size warnings in build output (antd + storybook bundles are large — expected)
