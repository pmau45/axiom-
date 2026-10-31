import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Compass } from 'lucide-react';
import BlogListing, { BlogListingFallback } from './components/BlogListing';
import JsonLd from '@/app/components/seo/JsonLd';
import {
  SITE_URL,
  BUSINESS_ID,
  buildBreadcrumbList,
  buildSchemaGraph,
} from '@/app/lib/schema';
import { buildPageMetadata } from '@/app/lib/seo';
import { getArticleIndex } from './utils/mdx-loader';

/** Prerender at build. Do not regenerate in a Netlify lambda on each /blog request. */
export const dynamic = 'force-static';
export const runtime = 'nodejs';

export const metadata: Metadata = buildPageMetadata({
  title: 'Dog Training Blog',
  description:
    'Dog training tips for Jacksonville and Northeast Florida — behavior, leash manners, board and train, and rescue advice from Axiom Canine.',
  path: '/blog',
});

export default function BlogPage() {
  const articles = getArticleIndex();

  const blogJsonLd = buildSchemaGraph(
    {
      '@type': 'Blog',
      name: 'Axiom Canine Blog',
      description:
        'Dog training insights, behavior tips, and technique guides for Jacksonville, FL and Northeast Florida owners.',
      url: `${SITE_URL}/blog`,
      publisher: { '@id': BUSINESS_ID },
      blogPost: articles.slice(0, 10).map((article) => ({
        '@type': 'BlogPosting',
        headline: article.title,
        url: `${SITE_URL}/blog/${article.slug}`,
        datePublished: article.date,
        image: article.heroImage,
        description: article.excerpt,
      })),
    },
    buildBreadcrumbList([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
    ])
  );

  return (
    <div className="page-enter">
      <JsonLd data={blogJsonLd} />
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-24 overflow-hidden bg-gradient-to-b from-[#1A2030]/20 to-[#050505]"
        aria-labelledby="blog-hero-heading"
      >
        <div className="absolute inset-0 bg-texture opacity-40 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center mb-8 gap-2">
            <Compass className="w-5 h-5 text-[#FF5E00]" aria-hidden="true" />
            <p className="text-[#C5C6C7] font-bold tracking-[0.2em] uppercase text-sm">
              Training Insights
            </p>
          </div>
          <h1
            id="blog-hero-heading"
            className="font-oswald text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight leading-[0.9] mb-6 text-white drop-shadow-2xl"
          >
            Dog Training Insights for{' '}
            <span className="text-[#FF5E00]">Jacksonville</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed">
            Explore proven techniques, behavioral insights, and training philosophy built on structure,
            consistency, and results.
          </p>
        </div>
      </section>

      {/* ── Filter + Articles ──────────────────────────── */}
      <section className="py-24 bg-[#0B0C10] border-b border-[#1A2030]" aria-labelledby="blog-articles-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="blog-articles-heading" className="sr-only">
            Training articles
          </h2>
          <Suspense fallback={<BlogListingFallback articles={articles} />}>
            <BlogListing articles={articles} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
