import type { LocationPageData } from './types';

export const brunswickGa: LocationPageData = {
  slug: 'brunswick-ga',
  schemaName: 'Brunswick, GA',
  breadcrumbLabel: 'Dog Training in Brunswick, GA',
  schemaDescription:
    'Dog training in Brunswick, GA — behavior modification and obedience for Glynn County and Golden Isles owners.',
  metadata: {
    title: 'Dog Training in Brunswick, GA | Axiom Canine',
    description:
      'Professional dog training serving Brunswick, GA and Coastal Georgia. Behavior modification, obedience training, and free rescue support. Call (904) 458-7561.',
    keywords: [
      'dog training Brunswick GA',
      'dog trainer Brunswick Georgia',
      'behavior modification Brunswick GA',
      'obedience training Coastal Georgia',
      'dog training St. Simons Island',
      'dog trainer Jekyll Island',
      'Golden Isles dog training',
    ],
    openGraph: {
      title: 'Dog Training in Brunswick, GA | Axiom Canine',
      description: 'Professional dog training serving Brunswick, GA and Coastal Georgia.',
    },
  },
  badge: { label: 'Brunswick, GA & Coastal Georgia', accent: 'olive' },
  hero: {
    headingId: 'brunswick-hero-heading',
    headingBefore: 'Dog Training in ',
    headingAccent: 'Brunswick, GA.',
    subtitle:
      'Professional behavior modification and obedience training for Coastal Georgia — Brunswick, St. Simons, Jekyll Island, and the Golden Isles.',
  },
  local: {
    headingId: 'brunswick-local-heading',
    headingBefore: 'Training for',
    headingAccent: 'Coastal Georgia Life.',
    description:
      'From marsh walks to island hopping — your dog needs to handle the unique challenges of the Golden Isles.',
    features: [
      {
        icon: 'Shell',
        title: 'Island Beach Access',
        body: 'St. Simons and Jekyll Island beaches are incredible — but require off-leash reliability around shorebirds, surf, and other beachgoers. We train for safe, controlled coastal freedom.',
        accent: 'olive',
      },
      {
        icon: 'Anchor',
        title: 'Marina & Boat Manners',
        body: 'Coastal Georgia life means boats. We train dogs to board calmly, stay controlled on deck, and handle marina stimuli — from dock lines to other boat dogs.',
        accent: 'orange',
      },
      {
        icon: 'Sailboat',
        title: 'Marsh & Wildlife Control',
        body: 'The Georgia marshes are full of wildlife — herons, dolphins, deer. We train recall and control around these natural distractions so you can enjoy coastal walks safely.',
        accent: 'olive',
      },
    ],
  },
  services: {
    headingId: 'brunswick-services-heading',
    heading: 'Training Services in Coastal Georgia',
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
        description: 'Off-leash reliability for beach adventures, marina visits, and coastal walks.',
        hover: 'olive',
      },
      {
        href: '/community',
        title: 'Axiom Cares',
        description:
          'Free in-home visits for newly adopted dogs in Brunswick and the Golden Isles. No judgment, no pressure, no bill.',
        hover: 'orange',
      },
    ],
  },
  faqTitle: 'Brunswick, GA Dog Training FAQs',
  faqs: [
    {
      question: 'Do you offer training services in Brunswick, GA?',
      answer:
        'Yes! Axiom Canine serves Brunswick, St. Simons Island, Jekyll Island, Sea Island, and all of Glynn County. We travel across the state line to provide in-home training, board-and-train programs, and behavioral consultations.',
    },
    {
      question: 'What makes Coastal Georgia dog training unique?',
      answer:
        'The Golden Isles present unique challenges — marsh wildlife, boat culture, island tourism, and beach access across multiple islands. We train dogs for off-leash reliability on the beach, calm behavior on boats, and control around coastal wildlife.',
    },
    {
      question: 'Do you train dogs for boat and marina behavior?',
      answer:
        'Absolutely. Coastal Georgia life often involves boats, marinas, and waterfront dining. We train dogs to board calmly, remain controlled on deck, and handle the unique stimuli of marina environments.',
    },
    {
      question: 'How far do you travel into Georgia?',
      answer:
        'We regularly serve Brunswick, St. Simons Island, Jekyll Island, and Sea Island. For areas further north or inland, contact us to discuss availability. We aim to help as many Coastal Georgia dog owners as possible.',
    },
    {
      question: 'Do you offer free rescue support in Brunswick?',
      answer:
        'Yes! Our Axiom Cares program provides free in-home visits for newly adopted or rescued dogs in the Brunswick and Golden Isles area. No judgment, no pressure, no bill.',
    },
  ],
  cta: {
    headingId: 'brunswick-cta-heading',
    headingBefore: 'Ready to Transform Your Dog?',
    description: 'Schedule your free consultation today. Serving Brunswick, GA and the Golden Isles.',
  },
};
