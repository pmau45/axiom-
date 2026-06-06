# Architecture Overview

## High-Level Architecture

```
┌─────────────────────────────────────────────────────┐
│               Next.js 15 App Router                 │
│                  (Frontend)                         │
└─────────────┬───────────────────────────────────────┘
              │
              ├─→ Static Pages (Services, Training, etc.)
              ├─→ Dynamic Modal (Intake Form)
              ├─→ Client Components (Animations)
              └─→ Metadata & SEO (JSON-LD, OG tags)
                  
┌─────────────────────────────────────────────────────┐
│          Styling & Presentation Layer               │
│  Tailwind CSS + Framer Motion + Lucide Icons        │
└─────────────────────────────────────────────────────┘
              
┌─────────────────────────────────────────────────────┐
│           External Services (No Backend)            │
│  • Netlify Forms (Form Submission)                  │
│  • Netlify Hosting (Deployment)                     │
│  • Google Analytics (Optional)                      │
└─────────────────────────────────────────────────────┘
```

## Data Flow

### Form Submission Flow
```
User fills intake form in IntakeModal
         ↓
Form validates on client
         ↓
Submits to Netlify Forms endpoint
         ↓
Netlify receives & emails notification
         ↓
Data visible in Netlify dashboard
```

### Page Navigation Flow
```
User clicks nav link
         ↓
Next.js App Router handles navigation
         ↓
Page component renders
         ↓
Animations trigger (Framer Motion)
         ↓
Content appears to user
```

## Component Architecture

### Layout Components (`components/layout/`)
- **Navbar.tsx** - Top navigation, modal trigger
- **Footer.tsx** - Footer with business info
- **SiteLayout.tsx** - Client-side wrapper for modal state management

**Responsibilities:**
- Navigation
- Modal state management
- Page structure

### Form Components (`components/forms/`)
- **IntakeModal.tsx** - Client intake form (modal)
- **OpenModalButton.tsx** - Button to open modal

**Responsibilities:**
- Form rendering & validation
- Netlify Forms integration
- Form submission handling

### Animation Components (`components/animations/`)
- **StaggerContainer.tsx** - Coordinates staggered animations
- **AnimatedSection.tsx** - Wraps content with entrance animation

**Responsibilities:**
- Framer Motion animation logic
- Scroll-triggered animations
- Entrance animations on page load

### UI Components (`components/ui/`)
- **ErrorBoundary.tsx** - React error boundary

**Responsibilities:**
- Error handling
- Error UI display

## State Management

### Client-Side State
The app uses **React Context** (via SiteLayout.tsx) for:
- Modal open/close state
- Event bus for modal control

```tsx
// Example: Opening modal from anywhere
eventBus.emit('openModal', { prefilledData: {...} });

// Example: SiteLayout manages modal visibility
const [isModalOpen, setIsModalOpen] = useState(false);
```

### No Global State Library
- Intentionally kept simple (no Redux/Zustand)
- Context API is sufficient for current needs
- Easy to scale if needed

## Routing Structure

```
/ (Home)
├── /blog
│   └── /[slug]
├── /services
│   ├── /behavior-modification
│   ├── /advanced-obedience
│   ├── /board-and-train
│   ├── /group-classes
│   └── /in-home-dog-training
├── /training-issues
│   ├── /aggression
│   ├── /reactive-dog
│   └── /leash-pulling
├── /philosophy (Training philosophy dashboard)
├── /community (Axiom Cares community programs)
├── /contact (Contact page)
├── /[city] landing pages (Jacksonville, Nocatee, Ponte Vedra, Palm Coast, Brunswick, St. Augustine)
└── /not-found (404)
```

## Styling Architecture

### Tailwind CSS
- Config: `tailwind.config.js`
- Global styles: `app/globals.css`
- Custom colors defined in tailwind config
- Brand colors: Dark (#0B0C10), Orange (#FF5E00)

### No CSS Modules
- Tailwind utility classes used throughout
- Easier to maintain & refactor
- Consistent across components

## Performance Optimizations

### Built-in
- **Code splitting** - Each page/route is a separate bundle
- **Image optimization** - Next.js Image component ready
- **Font optimization** - Self-hosted fonts (@fontsource)
- **Production source maps disabled** - Faster builds

### SEO
- **Metadata** - Defined per-page via exported `metadata` object
- **JSON-LD** - Structured data in layout.tsx
- **Open Graph** - Social media preview images
- **Sitemap** - Generated in app/sitemap.ts
- **Robots.txt** - SEO crawler directives

## Browser Support

- Modern browsers (ES2020+)
- No IE11 support needed
- PWA support (installable on mobile)

## Type Safety

### TypeScript Config
- Strict mode enabled
- All components are fully typed
- Feature-specific types live alongside the relevant component or page

### Key Type Definitions
- `NavbarProps`, `NavLink`, `FormValues`, and similar props/types are defined near the components that use them

## Deployment Architecture

### Netlify
- Continuous deployment on Git push
- Form submissions stored in Netlify dashboard
- Environment variables managed in Netlify UI
- Build logs available in Netlify console

### Build Process
1. `npm run build` → Next.js builds static export
2. Netlify detects changes
3. Runs build command (configured in netlify.toml)
4. Deploys to Netlify CDN
5. Site live at axiom-canine.netlify.app

## Security Measures

### Headers
- `X-Content-Type-Options: nosniff` - Prevent MIME sniffing
- `X-Frame-Options: DENY` - Prevent clickjacking
- `X-XSS-Protection: 1; mode=block` - XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin` - Referrer control

### Forms
- Client-side validation
- Netlify handles form security
- No sensitive data stored in client state

## Future Scalability

### If adding backend:
1. Create API routes in `app/api/`
2. Add environment variables for API URLs
3. Use server components for data fetching
4. Implement error handling middleware

### If adding database:
1. Choose database (MongoDB, PostgreSQL, etc.)
2. Add ORM (Prisma, TypeORM, etc.)
3. Create API routes for data operations
4. Update type definitions

### If adding authentication:
1. Use NextAuth.js or similar
2. Protect API routes with middleware
3. Add user state to context
4. Add authentication UI components

## Maintenance

### Regular Tasks
- Update dependencies (`npm update`)
- Run security audit (`npm audit`)
- Check for type errors (`npm run build`)
- Run linting (`npm run lint`)

### Monitoring
- Check Netlify build logs
- Monitor form submissions in Netlify
- Use Google Analytics (if enabled)
- Monitor performance metrics

## Common Extensions

### Analytics
Add Google Analytics or similar:
```tsx
// In layout.tsx
if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
  // Initialize GA
}
```

### Email Notifications
Keep Netlify Forms or add SendGrid:
- Netlify auto-emails submissions
- Or use API with email service

### CMS Integration
Could add Contentful, Sanity, etc.:
- Fetch content from CMS
- Update pages dynamically
- Add content editing UI
