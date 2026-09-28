import type { Metadata } from 'next';
import { pageUrl } from './site';
import { BUSINESS_NAME, OG_IMAGE_ALT } from './schema';

export const DEFAULT_OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: OG_IMAGE_ALT,
} as const;

type OgImage = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

export interface PageMetadataInput {
  /** Unique title segment. Root layout appends `| Axiom Canine` — do not include the brand. */
  title: string;
  description: string;
  /** Site-relative path, e.g. `/blog` or `/`. */
  path: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  images?: OgImage[];
  type?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
  robots?: Metadata['robots'];
}

/**
 * Page metadata with a self-referencing canonical, matching og:url, and a default OG image.
 * Pass `title` without the brand — `app/layout.tsx` uses `template: '%s | Axiom Canine'`.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  ogTitle,
  ogDescription,
  images,
  type = 'website',
  publishedTime,
  authors,
  robots,
}: PageMetadataInput): Metadata {
  const canonical = path === '/' ? '/' : path;
  const url = pageUrl(path);
  const brandedTitle = `${title} | ${BUSINESS_NAME}`;

  return {
    // Root `app/page.tsx` does not receive the layout title template — only nested routes do.
    title: path === '/' ? { absolute: brandedTitle } : title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical,
    },
    openGraph: {
      title: ogTitle ?? brandedTitle,
      description: ogDescription ?? description,
      url,
      type,
      images: images ?? [DEFAULT_OG_IMAGE],
      ...(publishedTime ? { publishedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    ...(robots ? { robots } : {}),
  };
}
