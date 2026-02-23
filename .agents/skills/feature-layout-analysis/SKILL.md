---
name: feature-layout-analysis
description: Analyze wireframe images and feature documents (URD/FSD) to generate a structured layout specification. Use when the user says "analyze layout", "phân tích layout", provides a wireframe image with feature docs, or wants to prepare a layout spec before building a prototype.
---

# Feature Layout Analysis

Analyze wireframe + feature document → generate a structured `layout-spec.md` that maps every UI element to project components. This spec is reviewed by the user before being consumed by the `feature-prototype` skill.

## Prerequisites

- Feature folder exists at `features/<feature-name>/` containing:
  - Wireframe image (`.png`, `.jpg`, etc.)
  - Feature document (`.md`) — URD or FSD format
- Project component library at `src/components/` (22 components)
- UI rules file at `features/ui-rules.md` — shared design conventions

## Workflow

### Step 1 — Read Inputs

1. Read `features/ui-rules.md` — load shared UI conventions (MUST read first, these rules override any default assumptions)
2. Scan `features/<feature-name>/` for wireframe image(s) and markdown doc(s)
3. Read the wireframe image — identify all distinct screens/views
4. Read the feature markdown — extract functional requirements, fields, business rules
5. Read `src/assets/svg/index.ts` for available icon names

### Step 2 — Identify Screens

From the wireframe, enumerate every distinct screen or view state. Apply **UI Rule #1** (shared layout for view modes):
- If a data object has Xem/Sửa/Thêm mới/Duyệt/Từ chối → these are **modes of the same screen**, not separate screens
- Choose Drawer vs Page based on field complexity (≤ 10 fields → Drawer, complex/multi-tab → Page)
- Once chosen, all modes of that object use the same container type

Screen types to identify:
- Main list/grid views
- Create/Edit/View/Approve forms (single screen with mode switching)
- Filter panels
- Confirmation dialogs

For each screen, note:
- **Name**: Short descriptive name
- **Trigger**: What action opens this screen
- **Type**: `page` | `drawer` | `modal` | `dialog` | `section`
- **Modes**: Which view modes this screen supports (e.g., create / edit / view / approve / reject)

### Step 3 — Map Components

For each screen, break down the UI into a component tree. Map each element to a project component:

**Available project components** (import from `src/components/<name>`):

| Component | Import name | Typical use |
|-----------|-------------|-------------|
| `ButtonBase` | `components/button` | All buttons (primary, secondary, ghost) |
| `AppTextField` | `components/text-field` | Text inputs, search bars |
| `AppSelect` | `components/select` | Dropdown selects |
| `AppDatePicker` | `components/date-picker` | Date inputs |
| `AppCheckbox` | `components/checkbox` | Checkbox groups |
| `AppRadio` | `components/radio` | Radio groups |
| `AppSwitch` | `components/switch` | Toggle switches |
| `AppTable` | `components/table` | Data tables/grids |
| `AppTree` | `components/tree` | Tree views |
| `AppSegment` | `components/segment` | Tab-like segment controls |
| `AppTakeNote` | `components/take-note` | Textarea/notes |
| `TextBase` | `components/text` | Typography (headings, body, captions) |
| `Status` | `components/status` | Status badges (success, pending, error) |
| `IconSvgLocal` | `components/icon-vec-local` | SVG icons |
| `InfoBox` | `components/infobox` | Info display boxes |
| `HelperText` | `components/helper-text` | Form helper/error text |
| `Dialog` | `components/dialog` | Confirmation dialogs (imperative API) |
| `Toast` | `components/toast` | Toast notifications (imperative API) |
| `Loader` | `components/loader` | Loading spinner |
| `SelectDate` | `components/select-date` | Month/Year selector |
| `AppCaptcha` | `components/captcha` | CAPTCHA input |
| `LinearProgress` | `components/progressbar` | Progress bars |

**Ant Design components** used directly (import from `antd`):
- `Flex`, `Divider`, `Drawer`, `Dropdown`, `Pagination`, `Layout`, `Modal`, `Tabs`, `Tag`, `Space`, `Row`, `Col`

**Available icons** (for `IconSvgLocal` `name` prop):
- `IC_SEARCH_OUTLINE2`, `IC_FILTER_OUTLINE`, `IC_CLOSE_OUTLINE`
- `ICON_EDIT`, `ICON_MORE`, `ICON_DROP_DOWN`, `ICON_ARROW_LEFT`
- `ICON_CHECK`, `ICON_CHECK_GREEN`, `ICON_ERROR`, `ICON_WARNING`
- `ICON_BILL`, `ICON_CALENDAR`, `ICON_USER`, `ICON_CALL`
- `ICON_INFO_SOLID`, `ICON_QUESTION`, `ICON_PVCB_LOGO`
- `ICON_EYE_OPEN`, `ICON_EYE_SPLASH`, `ICON_ARROW_CIRCLE_UP`
- `ICON_CLOSE_TAKE_NOTE`

For each UI element, specify:
- Which component to use
- Key props (label, placeholder, type, options, etc.)
- Layout container (`Flex`, `div` with Tailwind classes, `Row`/`Col`)

If a UI element has **no matching component**, flag it in `## Missing Components`.

### Step 4 — Define State & Interactions

Document how screens connect:
- Which button/action triggers which screen
- State variables needed (open/close drawers, selected row, filter values, pagination)
- Mock data shape (TypeScript interface + sample records)

### Step 5 — Generate `layout-spec.md`

Write the spec to `features/<feature-name>/layout-spec.md` following the template in [layout-spec-template.md](layout-spec-template.md).

### Step 6 — Present for Review

Show the user a summary:
- Number of screens identified
- Components used vs missing
- Any ambiguities or assumptions made

Ask the user to:
1. Confirm the spec is correct
2. Add notes or corrections
3. Flag any screens/interactions missed

If the user provides feedback, update `layout-spec.md` accordingly.

## Key Rules

- **UI rules first**: Always read and apply `features/ui-rules.md` before making any layout decisions. These rules take precedence over wireframe interpretation
- **Vietnamese UI text**: All labels, placeholders, button text, column headers must be in Vietnamese (matching the wireframe/URD)
- **Prefer project components**: Always use project components over raw HTML or raw antd. Only use antd directly for layout containers (`Flex`, `Drawer`, `Dropdown`, `Divider`, `Pagination`) or when no project component exists
- **Be specific**: Don't write "a form with fields" — write exactly which `AppTextField`, `AppSelect`, etc. with exact labels and props
- **Cross-feature consistency**: Buttons, icons, spacing, and patterns must match `ui-rules.md` conventions — same function = same appearance everywhere
- **Mock data must be realistic**: Use Vietnamese names, realistic fee codes, dates in DD/MM/YYYY format, amounts in VND
- **One spec per feature**: Each feature gets exactly one `layout-spec.md`
