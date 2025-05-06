# Folder structure 

This is a Next.js app built with the latest features (Next.js 15 as of March 2025) and structured using the **MVC (Model-View-Controller)** pattern. 
If you’re from 100Devs, this setup will feel familiar—it mirrors the MVC approach often taught for express.js, adapted to Next.js’s modern frontend capabilities.

We use the Next.js `app` router, blending Server Components and Server Actions with MVC. 

```
my-nextjs-mvc/
├── app/
│   ├── (routes)/
│   │   ├── dashboard/
│   │   │   ├── page.tsx
│   │   │   ├── actions.ts  // Controller: Route-specific actions (e.g., add user).
│   │   │   └── layout.tsx
│   ├── _components/
│   │   ├── ui/
│   │   │   └── Button.tsx
│   │   ├── layouts/
│   │   │   └── DashboardLayout.tsx
|   ├── _db/
│   ├── controllers/
│   │   └── todo.ts
|   ├── models/
│   |   └── Todo.ts  // Controller: Shared actions (e.g., login).
├── data/
│   ├── users.json
├── public/
│   ├── placeholder.txt
├── utils/
│   └── helpers.ts
├── next.config.js
├── package.json
└── README.md
```
Here’s the breakdown of `src/`:

### `app/`
- **Purpose**: Manages routing and the "View" layer with Next.js Server Components.
- **`/(routes)/`**: Groups routes without changing URLs (e.g., `dashboard/`, `leaderboard/`).
  - **Example Route (e.g., `dashboard/`)**:
    - **`page.tsx`**: The main view, rendered as a Server Component.
    - **`actions.ts`**: Server Actions (Controller) for forms or mutations.
    - **`layout.tsx`**: Shared layout for the route.
- **`/_components/`**: Reusable UI components (part of "View") used across multiple routes.
  - **`ui/`**: General components (e.g., `Button.tsx`).
  - **`layouts/`**: Layouts (e.g., `DashboardLayout.tsx`).

>[!NOTE]
> Add `'use client'` for components needing interactivity (e.g., custom hooks, state).

### `models/`
- **Purpose**: The "Model" layer for data and business logic.
  - **Example**:`Users.ts` Database code (e.g., Mongoose schema ).

>[!NOTE]
> Put data-fetching and mutations here, called by `actions.ts`.

### `controllers/` (Shared)
- **Purpose**: Shared Server Actions or logic not specific to one route.
  - **Example**: `auth.ts` for login/logout logic.

>[!NOTE] 
> Use this for reusable logic; otherwise, keep actions in `app/*/actions.ts`.

### `public/`
- **Purpose**: Static assets (e.g., images, `favicon.ico`).

### `utils/`
- **Purpose**: Helper functions (e.g., formatting utilities).

## Key Concepts
- **Server Components**: Default in `app/`. Great for server-side rendering and data fetching.
- **Server Actions**: Use `'use server'` for form handling or mutations.
- **Client Components**: Use `'use client'` for interactive features (e.g., state, event listeners).

## Example Workflow
1. **Add a Feature**:
   - Create a route like `app/(routes)/my-new-route/`.
   - Add `page.tsx` (View) to show the UI.
   - Add `actions.ts` (Controller) if you need form logic or mutations.
   - Define data logic in `models/` (Model) if it involves data fetching or storage.
2. **Reusable UI**: Add components used across routes to `app/_components/ui/`.
