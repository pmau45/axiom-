# Contributing Guide

Thank you for considering contributing to Axiom Canine! This guide will help you understand how to contribute effectively.

## Code of Conduct

Be respectful, inclusive, and professional in all interactions.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork locally:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/axiom-.git
   cd axiom-
   ```

3. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Follow the development guide** in [DEVELOPMENT.md](./DEVELOPMENT.md)

## Before You Start

- Read [ARCHITECTURE.md](./ARCHITECTURE.md) to understand the codebase
- Check existing [GitHub Issues](https://github.com/pmau45/axiom-/issues) to avoid duplicates
- Discuss major changes in an issue first

## Making Changes

### Code Style

- **Use TypeScript** - No JavaScript files
- **Follow existing patterns** - Match current code style
- **Component structure:**
  ```tsx
  import { Metadata } from 'next';
  
  export const metadata: Metadata = {
    title: '...',
    description: '...',
  };
  
  export default function ComponentName() {
    return (
      // JSX here
    );
  }
  ```

- **Naming conventions:**
  - Components: PascalCase (e.g., `IntakeModal.tsx`)
  - Files: Lowercase with hyphens (e.g., `intake-modal.tsx`) - UNLESS it's a component file
  - Variables/functions: camelCase (e.g., `handleSubmit`)
  - Constants: UPPER_SNAKE_CASE (e.g., `MAX_FILE_SIZE`)

### TypeScript

- All components must have proper type definitions
- Keep feature-specific types near the code that uses them
- Add new types for new features

### Styling

- Use **Tailwind CSS** classes
- Follow utility-first approach
- Keep CSS files minimal (only global styles in `app/globals.css`)
- No inline styles

### Performance

- Use React 19 features appropriately
- Avoid unnecessary re-renders
- Use Next.js Image component for images
- Test bundle size impact of new dependencies

## Testing Your Changes

### Before Committing

1. **Run linting:**
   ```bash
   npm run lint
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Test locally:**
   ```bash
   npm run dev
   # Test your changes at http://localhost:3000
   ```

4. **Check for TypeScript errors:**
   ```bash
   npm run build
   ```

## Committing Changes

### Commit Message Format

```
type(scope): description

Optional detailed explanation

Fixes #123
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation change
- `style` - Formatting/style change (no logic change)
- `refactor` - Code refactor (no feature/bug change)
- `perf` - Performance improvement
- `test` - Adding tests
- `chore` - Build tools, dependencies

**Example:**
```
feat(forms): add dog breed field to intake modal

Added optional breed field to collect dog breed information
during client intake. Updates IntakeModal and types.

Fixes #42
```

## Submitting Changes

### Pull Request Process

1. **Ensure tests pass:**
   ```bash
   npm run lint
   npm run build
   ```

2. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Open a Pull Request** with:
   - Clear title describing changes
   - Description of what changed and why
   - Reference to related issue(s)
   - Screenshot/demo if UI changes

4. **Respond to feedback** - Reviews may request changes

### PR Title Format

```
[type] Short description

Example: [feat] Add dog breed field to intake form
```

## Adding New Features

### Step-by-Step Example: Adding a New Page

1. **Create the page:**
   ```bash
   mkdir -p app/new-page
   touch app/new-page/page.tsx
   ```

2. **Write the component:**
   ```tsx
   import { Metadata } from 'next';
   import Navbar from '@/app/components/layout/Navbar';
   
   export const metadata: Metadata = {
     title: 'New Page | Axiom Canine',
     description: 'Description of new page',
   };
   
   export default function NewPage() {
     return (
       <main>
         <h1>New Page</h1>
       </main>
     );
   }
   ```

3. **Update navigation:**
   - Edit `app/components/layout/Navbar.tsx`
   - Add link to new page

4. **Test locally:**
   ```bash
   npm run dev
   # Visit http://localhost:3000/new-page
   ```

5. **Commit and push:**
   ```bash
   git add .
   git commit -m "feat(pages): add new page"
   git push origin feature/new-page
   ```

## Reporting Issues

### Bug Reports

Include:
- Clear title describing the bug
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/videos if relevant
- Browser/OS info

### Feature Requests

Include:
- Clear title describing the feature
- Why this feature is needed
- How it should work (user perspective)
- Possible implementation approach (optional)

## Questions?

- Check [ARCHITECTURE.md](./ARCHITECTURE.md) for design questions
- Check [DEVELOPMENT.md](./DEVELOPMENT.md) for setup questions
- Open an issue for clarification

## License

By contributing, you agree your changes are licensed under the project's LICENSE file.

## Thank You!

Your contributions help make Axiom Canine better. Thank you for your time and effort! 🎉
