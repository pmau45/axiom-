import type { LocationPageData } from './types';

export const ponteVedra: LocationPageData = {
  slug: 'ponte-vedra',
  schemaName: 'Ponte Vedra Beach, FL',
  breadcrumbLabel: 'Dog Training in Ponte Vedra Beach, FL',
  schemaDescription:
    'Premium board and train and behavior modification serving Ponte Vedra, Nocatee, and St. Augustine.',
  metadata: {
    title: { absolute: 'Board & Train Ponte Vedra & Nocatee | Axiom Canine' },
    description:
      'Premium board and train programs serving Ponte Vedra, Nocatee, and St. Augustine. Reactivity and obedience training with owner education. Limited spots available.',
    keywords: [
      'dog training Ponte Vedra',
      'board and train Ponte Vedra',
      'dog trainer Ponte Vedra Beach',
      'behavior modification Ponte Vedra',
      'obedience training Ponte Vedra Isles',
      'dog training Palencia',
      'Ponte Vedra dog behaviorist',
    ],
    openGraph: {
      title: 'Board & Train Ponte Vedra & Nocatee | Axiom Canine',
      description:
        'Premium board and train programs serving Ponte Vedra, Nocatee, and St. Augustine. Reactivity and obedience training with owner education.',
    },
  },
  badge: { label: 'Ponte Vedra Beach, FL', accent: 'orange' },
  hero: {
    headingId: 'pv-hero-heading',
    headingBefore: 'Board & Train in Ponte Vedra & Nocatee – ',
    headingAccent: 'Professional Results',
    subtitle:
      'Professional behavior modification and obedience training for Ponte Vedra Beach, Ponte Vedra Isles, Palencia, and surrounding communities.',
  },
  local: {
    headingId: 'pv-local-heading',
    headingBefore: 'Training Built for',
    headingAccent: 'Ponte Vedra Life.',
    description:
      'From beach walks to golf course communities — your dog needs to navigate a unique environment.',
    features: [
      {
        icon: 'Waves',
        title: 'Beach & Waterfront',
        body: 'Ponte Vedra Beach access means dogs need off-leash reliability around waves, wildlife, and other beachgoers. We train for real-world beach scenarios.',
        accent: 'orange',
      },
      {
        icon: 'TreePine',
        title: 'Golf & Greenway Communities',
        body: 'Living in Sawgrass, Marsh Landing, or the Plantation means navigating golf carts, walkers, and water features. We train calm, controlled behavior in these environments.',
        accent: 'olive',
      },
      {
        icon: 'Home',
        title: 'Larger Properties',
        body: 'Ponte Vedra homes often have expansive yards and open spaces. We address boundary training, recall across larger properties, and proper guest greeting for estate-style living.',
        accent: 'orange',
      },
    ],
  },
  services: {
    headingId: 'pv-services-heading',
    heading: 'Training Services in Ponte Vedra',
    links: [
      {
        href: '/services/behavior-modification',
        title: 'Behavior Modification',
        description:
          'Address reactivity, aggression, anxiety, and resource guarding through science-based training.',
        hover: 'orange',
      },
      {
        href: '/services/advanced-obedience',
        title: 'Advanced Obedience',
        description: 'Off-leash reliability, bulletproof recall, and calm behavior in public spaces.',
        hover: 'olive',
      },
      {
        href: '/community',
        title: 'Axiom Cares',
        description:
          'Free in-home visits for newly adopted dogs in Ponte Vedra. No judgment, no pressure, no bill.',
        hover: 'orange',
      },
    ],
  },
  faqTitle: 'Ponte Vedra Dog Training FAQs',
  faqs: [
    {
      question: 'Do you offer training services in Ponte Vedra Beach?',
      answer:
        'Yes! Axiom Canine serves Ponte Vedra Beach, Ponte Vedra Isles, Palencia, and surrounding neighborhoods. We provide in-home training, board-and-train programs, and behavioral consultations throughout the Ponte Vedra area.',
    },
    {
      question: 'What makes Ponte Vedra dog training unique?',
      answer:
        'Ponte Vedra homes often have larger properties, beach access, and active outdoor lifestyles. We train dogs to handle off-leash reliability on the beach, proper etiquette around golfers and pedestrians on Ponte Vedra Blvd, and calm behavior in the upscale, high-activity environment.',
    },
    {
      question: 'How long does training typically take?',
      answer:
        "Behavior modification typically takes 4-12 weeks with consistent weekly sessions. Obedience training can take 6-8 weeks. We create customized plans during your free consultation based on your dog's specific needs and your goals.",
    },
    {
      question: 'Do you work with dogs from Ponte Vedra country clubs and golf communities?',
      answer:
        'Absolutely. We understand the unique challenges of training dogs in golf course communities and country club settings — from proper leash etiquette around golfers to managing prey drive near water features. We tailor our approach to your lifestyle.',
    },
    {
      question: 'Do you offer free rescue support in Ponte Vedra?',
      answer:
        'Yes! Our Axiom Cares program provides free in-home visits for newly adopted or rescued dogs in the Ponte Vedra area. No judgment, no pressure, no bill.',
    },
  ],
  cta: {
    headingId: 'pv-cta-heading',
    headingBefore: 'Ready to Transform Your Dog?',
    description:
      'Schedule your free consultation today. Serving Ponte Vedra Beach and surrounding communities.',
  },
};
