import type { Metadata } from 'next';
import '@fontsource/oswald/500.css';
import '@fontsource/oswald/700.css';
import '@fontsource/chivo/300.css';
import '@fontsource/chivo/400.css';
import '@fontsource/chivo/700.css';
import SiteLayout from './components/layout/SiteLayout';
import ErrorBoundary from './components/ui/ErrorBoundary';
import './globals.css';

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://axiom-canine.netlify.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
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
    url: BASE_URL,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Axiom Canine — Professional Dog Training Jacksonville FL',
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
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': BASE_URL,
    name: 'Axiom Canine',
    description:
      'Professional dog training in Jacksonville, FL specializing in behavior modification, advanced obedience, and free rescue adjustment support.',
    telephone: '+19044587561',
    url: BASE_URL,
    image: `${BASE_URL}/og-image.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jacksonville',
      addressRegion: 'FL',
      postalCode: '32244',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '14:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Jacksonville', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Ponte Vedra Beach', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Nocatee', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'St. Augustine', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Palm Coast', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Brunswick', containedInPlace: { '@type': 'State', name: 'Georgia' } },
      { '@type': 'City', name: 'St. Simons Island', containedInPlace: { '@type': 'State', name: 'Georgia' } },
      { '@type': 'City', name: 'Jekyll Island', containedInPlace: { '@type': 'State', name: 'Georgia' } },
      { '@type': 'County', name: 'Nassau County', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'County', name: 'Flagler County', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'County', name: 'Glynn County', containedInPlace: { '@type': 'State', name: 'Georgia' } },
    ],
    priceRange: '$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dog Training Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Behavior Modification',
            description:
              'Rehabilitation for reactivity, aggression, and resource guarding. We address the root cause of dangerous behaviors in Jacksonville, FL dogs.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Advanced Obedience Training',
            description:
              'Build bulletproof recall, off-leash reliability, and public neutrality for dogs in Jacksonville, FL and surrounding areas.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Axiom Cares — Free Rescue & Adoption Support',
            description:
              'Free in-home visits for rescue and adoption adjustment in Jacksonville, FL. No judgment, no pressure, no bill.',
          },
        },
      ],
    },
    sameAs: [
      'https://www.facebook.com/axiomcanine',
      'https://www.instagram.com/axiomcanine',
    ],
  };

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="pUSb1v5Pfnz_tUl9PvefqSwy7VpN6g8k-C5FAS_ac9Q" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Ads Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18020403242"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18020403242');
            `,
          }}
        />
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-chivo antialiased overflow-x-hidden min-h-screen bg-[#0B0C10] text-[#C5C6C7]">
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
            <option value="behavior">Behavior Modification</option>
            <option value="obedience">Advanced Obedience</option>
            <option value="board-train">Board &amp; Train</option>
            <option value="in-home">In-Home Training</option>
            <option value="group">Group Classes</option>
            <option value="rescue">Rescue / Adoption Adjustment (Free)</option>
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
