import type { MetadataRoute } from 'next';
import { getAllArticles } from './blog/utils/mdx-loader';
import { SITE_URL } from './lib/site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles();

  const articleEntries = articles.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/jacksonville`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    ...articleEntries,
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/in-home-dog-training`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/services/board-and-train`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/services/group-classes`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/services/behavior-modification`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services/advanced-obedience`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services/puppy-training`,
      lastModified: new Date('2026-07-09'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/training-issues/reactive-dog`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/training-issues/leash-pulling`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/training-issues/aggression`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/training-issues/separation-anxiety`,
      lastModified: new Date('2026-07-09'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/training-issues/resource-guarding`,
      lastModified: new Date('2026-07-09'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/community`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/philosophy`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/ponte-vedra`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/nocatee`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/st-augustine`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/palm-coast`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/brunswick-ga`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/orange-park`,
      lastModified: new Date('2026-07-09'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/jacksonville-beach`,
      lastModified: new Date('2026-07-09'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/fernandina-beach`,
      lastModified: new Date('2026-07-09'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
  ];
}
