'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import BlogCard from './BlogCard';
import BlogGrid from './BlogGrid';
import { CATEGORIES, type ArticleMetadata } from '../utils/article-types';

function isValidCategory(value: string): value is ArticleMetadata['category'] {
  return (CATEGORIES as string[]).includes(value);
}

function BlogListingInner({
  articles,
  activeCategory,
}: {
  articles: ArticleMetadata[];
  activeCategory: ArticleMetadata['category'] | null;
}) {
  const visible = activeCategory
    ? articles.filter((article) => article.category === activeCategory)
    : articles;

  return (
    <>
      <div
        className="mb-16 flex flex-wrap gap-3 justify-center"
        role="group"
        aria-label="Filter articles by category"
      >
        <Link
          href="/blog"
          className={`px-4 py-2 text-sm font-oswald uppercase tracking-widest transition-all duration-300 ${
            !activeCategory
              ? 'text-white bg-[#1A2030] border-2 border-[#FF5E00]'
              : 'text-[#C5C6C7] border border-[#1A2030] hover:border-[#FF5E00] hover:text-[#FF5E00]'
          }`}
          aria-current={!activeCategory ? 'page' : undefined}
        >
          All Articles
        </Link>
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <Link
              key={category}
              href={`/blog?category=${encodeURIComponent(category)}`}
              className={`px-4 py-2 text-sm font-oswald uppercase tracking-widest transition-all duration-300 ${
                isActive
                  ? 'text-white bg-[#1A2030] border-2 border-[#FF5E00]'
                  : 'text-[#C5C6C7] border border-[#1A2030] hover:border-[#FF5E00] hover:text-[#FF5E00]'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              {category}
            </Link>
          );
        })}
      </div>

      {visible.length > 0 ? (
        <BlogGrid>
          {visible.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </BlogGrid>
      ) : (
        <div className="text-center py-24">
          <p className="text-[#C5C6C7] text-lg">
            {activeCategory
              ? `No articles in “${activeCategory}” yet. Check back soon.`
              : 'Articles coming soon. Check back for expert training insights.'}
          </p>
        </div>
      )}
    </>
  );
}

export function BlogListingFallback({ articles }: { articles: ArticleMetadata[] }) {
  return <BlogListingInner articles={articles} activeCategory={null} />;
}

export default function BlogListing({ articles }: { articles: ArticleMetadata[] }) {
  const searchParams = useSearchParams();
  const rawCategory = searchParams.get('category');
  const activeCategory =
    rawCategory && isValidCategory(rawCategory) ? rawCategory : null;

  return <BlogListingInner articles={articles} activeCategory={activeCategory} />;
}
