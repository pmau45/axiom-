import type { LocationPageData } from './types';

export const jacksonvilleBeach: LocationPageData = {
  slug: 'jacksonville-beach',
  schemaName: 'Jacksonville Beach, FL',
  breadcrumbLabel: 'Dog Training in Jacksonville Beach, FL',
  schemaDescription:
    'Dog training in Jacksonville Beach, FL — leash manners, beach reliability, and behavior modification for beachside households.',
  metadata: {
    title: 'Dog Training in Jacksonville Beach, FL | Axiom Canine',
    description:
      'Dog training for Jacksonville Beach, Atlantic Beach, and Neptune Beach. Leash manners, beach etiquette, reactivity, and obedience. Call (904) 458-7561.',
    keywords: [
      'dog training Jacksonville Beach',
      'dog trainer Jax Beach',
      'beach dog training Jacksonville FL',
      'reactive dog training Atlantic Beach',
      'leash training Neptune Beach',
    ],
    openGraph: {
      title: 'Dog Training in Jacksonville Beach, FL | Axiom Canine',
      description: 'Professional dog training for the Beaches communities.',
    },
  },
  badge: { label: 'Jacksonville Beach, FL', accent: 'orange' },
  hero: {
    headingId: 'jb-hero-heading',
    headingBefore: 'Dog Training at ',
    headingAccent: 'Jax Beach.',
    subtitle:
      'Beach crowds, seasonal rules, and constant distractions. We train dogs for real coastal life — not just quiet living-room obedience.',
  },
  local: {
    headingId: 'jb-local-heading',
    headingBefore: 'Training for',
    headingAccent: 'Beaches Life.',
    description:
      'Jacksonville Beach, Atlantic Beach, and Neptune Beach ask more of your dog than a suburban sidewalk.',
    features: [
      {
        icon: 'Waves',
        title: 'Beach Access',
        body: 'Seasonal time rules, leashes, and crowded sand. We train reliable manners before a citation or conflict ruins the outing.',
        accent: 'orange',
      },
      {
        icon: 'Users',
        title: 'Crowds & Noise',
        body: 'Boardwalks, restaurants, bikes, and tourists. Public neutrality is the difference between a calm walk and a constant fight.',
        accent: 'olive',
      },
      {
        icon: 'Dog',
        title: 'Dog Density',
        body: 'More dogs per block means more reactivity triggers. We address leash manners and threshold control where it actually fails.',
        accent: 'orange',
      },
    ],
  },
  services: {
    headingId: 'jb-services-heading',
    heading: 'Training Services at the Beaches',
    links: [
      {
        href: '/training-issues/leash-pulling',
        title: 'Leash Manners',
        description: 'Stop being dragged down Beach Blvd and the boardwalk.',
        hover: 'orange',
      },
      {
        href: '/training-issues/reactive-dog',
        title: 'Reactive Dogs',
        description: 'Address lunging and barking around coastal dog traffic.',
        hover: 'orange',
      },
      {
        href: '/blog/beach-etiquette-ponte-vedra-jacksonville-beach-dogs',
        title: 'Beach Etiquette Guide',
        description: 'Local rules for Jacksonville Beach and Ponte Vedra owners.',
        hover: 'orange',
        ctaLabel: 'Read more →',
      },
    ],
  },
  faqTitle: 'Jacksonville Beach Dog Training FAQs',
  faqs: [
    {
      question: 'Do you train dogs in Jacksonville Beach?',
      answer:
        'Yes. We serve Jacksonville Beach, Atlantic Beach, Neptune Beach, and nearby coastal neighborhoods with in-home training, behavior modification, and board & train options.',
    },
    {
      question: 'Can you help with beach leash rules and manners?',
      answer:
        'Absolutely. Seasonal beach rules, crowded boardwalks, and high distraction environments require reliable leash skills and calm public behavior. We train for those exact conditions.',
    },
    {
      question: 'Do you work with reactive dogs at the Beaches?',
      answer:
        'Yes. Coastal walks are full of triggers — other dogs, bikes, skateboards, and crowds. We build structured plans for leash reactivity and public neutrality.',
    },
    {
      question: 'Is Axiom Cares available at the Beaches?',
      answer:
        'Yes. Newly adopted dogs in the Beaches area can receive a free Axiom Cares in-home visit.',
    },
  ],
  cta: {
    headingId: 'jb-cta-heading',
    headingBefore: 'Train for the Coast You Live On.',
    description: 'Free consultation for Jacksonville Beach, Atlantic Beach, and Neptune Beach.',
  },
};
