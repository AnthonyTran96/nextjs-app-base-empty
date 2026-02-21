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
