# Tech Context

## Core Technologies

| Technology | Version | Purpose |
|---|---|---|
| Next.js | ^14.0.4 | React framework (App Router) |
| React | ^18.2.0 | UI library |
| TypeScript | ^5.3.3 | Type safety |
| Ant Design (antd) | ^5.23.1 | UI component library |
| Tailwind CSS | ^3.4.17 | Utility-first CSS |
| SCSS (sass) | ^1.83.4 | Global styles |

## State Management
| Technology | Version | Purpose |
|---|---|---|
| Redux Toolkit | ^2.5.0 | State management |
| React Redux | ^9.2.0 | React bindings |
| Redux Persist | ^6.0.0 | State persistence |
| Reselect | 4.1.7 | Memoized selectors |

## Forms & Validation
| Technology | Version | Purpose |
|---|---|---|
| React Hook Form | ^7.54.2 | Form management |
| @hookform/resolvers | ^3.10.0 | Validation resolvers |
| Zod | ^3.24.1 | Schema validation |

## Internationalization
| Technology | Version | Purpose |
|---|---|---|
| i18next | ^24.2.1 | i18n framework |
| react-i18next | ^15.4.0 | React integration |

## HTTP & Networking
| Technology | Version | Purpose |
|---|---|---|
| Axios | ^1.6.2 | HTTP client |

## UI Development & Testing
| Technology | Version | Purpose |
|---|---|---|
| Storybook | ^8.6.0 | Component development & documentation |
| @storybook/nextjs | ^8.6.0 | Next.js framework integration |
| @storybook/addon-essentials | ^8.6.0 | Core Storybook addons (controls, docs, actions) |
| @storybook/addon-interactions | ^8.6.0 | Interaction testing |

## Development Tools
| Technology | Version | Purpose |
|---|---|---|
| ESLint | ^8.56.0 | Linting |
| Prettier | ^3.1.1 | Code formatting |
| env-cmd | ^10.1.0 | Environment management |
| @svgr/webpack | ^8.1.0 | SVG as React components |
| Express | ^4.21.2 | Mock server |
| tsx | ^4.19.2 | TypeScript execution (mock server) |

## AI Context Documents
| Directory | Contents |
|---|---|
| `ai-context/` | URD PDF + 24 Markdown files (feature-level requirements for ProfiX Phase 1) |

## Other Libraries
- `lodash` — Utility functions
- `moment` — Date handling
- `uuid` — Unique ID generation
- `history` — Browser history management
- `react-fast-compare` — Deep comparison
- `react18-input-otp` — OTP input component

## Development Setup

### Scripts
```bash
npm run dev          # Dev server with .env.dev
npm run dev:prod     # Dev server with .env.prod
npm run dev:mock     # Dev server with .env.mock
npm run mock:run     # Start mock Express server
npm run build        # Production build
npm run build:dev    # Build with dev env
npm run build:mock   # Build with mock env
npm run build:prod   # Build with prod env
npm run lint         # ESLint check
npm run lint:fix     # ESLint auto-fix
npm run prettier     # Format code
npm run storybook    # Storybook dev server on port 6006
npm run build-storybook  # Build static Storybook
```

### TypeScript Configuration
- `strict: true` with additional strict flags (`noUnusedLocals`, `noImplicitAny`, etc.)
- `baseUrl: "src"` for absolute imports
- Path aliases for common store/service/screen patterns
- Target: ES5 for broad compatibility

### Technical Constraints
- `reactStrictMode: false` in Next.js config
- Images set to `unoptimized: true`
- Console logs removed in production (except `console.error`)
- API timeout: 1 minute
- Request cancellation: 1 minute
- Webpack pinned to `5.101.2` via `overrides` in `package.json` (fixes compatibility bug with `@storybook/nextjs` — webpack >=5.101.3 has a `tap` error with Next.js bundled webpack)
