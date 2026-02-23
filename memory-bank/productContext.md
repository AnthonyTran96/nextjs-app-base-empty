# Product Context

## Why This Project Exists
Starting a new Next.js project from scratch involves significant repetitive setup: configuring state management, authentication, theming, internationalization, component libraries, API layers, and folder structure. This base project eliminates that overhead by providing a battle-tested foundation that can be cloned and extended.

## Problems It Solves
1. **Repetitive boilerplate** — No need to re-implement auth flows, Redux setup, theme toggling, or i18n for every new project
2. **Inconsistent architecture** — Enforces a proven folder structure and pattern conventions
3. **Slow project kickoff** — New projects can start with business logic immediately instead of spending days on infrastructure
4. **Missing best practices** — Includes ESLint, Prettier, TypeScript strict mode, and sensible defaults out of the box

## How It Should Work
- Clone the repo, install dependencies, and start building features
- Authentication flow is pre-wired: Guest Guard redirects unauthenticated users, Auth Guard protects authenticated pages
- State is managed via Redux slices with persistence across sessions
- Theming respects system preference and allows manual override
- i18n is ready — add translation files and use the `t()` function
- Mock server allows frontend development without a real backend

## User Experience Goals
- **Developer experience**: Clean code, clear conventions, minimal friction
- **End-user experience**: Fast page loads, responsive UI, smooth transitions, accessible components
- **Maintainability**: Easy to understand, extend, and hand off to other developers

## Target Product: ProfiX
The base template is being extended to build **ProfiX** — a centralized fee management system for PVcomBank (banking). Key business domains:

### User Groups
1. **Nghiệp vụ (Maker/Checker)**: Set up product catalogs, fee schedules, and promotions
2. **Quản trị hệ thống**: Manage users and system connections

### Core Business Flows
1. **Thu phí theo giao dịch**: Fee collection triggered by customer transactions (transfers, loan repayments, etc.)
2. **Thu phí định kỳ**: Periodic fee collection (account management fees, annual card fees, etc.)

### Feature Groups (22 features in Phase 1)
- **PR (5)**: Fee parameter setup — product catalog, fee formulas, fee schedules, unused codes, promotions
- **SE (4)**: Fee inquiry — tree view, by customer, history, periodic schedule
- **OT (2)**: Workflow — pending approvals, my pending tasks
- **SA (11)**: System admin — login/logout, password, users, roles, fee conditions, default params, job management
