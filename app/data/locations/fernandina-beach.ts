import type { LocationPageData } from './types';

export const fernandinaBeach: LocationPageData = {
  slug: 'fernandina-beach',
  schemaName: 'Fernandina Beach, FL',
  breadcrumbLabel: 'Dog Training in Fernandina Beach, FL',
  schemaDescription:
    'Dog training in Fernandina Beach, FL — leash manners, beach etiquette, and behavior help for Amelia Island owners.',
  metadata: {
    title: 'Dog Training in Fernandina Beach, FL | Axiom Canine',
    description:
      'Dog training serving Fernandina Beach, Amelia Island, and Nassau County. Behavior modification, obedience, puppy training, and free rescue support. Call (904) 458-7561.',
    keywords: [
      'dog training Fernandina Beach',
      'dog trainer Amelia Island',
      'dog training Nassau County FL',
      'puppy training Fernandina Beach',
      'behavior modification Amelia Island',
    ],
    openGraph: {
      title: 'Dog Training in Fernandina Beach, FL | Axiom Canine',
      description: 'Professional dog training for Fernandina Beach and Amelia Island.',
    },
  },
  badge: { label: 'Fernandina Beach, FL', accent: 'orange' },
  hero: {
    headingId: 'fb-hero-heading',
    headingBefore: 'Dog Training on ',
    headingAccent: 'Amelia Island.',
    subtitle:
      'Professional training for Fernandina Beach, Amelia Island, and Nassau County — structure that holds on beaches, trails, and historic downtown streets.',
  },
  local: {
    headingId: 'fb-local-heading',
    headingBefore: 'Built for',
    headingAccent: 'Nassau County.',
    description: 'Island wildlife, beach access, and visitor traffic create a unique training environment.',
    features: [
      {
        icon: 'Anchor',
        title: 'Coastal Living',
        body: 'Beach walks and waterfront distractions require reliable leash skills and calm focus around people and dogs.',
        accent: 'orange',
      },
      {
        icon: 'Trees',
        title: 'Wildlife & Trails',
        body: 'Prey drive and scent overload are common on island trails. We train engagement and recall under real distraction.',
        accent: 'olive',
      },
      {
        icon: 'Home',
        title: 'Quiet Neighborhoods',
        body: 'Even quieter streets need guest manners, fence-line neutrality, and alone-time structure for working households.',
        accent: 'orange',
      },
    ],
  },
  services: {
    headingId: 'fb-services-heading',
    heading: 'Training Services in Fernandina Beach',
    links: [
      {
        href: '/services/advanced-obedience',
        title: 'Advanced Obedience',
        description: 'Recall, place, and public manners for island life.',
        hover: 'orange',
      },
      {
        href: '/services/behavior-modification',
        title: 'Behavior Modification',
        description: 'Reactivity, anxiety, and guarding addressed with structure.',
        hover: 'orange',
      },
      {
        href: '/community',
        title: 'Axiom Cares',
        description: 'Free rescue support for Nassau County adoptions.',
        hover: 'orange',
      },
    ],
  },
  faqTitle: 'Fernandina Beach Dog Training FAQs',
  faqs: [
    {
      question: 'Do you offer dog training in Fernandina Beach and Amelia Island?',
      answer:
        'Yes. Axiom Canine serves Fernandina Beach, Amelia Island, Yulee, and Nassau County with in-home training, board & train, and behavior consultations.',
    },
    {
      question: 'What makes training on Amelia Island different?',
      answer:
        'Island life means beach access, wildlife, golf carts, tourists, and quieter residential streets that still demand reliable recall and leash manners. We train for those real environments.',
    },
    {
      question: 'Can you help newly adopted dogs in Nassau County?',
      answer:
        'Yes. Axiom Cares offers free in-home visits for rescue and adoption adjustment in the Fernandina Beach area.',
    },
    {
      question: 'How do I book an assessment?',
      answer:
        'Submit the free intake form or call (904) 458-7561. We will follow up within 24 hours.',
    },
  ],
  cta: {
    headingId: 'fb-cta-heading',
    headingBefore: 'Serving Fernandina & Amelia Island',
    description: 'Schedule your free consultation today.',
  },
};
