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
- Screen content lives in `src/screens/`, pages in `src/app/` are thin wrappers

### Path Aliases
TypeScript path aliases configured in `tsconfig.json` with `baseUrl: "src"`:
- `@constant`, `@store`, `@redux-slice/*`, `@redux-selector/*`, etc.
- Direct imports from `src/` (e.g., `import X from 'utils/...'`)

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
