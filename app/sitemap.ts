import type { MetadataRoute } from 'next';
import { getArticleSitemapEntries } from './blog/utils/article-meta';
import { pageUrl } from './lib/site';

/** Prerender at build (when MDX files exist). Do not regenerate in a Netlify lambda. */
export const dynamic = 'force-static';
export const runtime = 'nodejs';

function loc(path: string): string {
  return pageUrl(path);
}

export default function sitemap(): MetadataRoute.Sitemap {
  let articles: ReturnType<typeof getArticleSitemapEntries> = [];
  try {
    articles = getArticleSitemapEntries();
  } catch {
    articles = [];
  }

  const latestArticleDate = articles[0]?.lastModified ?? new Date('2026-07-09T00:00:00.000Z');

  const articleEntries = articles.map((article) => ({
    url: loc(`/blog/${article.slug}`),
    lastModified: article.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: loc('/'),
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: loc('/jacksonville'),
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: loc('/blog'),
      lastModified: latestArticleDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    ...articleEntries,
    {
      url: loc('/services'),
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: loc('/services/in-home-dog-training'),
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: loc('/services/board-and-train'),
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: loc('/services/group-classes'),
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: loc('/services/behavior-modification'),
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: loc('/services/advanced-obedience'),
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: loc('/services/puppy-training'),
      lastModified: new Date('2026-07-09'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: loc('/training-issues/reactive-dog'),
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: loc('/training-issues/leash-pulling'),
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: loc('/training-issues/aggression'),
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: loc('/training-issues/separation-anxiety'),
      lastModified: new Date('2026-07-09'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: loc('/training-issues/resource-guarding'),
      lastModified: new Date('2026-07-09'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: loc('/contact'),
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: loc('/community'),
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: loc('/philosophy'),
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: loc('/ponte-vedra'),
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: loc('/nocatee'),
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: loc('/st-augustine'),
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: loc('/palm-coast'),
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: loc('/brunswick-ga'),
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: loc('/orange-park'),
      lastModified: new Date('2026-07-09'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: loc('/jacksonville-beach'),
      lastModified: new Date('2026-07-09'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: loc('/fernandina-beach'),
      lastModified: new Date('2026-07-09'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
  ];
}
