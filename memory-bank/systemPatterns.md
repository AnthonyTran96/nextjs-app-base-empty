# System Patterns

## Architecture
Next.js 14 App Router with a layered architecture separating concerns into distinct folders.

### Folder Structure
```
src/
├── app/                    # Next.js App Router (pages, layouts, route groups)
│   ├── (authentication)/   # Route group for authenticated pages
│   ├── (un-authentication)/# Route group for public/guest pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Root page (redirects via GuestGuard)
│   └── ProviderWrapper.tsx # All providers composed here
├── components/             # Reusable UI components (custom library)
│   ├── button/             # Each component has its own folder
│   │   ├── index.tsx       # Component implementation
│   │   └── Button.stories.tsx  # Storybook story (CSF3)
│   └── ...
├── config/                 # App configuration (routes, env, api, pilot)
├── hooks/                  # Custom React hooks
├── layout/                 # Layout components (AppLayout, AuthLayout)
├── model/                  # TypeScript models/interfaces
├── screens/                # Screen-level components (page content)
│   ├── authentication/     # Authenticated screen content
│   ├── un-authentication/  # Public screen content
│   └── @common/            # Shared screens (maintenance pages)
├── services/               # API services and networking layer
├── stores/                 # Redux store, slices, selectors, listeners
│   ├── @extends/           # Store extensions (persist, middleware)
│   ├── action-slice/       # Redux slices
│   ├── action-type/        # Action type constants
│   ├── listener/           # Redux listener middleware
│   ├── selector/           # Reselect selectors
│   └── store/              # Store configuration
└── utils/                  # Utility functions and providers
    ├── i18n/               # Internationalization setup
    ├── route-guard/        # Auth/Guest route guards
    ├── theme/              # Theme context and provider
    └── pilot-check/        # Feature flag/pilot checks
.storybook/                 # Storybook configuration
├── main.ts                 # Webpack config, addons, framework
└── preview.ts              # Global decorators, styles, parameters
_mock/                      # Mock server (Express-based)
```

## Key Technical Decisions

### Route Groups for Auth Separation
- `(authentication)/` — pages requiring login, wrapped with AuthGuard
- `(un-authentication)/` — public pages (login, register), wrapped with GuestGuard
- Each group has its own layout and loading states

### Provider Composition (ProviderWrapper)
All providers are nested in `ProviderWrapper.tsx`:
```
ReduxProvider → ThemeProvider → I18nextProvider → AntdRegistry → ConfigProvider
```
Global overlays (Toast, Dialog) are rendered at this level.

### State Management Pattern
- **Redux Toolkit** slices for state definition
- **Reselect** for memoized selectors
- **Redux Persist** with localStorage for session persistence
- **Listener middleware** for side effects (replaces redux-saga/thunk for async flows)
- **Custom subscribe-action middleware** for cross-slice communication

### Component Architecture
- Custom components wrap or extend Ant Design primitives
- Components live in `src/components/` with `index.tsx` barrel exports
- Stories co-located with components as `ComponentName.stories.tsx`
- Screen content lives in `src/screens/`, pages in `src/app/` are thin wrappers

### Storybook Configuration
- **Framework**: `@storybook/nextjs` (Webpack-based, matches project's custom webpack config)
- **Addons**: essentials (controls, docs, actions, viewport), interactions
- **Webpack customization** in `.storybook/main.ts`:
  - Path aliases mirroring `tsconfig.json` (components, utils, stores, hooks, @constant, @store, etc.)
  - SVG loader via `@svgr/webpack` (same as `next.config.js`)
- **Global styles** imported in `.storybook/preview.ts`: `global.scss` (Tailwind + component SCSS), i18n init
- **Preview config** in `.storybook/preview.ts`:
  - `actions.argTypesRegex: '^on[A-Z].*'` — auto-detect event handler props
  - `controls.matchers` — color picker for `*color*`/`*background*` props, date picker for `*Date*` props
  - `layout: 'centered'` — default centered layout
- **Story format**: CSF3 with TypeScript, `satisfies Meta<typeof Component>`, `tags: ['autodocs']`
- **Story organization**: `Components/ComponentName` title hierarchy

### Storybook Story Best Practices (Applied)
- Every meta includes `docs.description.component` for autodocs
- Every important argType includes `description` for controls panel documentation
- Props with defaults include `table.defaultValue.summary`
- Complex/non-editable props use `control: false` (e.g., Table columns/dataSource, React node props)
- Gallery/matrix stories use custom `render` functions with `docs.description.story`
- Default `args` set at meta level for args inheritance across stories

### AI Context / URD Documentation
- URD (User Requirements Document) converted to Markdown in `ai-context/` directory
- 24 files: 1 overview + 5 PR + 4 SE + 2 OT + 11 SA + 1 appendix
- Each file follows consistent structure: Mô tả chung → Chức năng trên màn hình → Thông tin chung (Objective/Actor/Trigger/Pre/Post) → Luồng nghiệp vụ → Business Rules → Màn hình tham khảo
- File naming convention: `{CODE}-{slug}.md` (e.g., `PR01-product-service-fee-code.md`, `SA05-user-management.md`)
- Source PDF retained at `ai-context/2026-02-03_PVCB_URD_ProfiX Phase 1_ver0.6.1.pdf`

### ProfiX Business Patterns
- **Maker/Checker workflow**: All data changes go through create → pending approval → approved/rejected cycle
- **6-level SPDV hierarchy**: Products organized in 6-level tree; fee codes attach at level 6
- **Fee calculation**: 3 base methods (Fixed, Rate × Value, Unit Price × Quantity) combinable via "+" operator
- **Dual customer types**: KHCN (individual) and KHDN (corporate) with different fee condition structures
- **Fee types**: By transaction (thu theo giao dịch) and Periodic (thu định kỳ)
- **Job system**: Automated periodic fee generation with retry/recovery mechanisms

### Path Aliases
TypeScript path aliases configured in `tsconfig.json` with `baseUrl: "src"`:
- `@constant`, `@store`, `@redux-slice/*`, `@redux-selector/*`, etc.
- Direct imports from `src/` (e.g., `import X from 'utils/...'`)
- Storybook mirrors these aliases in `.storybook/main.ts` via `webpackFinal`

### Environment Strategy
- `env-cmd` with separate `.env.dev`, `.env.prod`, `.env.mock` files
- `ENVConfig` object centralizes all environment variable access
- Console removal in production builds (except errors)

## Design Patterns
- **Route Guards**: HOC pattern for auth/guest protection
- **Provider Pattern**: Context-based theming, i18n, and state
- **Barrel Exports**: `index.tsx` files for clean imports
- **Slice Pattern**: Redux Toolkit createSlice for state modules
- **Selector Pattern**: Reselect createSelector for derived state
- **Co-located Stories**: Storybook stories live alongside their components
- **CSF3 Story Format**: Object-based stories with TypeScript type safety
- **Args Inheritance**: Default args at meta level, overridden per story
- **Gallery Stories**: Custom render functions for visual comparison matrices
