# Development Guide

## Getting Started

### Prerequisites
- **Node.js** 18+ (check with `node --version`)
- **npm** 9+ (check with `npm --version`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pmau45/axiom-.git
   cd axiom-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and fill in required values.

### Running Locally

**Development mode** (with hot reload):
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000)

**Production build:**
```bash
npm run build
npm start
```

**Linting:**
```bash
npm run lint
```

## Project Structure

```
app/
├── page.tsx                 # Home page
├── layout.tsx              # Root layout with metadata
├── globals.css             # Global styles
├── components/
│   ├── layout/             # Layout components (Navbar, Footer, SiteLayout)
│   ├── forms/              # Form components (IntakeModal, OpenModalButton)
│   ├── animations/         # Animation components
│   ├── dashboard/          # Training philosophy dashboard
│   └── ui/                 # Utility components
├── blog/                   # Blog index, article pages, MDX content, helpers
├── services/               # Service page routes
├── training-issues/        # Training issue guides
├── community/              # Community programs page
├── contact/                # Contact page
├── philosophy/             # Training philosophy dashboard route
└── location pages/         # City landing pages (Jacksonville, Nocatee, Ponte Vedra, Palm Coast, Brunswick, St. Augustine)

public/
├── manifest.json          # PWA manifest
├── robots.txt             # SEO robots directive
├── favicon.png            # Browser favicon
├── apple-touch-icon.png   # iOS home screen icon
├── icon-192.png           # PWA icon
├── icon-512.png           # PWA icon (large)
└── og-image.png           # Social media preview
```

## Key Technologies

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animations
- **Netlify Forms** - Form submission (no backend)
- **Lucide Icons** - Icon library

## Common Tasks

### Adding a New Page

1. Create `app/your-page/page.tsx`:
   ```tsx
   import { Metadata } from 'next';
   
   export const metadata: Metadata = {
     title: 'Your Page | Axiom Canine',
     description: 'Page description',
   };
   
   export default function YourPage() {
     return (
       <main>
         <h1>Your Page</h1>
       </main>
     );
   }
   ```

2. Update `Navbar.tsx` with link to new page

### Adding a New Component

1. Create component in appropriate subfolder:
   - `components/layout/` - Page layout components
   - `components/forms/` - Form components
   - `components/animations/` - Animation components
   - `components/ui/` - Utility/UI components

2. Add TypeScript types next to the component, or create a shared module if the types are reused broadly

### Styling

- Use Tailwind CSS classes in components
- Global styles in `app/globals.css`
- Avoid inline styles

### Forms

Forms use **Netlify Forms** with no backend:
- Form name must match: `<form name="contact">`
- Data is automatically collected in Netlify dashboard
- See `IntakeModal.tsx` for implementation

## Deployment

### Netlify

1. Push to GitHub
2. Connect repo to Netlify
3. Set environment variables in Netlify UI
4. Auto-deploys on push to main

### Environment Variables

Required in `.env` or Netlify UI:
- `NEXT_PUBLIC_SITE_URL` - Site URL for canonical tags
- `NEXT_TELEMETRY_DISABLED=1` - Disable telemetry

Optional:
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Dependencies not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails
```bash
npm run lint    # Check for lint errors
npm run build   # Try building again
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
