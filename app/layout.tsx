import type { Metadata } from 'next';
import '@fontsource/oswald/500.css';
import '@fontsource/oswald/700.css';
import '@fontsource/chivo/300.css';
import '@fontsource/chivo/400.css';
import '@fontsource/chivo/700.css';
import SiteLayout from './components/layout/SiteLayout';
import ErrorBoundary from './components/ui/ErrorBoundary';
import GoogleTag from './components/seo/GoogleTag';
import JsonLd from './components/seo/JsonLd';
import { INTAKE_SERVICES } from './lib/intake';
import {
  SITE_URL,
  OG_IMAGE_ALT,
  buildLocalBusinessSchema,
  buildWebSiteSchema,
  buildCatalogServiceSchemas,
  buildSchemaGraph,
} from './lib/schema';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Axiom Canine | Professional Dog Training — Jacksonville, FL',
    template: '%s | Axiom Canine',
  },
  description:
    'Axiom Canine — professional dog training in Jacksonville, FL. Behavior modification, off-leash obedience & free rescue support. Serving Ponte Vedra, Nocatee & St. Augustine.',
  keywords: [
    'dog training Jacksonville FL',
    'behavior modification dog Jacksonville',
    'advanced obedience training Jacksonville',
    'dog trainer Jacksonville FL',
    'Ponte Vedra dog training',
    'Nocatee dog training',
    'St. Augustine dog trainer',
    'reactive dog training Jacksonville',
    'off-leash obedience Jacksonville',
    'aggressive dog training Jacksonville',
    'rescue dog training Jacksonville',
    'puppy training Jacksonville FL',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Axiom Canine',
    title: 'Axiom Canine | Professional Dog Training — Jacksonville, FL',
    description:
      'Structure. Consistency. Results. Professional dog training for behavior modification, advanced obedience, and rescue adjustment in Jacksonville, FL.',
    url: SITE_URL,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axiom Canine | Professional Dog Training',
    description: 'Structure. Consistency. Results. Jacksonville, FL dog training specialists.',
    site: '@axiomcanine',
    creator: '@axiomcanine',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteJsonLd = buildSchemaGraph(
    buildLocalBusinessSchema(),
    buildWebSiteSchema(),
    buildCatalogServiceSchemas()
  );

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Axiom Canine" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="google-site-verification" content="pUSb1v5Pfnz_tUl9PvefqSwy7VpN6g8k-C5FAS_ac9Q" />
        <JsonLd data={siteJsonLd} />
      </head>
      <body className="font-chivo antialiased overflow-x-hidden min-h-screen bg-[#0B0C10] text-[#C5C6C7]">
        <GoogleTag />

        {/* Skip to main content for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#FF5E00] focus:text-[#050505] focus:px-4 focus:py-2 focus:font-bold"
        >
          Skip to main content
        </a>

        {/* Netlify Forms declaration - required for Netlify to register the form at build time */}
        <form
          name="intake"
          method="POST"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          encType="application/x-www-form-urlencoded"
          style={{ display: 'none' }}
          aria-hidden="true"
        >
          <input type="hidden" name="form-name" value="intake" />
          <input type="text" name="bot-field" />
          <input type="text" name="name" />
          <input type="tel" name="phone" />
          <input type="text" name="dog_name" />
          <select name="service">
            {INTAKE_SERVICES.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
          <textarea name="message"></textarea>
        </form>

        <ErrorBoundary>
          <SiteLayout>{children}</SiteLayout>
        </ErrorBoundary>
      </body>
    </html>
  );
}
