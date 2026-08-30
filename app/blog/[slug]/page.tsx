import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleHero from '../components/ArticleHero';
import RelatedPosts from '../components/RelatedPosts';
import ArticleNav from '../components/ArticleNav';
import JsonLd from '@/app/components/seo/JsonLd';
import {
  buildBlogPostingSchema,
  buildBreadcrumbList,
  buildSchemaGraph,
} from '@/app/lib/schema';
import { getArticleBySlug, getAllArticles, getRelatedArticles } from '../utils/mdx-loader';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | Axiom Canine Blog`,
    description: article.excerpt,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      images: [
        {
          url: article.heroImage,
          alt: article.heroImageAlt,
        },
      ],
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const allArticles = await getAllArticles();
  const currentIndex = allArticles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : undefined;
  const nextArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : undefined;
  const relatedArticles = await getRelatedArticles(slug, 3);

  const articleJsonLd = buildSchemaGraph(
    buildBlogPostingSchema({
      title: article.title,
      excerpt: article.excerpt,
      date: article.date,
      author: article.author,
      slug: article.slug,
      heroImage: article.heroImage,
      imageAlt: article.heroImageAlt,
      category: article.category,
    }),
    buildBreadcrumbList([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: article.title, path: `/blog/${article.slug}` },
    ])
  );

  return (
    <div className="page-enter">
      <JsonLd data={articleJsonLd} />
      {/* ── Hero ──────────────────────────────────────── */}
      <ArticleHero article={article} />
      {/* ── Content ───────────────────────────────────── */}
      <article className="py-16 md:py-24 bg-[#0B0C10]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="blog-prose max-w-none text-[#C5C6C7] text-lg">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>
      </article>

      {/* ── Related Posts ──────────────────────────────── */}
      {relatedArticles.length > 0 && <RelatedPosts articles={relatedArticles} />}

      {/* ── Navigation ────────────────────────────────── */}
      <ArticleNav prevArticle={prevArticle} nextArticle={nextArticle} />
    </div>
  );
}
