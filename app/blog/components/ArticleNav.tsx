'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Article } from '../utils/mdx-loader';

interface ArticleNavProps {
  prevArticle?: Article;
  nextArticle?: Article;
}

function ArticleNavLink({
  article,
  direction,
}: {
  article: Article;
  direction: 'prev' | 'next';
}) {
  const isPrev = direction === 'prev';

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex-1 relative overflow-hidden rounded-none border border-[#1A2030] hover:border-[#FF5E00] transition-all duration-300"
    >
      <div className="aspect-video relative overflow-hidden bg-[#050505]">
        <Image
          src={article.heroImage}
          alt={article.heroImageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-6">
        <div className="flex items-center gap-2 text-[#FF5E00] text-sm font-oswald uppercase tracking-widest">
          {isPrev ? <ChevronLeft className="w-4 h-4" /> : null}
          {isPrev ? 'Previous' : 'Next'}
          {!isPrev ? <ChevronRight className="w-4 h-4" /> : null}
        </div>

        <h3 className="font-oswald text-lg md:text-xl font-bold uppercase tracking-tight text-white leading-snug group-hover:text-[#FF5E00] transition-colors duration-300 line-clamp-2">
          {article.title}
        </h3>
      </div>
    </Link>
  );
}

export default function ArticleNav({ prevArticle, nextArticle }: ArticleNavProps) {
  if (!prevArticle && !nextArticle) return null;

  return (
    <nav className="py-16 bg-[#050505] border-t border-[#1A2030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {prevArticle ? (
            <ArticleNavLink article={prevArticle} direction="prev" />
          ) : (
            <div className="hidden md:block" />
          )}
          {nextArticle ? (
            <ArticleNavLink article={nextArticle} direction="next" />
          ) : (
            <div className="hidden md:block" />
          )}
        </div>
      </div>
    </nav>
  );
}
