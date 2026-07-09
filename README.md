# Axiom Canine — Next.js Website

Professional dog training website for Axiom Canine, Jacksonville, FL. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Netlify Forms.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + global styles (`app/globals.css`)
- **Fonts:** Oswald & Chivo via `@fontsource` packages (self-hosted, no Google Fonts fetch at build time)
- **Forms:** Netlify Forms (no backend required)
- **Hosting:** Netlify

## Project Structure

```
axiom-canine/
├── app/
│   ├── blog/               # Blog listing, article pages, MDX content, helpers
│   ├── brunswick-ga/       # Brunswick, GA landing page
│   ├── community/          # Axiom Cares page
│   ├── components/         # Layout, forms, animations, dashboard, UI
│   ├── contact/            # Contact page
│   ├── jacksonville/       # Jacksonville landing page
│   ├── nocatee/            # Nocatee landing page
│   ├── palm-coast/         # Palm Coast landing page
│   ├── philosophy/         # Training philosophy dashboard
│   ├── ponte-vedra/        # Ponte Vedra landing page
│   ├── services/           # Service pages and program overview
│   ├── st-augustine/       # St. Augustine landing page
│   ├── training-issues/    # Issue-specific training pages
│   ├── layout.tsx          # Root layout (fonts, metadata, JSON-LD, SiteLayout)
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   ├── globals.css         # Global styles (Tailwind + custom CSS)
│   ├── robots.ts           # robots.txt route
│   └── sitemap.ts          # sitemap route
├── public/
│   ├── apple-touch-icon.png
│   ├── favicon.png
│   ├── googlea7c3e38be4a6d070.html
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── manifest.json
│   ├── netlify-form.html
│   └── og-image.png
├── netlify.toml            # Netlify build + plugin config
├── .env.example            # Environment variable template
├── .netlifyignore
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Local Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/pmau45/axiom-.git
cd axiom-

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Netlify

### Option 1: Deploy via Netlify UI (Recommended)

1. Push this repository to GitHub
2. Log in to [app.netlify.com](https://app.netlify.com)
3. Click **Add new site → Import an existing project**
4. Select your GitHub repository
5. Netlify auto-detects `netlify.toml` — build settings are pre-configured
6. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL` → your production URL (e.g., `https://axiom-canine.netlify.app`)
   - `NEXT_PUBLIC_GOOGLE_ADS_ID` → Google Ads tag ID (optional; e.g., `AW-18020403242`)
7. Click **Deploy**

### Option 2: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Required Netlify Plugin

The `netlify.toml` includes `@netlify/plugin-nextjs` which handles:
- Server-side rendering via Netlify Functions
- Image optimization
- API routes (if added later)

Install it locally for testing:

```bash
npm install --save-dev @netlify/plugin-nextjs
```

## Netlify Forms Setup

The intake form uses **Netlify Forms** — no backend code required.

### How It Works

1. The form in `IntakeModal.tsx` has `data-netlify="true"` and `name="intake"`
2. Netlify detects the form at build time and creates a form endpoint
3. On submit, the form POSTs to `/` with `Content-Type: application/x-www-form-urlencoded`
4. Submissions appear in the **Netlify Dashboard → Forms**

### Spam Prevention

- **Honeypot field** (`bot-field`): Hidden field that bots fill out; legitimate users won't
- **Netlify Akismet**: Enable in Netlify Dashboard → Forms → Spam Filters

### Viewing Submissions

Go to: **Netlify Dashboard → Your Site → Forms → intake**

### Email Notifications

Set up in: **Netlify Dashboard → Forms → intake → Form notifications**

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production URL for canonical links and OG tags | `https://axiom-canine.netlify.app` |
| `NEXT_TELEMETRY_DISABLED` | Disables Next.js telemetry | `1` |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Google Ads conversion tag ID (optional) | — |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 ID (optional) | — |

## Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server locally
npm run lint     # Run ESLint
```

## Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, philosophy, services overview |
| `/blog` | Blog index | Training insights and article listings |
| `/blog/[slug]` | Blog article | Individual MDX article pages |
| `/services` | Services overview | Program selector and training issues |
| `/services/behavior-modification` | Behavior Modification | Reactivity, aggression, resource guarding |
| `/services/advanced-obedience` | Advanced Obedience | Off-leash reliability, recall, place command |
| `/services/board-and-train` | Board & Train | Immersive training program |
| `/services/group-classes` | Group Classes | Structured group practice |
| `/services/in-home-dog-training` | In-Home Training | On-site sessions in the dog's environment |
| `/services/puppy-training` | Puppy Training | Early foundations, manners, leash skills |
| `/training-issues/*` | Issue guides | Aggression, reactive dog, leash pulling, separation anxiety, resource guarding |
| `/philosophy` | Training Philosophy | Dashboard with charts and FAQ content |
| `/community` | Axiom Cares | Free rescue/adoption support |
| `/contact` | Contact | Intake steps, service area, FAQs |
| `/[city]` | Location pages | Jacksonville, Jax Beach, Ponte Vedra, Nocatee, Orange Park, St. Augustine, Fernandina Beach, Palm Coast, Brunswick, GA |

## Accessibility

- WCAG 2.2 AA targeted
- ARIA labels on all interactive elements
- Skip-to-content link for keyboard users
- Focus trap in modal dialog
- `aria-required`, `aria-invalid`, `aria-describedby` on all form fields
- Error messages with `role="alert"` for screen readers
- Semantic HTML throughout (`header`, `nav`, `main`, `footer`, `article`, `section`, `address`)
- Proper heading hierarchy (h1 → h2 → h3, no skipped levels)

## Performance

- Fonts loaded via `next/font` (zero layout shift, self-hosted)
- Images use Next.js `<Image>` component for optimization
- CSS-in-JS replaced with Tailwind + `globals.css`
- Production source maps disabled
- Static pages pre-rendered at build time
- Security headers configured in `netlify.toml` and `next.config.js`

## License

Private — All rights reserved, Axiom Canine.
