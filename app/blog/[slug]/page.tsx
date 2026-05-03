import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleHero from '../components/ArticleHero';
import RelatedPosts from '../components/RelatedPosts';
import ArticleNav from '../components/ArticleNav';
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
      images: [article.heroImage],
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

  return (
    <div className="page-enter">
      {/* ── Hero ──────────────────────────────────────── */}
      <ArticleHero article={article} />

      {/* ── Content ───────────────────────────────────── */}
      <article className="py-16 md:py-24 bg-[#0B0C10]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none text-[#C5C6C7]">
            <div
              dangerouslySetInnerHTML={{ __html: article.content }}
              className="[&_h2]:font-oswald [&_h2]:text-3xl [&_h2]:md:text-4xl [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-tight [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-6 [&_h3]:font-oswald [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:uppercase [&_h3]:tracking-wider [&_h3]:text-[#FF5E00] [&_h3]:mt-8 [&_h3]:mb-4 [&_p]:leading-relaxed [&_p]:mb-6 [&_strong]:text-[#FF5E00] [&_strong]:font-bold [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-6 [&_li]:mb-2 [&_li]:leading-relaxed [&_a]:text-[#5B8FA8] [&_a:hover]:text-[#FF5E00] [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-[#FF5E00] [&_blockquote]:pl-6 [&_blockquote]:py-4 [&_blockquote]:italic [&_blockquote]:text-[#7A8B66] [&_code]:bg-[#050505] [&_code]:text-[#E8D5B7] [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_pre]:bg-[#050505] [&_pre]:p-6 [&_pre]:rounded [&_pre]:overflow-x-auto [&_pre]:mb-6"
            />
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
