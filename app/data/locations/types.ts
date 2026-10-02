import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo';

/** Lucide icon keys resolved in LocationPage — keep serializable in data files. */
export type LocationIconName =
  | 'Anchor'
  | 'ArrowRight'
  | 'Bike'
  | 'Camera'
  | 'Car'
  | 'Dog'
  | 'Droplets'
  | 'Heart'
  | 'Home'
  | 'Landmark'
  | 'Palmtree'
  | 'Sailboat'
  | 'Shell'
  | 'Shield'
  | 'Sun'
  | 'TreePine'
  | 'Trees'
  | 'Users'
  | 'Waves';

export type LocationAccent = 'orange' | 'olive';

export interface LocationFaq {
  question: string;
  answer: string;
}

export interface LocationFeature {
  icon: LocationIconName;
  title: string;
  body: string;
  accent: LocationAccent;
}

export interface LocationServiceLink {
  href: string;
  title: string;
  description: string;
  hover: LocationAccent;
  /** Defaults to "Learn more →" */
  ctaLabel?: string;
  /** Featured (hub) card icon */
  icon?: LocationIconName;
}

export interface LocationIntroPart {
  text: string;
  href?: string;
}

export interface LocationRelatedLink {
  href: string;
  title: string;
  description: string;
}

export interface LocationWhyItem {
  title: string;
  body: string;
}

export interface LocationMission {
  eyebrow: string;
  headingBefore: string;
  headingAccent: string;
  paragraphs: Array<{
    text: string;
    /** Optional inline emphasis spans keyed by substring markers — keep plain for simplicity */
    highlights?: Array<{ match: string; className: string }>;
  }>;
}

export interface LocationPageData {
  slug: string;
  /** Schema.org area name, e.g. "Ponte Vedra Beach, FL" */
  schemaName: string;
  breadcrumbLabel: string;
  schemaDescription: string;

  metadata: {
    /** Unique title segment; layout appends `| Axiom Canine`. Do not include the brand. */
    title: string;
    description: string;
    keywords: string[];
    openGraph?: {
      title: string;
      description: string;
    };
  };

  badge: {
    label: string;
    accent: LocationAccent;
  };

  hero: {
    headingId: string;
    headingBefore: string;
    headingAccent: string;
    headingAfter?: string;
    subtitle: string;
    /** Optional italic supporting line (Jacksonville hub) */
    subtext?: string;
    /** Inline emphasis inside subtitle */
    subtitleHighlights?: Array<{ match: string; className: string }>;
    /** Taller hero for hub page */
    size?: 'default' | 'large';
    showPhoneIcon?: boolean;
  };

  local?: {
    headingId: string;
    headingBefore: string;
    headingAccent: string;
    description: string;
    features: LocationFeature[];
  };

  /** Long-form local content (~600–900 words of unique page text) for satellite pages */
  about?: {
    headingId: string;
    headingBefore: string;
    headingAccent: string;
    paragraphs: Array<string | LocationIntroPart[]>;
  };

  /** Neighborhood / service-area callout with optional map embed */
  serviceArea?: {
    headingId: string;
    headingBefore: string;
    headingAccent: string;
    description: string;
    areas: string[];
    /** Google Maps / OSM embed URL (no API key required for basic embeds) */
    mapEmbedUrl?: string;
    mapTitle?: string;
  };

  services: {
    headingId: string;
    heading: string;
    /** When set, rendered after heading in olive (hub featured style) */
    headingAccent?: string;
    /** Optional rich intro with inline links (St. Augustine) */
    intro?: LocationIntroPart[];
    links: LocationServiceLink[];
    /** Hub: show "View All Services" link */
    showAllServicesLink?: boolean;
    /** Hub uses larger service cards with icons */
    style?: 'cards' | 'featured';
  };

  faqTitle: string;
  faqs: LocationFaq[];

  cta: {
    headingId: string;
    headingBefore: string;
    headingAccent?: string;
    description: string;
    note?: string;
    buttonLabel?: string;
  };

  /** Hub-only sections (Jacksonville) */
  mission?: LocationMission;
  neighborhoods?: {
    eyebrow: string;
    headingBefore: string;
    headingAccent: string;
    description: string;
    areas: string[];
  };
  relatedLocations?: LocationRelatedLink[];
  whyChoose?: {
    headingBefore: string;
    headingAccent: string;
    items: LocationWhyItem[];
  };
}

export type LocationSlug = LocationPageData['slug'];

export function buildLocationMetadata(data: LocationPageData): Metadata {
  return buildPageMetadata({
    title: data.metadata.title,
    description: data.metadata.description,
    path: `/${data.slug}`,
    keywords: data.metadata.keywords,
    ogTitle: data.metadata.openGraph?.title,
    ogDescription: data.metadata.openGraph?.description,
  });
}
