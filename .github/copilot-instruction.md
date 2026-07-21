# Commit Message Generation Guidelines

When generating git commit messages for this project, you MUST strictly adhere to the rules defined in `commitlint.config.js`.

## Format
```
<type>(<scope>): <subject>
```

## Rules
1. **Type**: Must be exactly one of the following:
   - `feat` (e.g., add jwt login system)
   - `fix` (e.g., resolve login authentication issue)
   - `docs` (e.g., update installation guide)
   - `style` (e.g., fix button alignment and spacing)
   - `refactor` (e.g., optimize query for user listing)
   - `test` (e.g., add unit tests for login service)
   - `chore` (e.g., update npm dependencies)
   - `perf` (e.g., improve response time using redis)
   - `ci` (e.g., add workflow for automated testing)
   - `revert` (e.g., revert a previous commit)
   - `build` (e.g., changes that affect the build system)
   - `wip` (e.g., work in progress on authentication module)
   - `release` (e.g., v1.0.0 commit)
   - `hotfix` (e.g., fix critical payment gateway issue)
   - `config` (e.g., update environment configuration)
   - `security` (e.g., fix token vulnerability issue)
   - `db` (e.g., add users table schema)
   - `api` (e.g., add new user endpoint)

2. **Scope**: Must be strictly in `lower-case`.
3. **Subject**: 
   - Must be strictly in `lower-case`.
   - Maximum length of 72 characters.
   - Must not be empty.

## Examples
- `feat(auth): add jwt login system`
- `style(ui): fix button alignment and spacing`

# Coding Conventions and Project Structure

## 1. Naming Conventions

- **Files and Directories**: Use `kebab-case` for all file and directory names.
  - *Example*: `user-profile.tsx`, `auth-service.ts`, `components/ui-elements/`
- **React Components**: Use `PascalCase` for React component function names.
  - *Example*: `export function UserProfile() { ... }`, `const ButtonGroup = () => { ... }`
- **Variables and Functions**: Use `camelCase` for all standard variable and function names.
  - *Example*: `const userData = ...`, `function calculateTotal() { ... }`
- **Constants**: Use `CONSTANT_CASE` (UPPER_SNAKE_CASE) for global constants or configuration values.
  - *Example*: `const MAX_RETRY_COUNT = 3;`, `const API_BASE_URL = '...';`

## 2. Project Architecture and Routing

- **Next.js Pages (`page.tsx`)**: 
  - The `app/**/page.tsx` files should be kept minimal and act primarily as Server Components.
  - They should be responsible for data fetching, metadata generation, and passing props to the view component.
  - Do *not* write the entire UI/view logic directly in `page.tsx`.

- **Views (`@/views/`)**: 
  - The actual UI and complex layout for a route should reside in the `@/views` directory.
  - Organize views by route name. For a route `/dashboard/settings`, the view component should be in `@/views/dashboard/settings/...`.
  - Import these view components into the corresponding `page.tsx`.

- **Reusable Components (`@/components/`)**:
  - Any component that is shared across multiple views or pages must be placed in the `@/components` directory.
  - Examples include buttons, modals, form inputs, and generic layout wrappers.
  
- **TypeScript Types (`@/types/`)**:
  - Keep global or shared type definitions in the `@/types` directory.
  - Use the naming convention `module-name.d.ts` for type definition files (e.g., `user.d.ts`, `auth.d.ts`).
  - Keep types co-located only if they are strictly internal to a single file or component.

---