'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArticleMetadata } from '../utils/mdx-loader';

interface BlogCardProps {
  article: ArticleMetadata;
}

export default function BlogCard({ article }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-none border border-[#1A2030] bg-[#0B0C10] shadow-xl hover:border-[#FF5E00] hover:shadow-[0_0_20px_rgba(255,94,0,0.2)] transition-all duration-300"
    >
      <Link href={`/blog/${article.slug}`}>
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden bg-[#050505]">
          <Image
            src={article.heroImage}
            alt={article.heroImageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category Badge */}
          <div className="mb-3 inline-block">
            <span className="text-xs font-oswald uppercase tracking-widest text-[#FF5E00]">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-oswald text-xl md:text-2xl font-bold uppercase tracking-tight text-white mb-3 leading-snug group-hover:text-[#FF5E00] transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm md:text-base text-[#C5C6C7] mb-4 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-[#7A8B66] border-t border-[#1A2030] pt-4">
            <span>{article.readTime} min read</span>
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
