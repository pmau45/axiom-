import type { Metadata } from 'next';
import Link from 'next/link';
import { Compass } from 'lucide-react';
import BlogCard from './components/BlogCard';
import BlogGrid from './components/BlogGrid';
import { getAllArticles, CATEGORIES } from './utils/mdx-loader';

export const metadata: Metadata = {
  title: 'Blog | Axiom Canine | Training Insights & Tips',
  description:
    'Expert dog training insights, behavioral tips, and training techniques from Axiom Canine. Learn how to build lasting obedience and address common behavior issues.',
  alternates: {
    canonical: '/blog',
  },
};

export default async function BlogPage() {
  const articles = await getAllArticles();

  return (
    <div className="page-enter">
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
            Master the craft of{' '}
            <span className="text-[#FF5E00]">dog training.</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed">
            Explore proven techniques, behavioral insights, and training philosophy built on structure,
            consistency, and results.
          </p>
        </div>
      </section>

      {/* ── Filter + Articles ──────────────────────────── */}
      <section className="py-24 bg-[#0B0C10] border-b border-[#1A2030]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-16 flex flex-wrap gap-3 justify-center">
            <Link
              href="/blog"
              className="px-4 py-2 text-sm font-oswald uppercase tracking-widest text-white bg-[#1A2030] border-2 border-[#FF5E00] hover:bg-[#FF5E00] hover:text-[#050505] transition-all duration-300"
            >
              All Articles
            </Link>
            {CATEGORIES.map((category) => (
              <Link
                key={category}
                href={`/blog?category=${encodeURIComponent(category)}`}
                className="px-4 py-2 text-sm font-oswald uppercase tracking-widest text-[#C5C6C7] border border-[#1A2030] hover:border-[#FF5E00] hover:text-[#FF5E00] transition-all duration-300"
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Articles Grid */}
          {articles.length > 0 ? (
            <BlogGrid>
              {articles.map((article) => (
                <BlogCard key={article.slug} article={article} />
              ))}
            </BlogGrid>
          ) : (
            <div className="text-center py-24">
              <p className="text-[#C5C6C7] text-lg">
                Articles coming soon. Check back for expert training insights.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
