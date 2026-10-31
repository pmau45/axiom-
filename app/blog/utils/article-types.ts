export type ArticleCategory =
  | 'Training Tips'
  | 'Behavior Insights'
  | 'Philosophy'
  | 'Technique Breakdowns';

export interface ArticleMetadata {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: ArticleCategory;
  readTime: number;
  heroImage: string;
  /** Descriptive alt text with local + training context */
  heroImageAlt: string;
  slug: string;
  /** Optional shorter SERP title (layout still appends `| Axiom Canine`) */
  metaTitle?: string;
  /** Optional meta description when the excerpt is too long */
  metaDescription?: string;
}

export const CATEGORIES: ArticleCategory[] = [
  'Training Tips',
  'Behavior Insights',
  'Philosophy',
  'Technique Breakdowns',
];
