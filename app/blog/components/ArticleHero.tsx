'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArticleMetadata } from '../utils/mdx-loader';

interface ArticleHeroProps {
  article: ArticleMetadata;
}

export default function ArticleHero({ article }: ArticleHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-end justify-center overflow-hidden bg-[#050505]">
      {/* Parallax Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <Image
          src={article.heroImage}
          alt={article.heroImageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 max-w-4xl mx-auto px-4 pb-12 text-center"
      >
        {/* Category */}
        <div className="mb-4 inline-block">
          <span className="text-xs font-oswald uppercase tracking-widest text-[#FF5E00]">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-oswald text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight leading-tight text-white mb-6 drop-shadow-2xl">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[#C5C6C7]">
          <span className="text-sm">{article.author}</span>
          <span className="w-1 h-1 bg-[#7A8B66] rounded-full" />
          <span className="text-sm">{new Date(article.date).toLocaleDateString()}</span>
          <span className="w-1 h-1 bg-[#7A8B66] rounded-full" />
          <span className="text-sm">{article.readTime} min read</span>
        </div>
      </motion.div>
    </section>
  );
}
