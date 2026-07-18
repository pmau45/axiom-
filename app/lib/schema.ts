/**
 * Shared Schema.org / JSON-LD helpers for rich results.
 * Keep claims factual — never invent ratings, reviews, or geo coordinates.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://axiom-canine.netlify.app';

export const BUSINESS_NAME = 'Axiom Canine';
export const BUSINESS_PHONE = '+19044587561';
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;
export const LOGO_URL = `${SITE_URL}/icon-512.png`;

/** Descriptive alt / caption used for logo & OG images in schema + metadata */
export const OG_IMAGE_ALT =
  'Axiom Canine professional dog training in Jacksonville, FL — behavior modification and obedience';
export const LOGO_ALT =
  'Axiom Canine logo — dog training and behavior modification in Jacksonville, Florida';

export type FaqEntry =
  | { question: string; answer: string }
  | { q: string; a: string };

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface ServiceSchemaInput {
  name?: string;
  description?: string;
  path: string;
  serviceType?: string;
  areaServed?: string[];
  price?: string;
  priceCurrency?: string;
}

export interface ServiceCatalogEntry {
  name: string;
  path: string;
  description: string;
  serviceType: string;
  /** When true, included in LocalBusiness catalog but not the /services index. */
  communityOffer?: boolean;
}

/** Single source of truth for LocalBusiness offers + Service page JSON-LD. */
export const SERVICE_CATALOG: ServiceCatalogEntry[] = [
  {
    name: 'Behavior Modification',
    path: '/services/behavior-modification',
    description:
      'Rehabilitation for reactivity, aggression, and resource guarding. We address the root cause of dangerous behaviors in Jacksonville, FL dogs.',
    serviceType: 'Behavior Modification',
  },
  {
    name: 'Advanced Obedience Training',
    path: '/services/advanced-obedience',
    description:
      'Build bulletproof recall, off-leash reliability, and public neutrality for dogs in Jacksonville, FL and surrounding areas.',
    serviceType: 'Advanced Obedience',
  },
  {
    name: 'Board and Train',
    path: '/services/board-and-train',
    description:
      'Immersive board and train programs for dogs that need structured, daily training with owner transfer sessions in Northeast Florida.',
    serviceType: 'Board and Train',
  },
  {
    name: 'In-Home Dog Training',
    path: '/services/in-home-dog-training',
    description:
      'In-home dog training in Jacksonville and nearby cities — habits form where your dog actually lives.',
    serviceType: 'In-Home Dog Training',
  },
  {
    name: 'Group Classes',
    path: '/services/group-classes',
    description:
      'Structured group dog training classes in Jacksonville, FL — practice real obedience around controlled distractions with coached repetition.',
    serviceType: 'Group Classes',
  },
  {
    name: 'Puppy Training',
    path: '/services/puppy-training',
    description:
      'Puppy training in Jacksonville, FL to build manners, socialization, and structure before problem habits harden.',
    serviceType: 'Puppy Training',
  },
  {
    name: 'Axiom Cares — Free Rescue & Adoption Support',
    path: '/community',
    description:
      'Free in-home visits for rescue and adoption adjustment in Jacksonville, FL. No judgment, no pressure, no bill.',
    serviceType: 'Rescue Dog Support',
    communityOffer: true,
  },
];

/** Programs listed on /services (excludes community-only offers). */
export const SERVICE_INDEX_CATALOG = SERVICE_CATALOG.filter((entry) => !entry.communityOffer);

export function serviceId(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}#service`;
}

export function getServiceCatalogEntry(path: string): ServiceCatalogEntry | undefined {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return SERVICE_CATALOG.find((entry) => entry.path === normalized);
}

function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

function normalizeFaq(item: FaqEntry): { question: string; answer: string } {
  if ('question' in item) return { question: item.question, answer: item.answer };
  return { question: item.q, answer: item.a };
}

export function buildImageObject(url: string, description: string) {
  return {
    '@type': 'ImageObject',
    url: absoluteUrl(url),
    contentUrl: absoluteUrl(url),
    description,
    caption: description,
    name: description,
  };
}

export function buildFaqPageSchema(items: FaqEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => {
      const { question, answer } = normalizeFaq(item);
      return {
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer,
        },
      };
    }),
  };
}

export function buildBreadcrumbList(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildServiceSchema({
  name,
  description,
  path,
  serviceType,
  areaServed = ['Jacksonville', 'Ponte Vedra Beach', 'Nocatee', 'St. Augustine'],
  price,
  priceCurrency = 'USD',
}: ServiceSchemaInput) {
  const catalog = getServiceCatalogEntry(path);
  const resolvedName = name ?? catalog?.name ?? 'Dog Training';
  const resolvedDescription = description ?? catalog?.description ?? '';
  const resolvedServiceType = serviceType ?? catalog?.serviceType ?? 'Dog Training';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': serviceId(path),
    name: resolvedName,
    description: resolvedDescription,
    serviceType: resolvedServiceType,
    url: absoluteUrl(path),
    provider: {
      '@id': BUSINESS_ID,
    },
    areaServed: areaServed.map((city) => ({
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'State',
        name: city.includes('GA') || city === 'Brunswick' ? 'Georgia' : 'Florida',
      },
    })),
    ...(price !== undefined
      ? {
          offers: {
            '@type': 'Offer',
            priceCurrency,
            price,
            availability: 'https://schema.org/InStock',
          },
        }
      : {}),
  };
}

export function buildBlogPostingSchema(article: {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  heroImage: string;
  imageAlt: string;
  category: string;
}) {
  const url = absoluteUrl(`/blog/${article.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: buildImageObject(article.heroImage, article.imageAlt),
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Organization',
      name: article.author,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      '@id': BUSINESS_ID,
      name: BUSINESS_NAME,
      logo: buildImageObject(LOGO_URL, LOGO_ALT),
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url,
    articleSection: article.category,
    inLanguage: 'en-US',
    about: {
      '@type': 'Thing',
      name: 'Dog training in Jacksonville, FL',
    },
  };
}

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': BUSINESS_ID,
    name: BUSINESS_NAME,
    alternateName: 'Axiom Canine Dog Training',
    description:
      'Professional dog training in Jacksonville, FL specializing in behavior modification, advanced obedience, board and train, and free rescue adjustment support across Northeast Florida.',
    telephone: BUSINESS_PHONE,
    url: SITE_URL,
    logo: buildImageObject(LOGO_URL, LOGO_ALT),
    image: [buildImageObject(OG_IMAGE_URL, OG_IMAGE_ALT)],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jacksonville',
      addressRegion: 'FL',
      postalCode: '32244',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS_PHONE,
      contactType: 'customer service',
      areaServed: ['US-FL', 'US-GA'],
      availableLanguage: ['English'],
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
      { '@type': 'City', name: 'Jacksonville Beach', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Ponte Vedra Beach', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Nocatee', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Orange Park', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'St. Augustine', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Fernandina Beach', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Palm Coast', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Brunswick', containedInPlace: { '@type': 'State', name: 'Georgia' } },
      { '@type': 'City', name: 'St. Simons Island', containedInPlace: { '@type': 'State', name: 'Georgia' } },
      { '@type': 'City', name: 'Jekyll Island', containedInPlace: { '@type': 'State', name: 'Georgia' } },
      { '@type': 'County', name: 'Nassau County', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'County', name: 'Clay County', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'County', name: 'Flagler County', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'County', name: 'Glynn County', containedInPlace: { '@type': 'State', name: 'Georgia' } },
    ],
    priceRange: '$$',
    knowsAbout: [
      'Dog training',
      'Behavior modification',
      'Reactive dog training',
      'Aggression rehabilitation',
      'Advanced obedience',
      'Board and train',
      'Puppy training',
      'Separation anxiety',
      'Resource guarding',
      'Leash manners',
      'Rescue dog training',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dog Training Services',
      itemListElement: SERVICE_CATALOG.map((entry) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': serviceId(entry.path),
          name: entry.name,
          url: absoluteUrl(entry.path),
          description: entry.description,
        },
      })),
    },
    sameAs: [
      'https://www.facebook.com/axiomcanine',
      'https://www.instagram.com/axiomcanine',
    ],
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: BUSINESS_NAME,
    description:
      'Professional dog training in Jacksonville, FL — behavior modification, obedience, board and train, and free rescue support.',
    publisher: { '@id': BUSINESS_ID },
    inLanguage: 'en-US',
  };
}

export function buildLocationServiceSchema(city: string, path: string, description: string) {
  return buildServiceSchema({
    name: `Dog Training in ${city}`,
    description,
    path,
    serviceType: 'Dog Training',
    areaServed: [city, 'Jacksonville'],
  });
}

/** Combine multiple schema nodes into a single @graph document */
export function buildSchemaGraph(
  ...nodes: Array<Record<string, unknown> | null | undefined | false>
) {
  const cleaned = nodes.filter(Boolean) as Record<string, unknown>[];
  return {
    '@context': 'https://schema.org',
    '@graph': cleaned.map((node) => {
      const { '@context': _ctx, ...rest } = node;
      return rest;
    }),
  };
}

/**
 * Build a descriptive image alt that includes local + training context.
 * Prefer an explicit frontmatter alt when provided.
 */
export function buildTrainingImageAlt(
  title: string,
  explicitAlt?: string,
  locationHint = 'Jacksonville, FL'
): string {
  if (explicitAlt?.trim()) return explicitAlt.trim();
  const trimmed = title.replace(/\s+/g, ' ').trim();
  if (/jacksonville|ponte vedra|nocatee|florida|st\.?\s*augustine/i.test(trimmed)) {
    return `${trimmed} — Axiom Canine dog training guidance`;
  }
  return `${trimmed} — dog training tips for ${locationHint} from Axiom Canine`;
}
