/**
 * Canonical site origin. Default stays on the Netlify subdomain until a
 * custom domain is configured — change NEXT_PUBLIC_SITE_URL (or this default)
 * in one place and canonicals, Open Graph, sitemap, robots, and schema follow.
 */
export const DEFAULT_SITE_URL = 'https://axiom-canine.netlify.app';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? DEFAULT_SITE_URL;

/** Absolute URL for a site path (`/` → origin, `/blog` → origin/blog). */
export function pageUrl(path = '/'): string {
  if (/^https?:\/\//i.test(path)) {
    return path.replace(/\/$/, '') || path;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (normalized === '/') return SITE_URL;
  return `${SITE_URL}${normalized.replace(/\/$/, '')}`;
}
