import type { LocationPageData } from './types';

export const stAugustine: LocationPageData = {
  slug: 'st-augustine',
  schemaName: 'St. Augustine, FL',
  breadcrumbLabel: 'Dog Training in St. Augustine, FL',
  schemaDescription:
    'Dog training in St. Augustine, FL — behavior modification, obedience, and board and train for historic-coast owners.',
  metadata: {
    title: 'Dog Training in St. Augustine, FL | Axiom Canine',
    description:
      "Professional dog training serving St. Augustine and the historic district. Behavior modification and obedience training for Florida's oldest city — from downtown distractions to beach reliability. Call (904) 458-7561.",
    keywords: [
      'dog training St. Augustine',
      'dog trainer St. Augustine FL',
      'behavior modification St. Augustine',
      'obedience training St. Augustine',
      'historic district dog training',
      'St. Augustine Beach dog trainer',
    ],
    openGraph: {
      title: 'Dog Training in St. Augustine, FL | Axiom Canine',
      description: 'Professional dog training serving St. Augustine and the historic district.',
    },
  },
  badge: { label: 'St. Augustine, FL', accent: 'orange' },
  hero: {
    headingId: 'staug-hero-heading',
    headingBefore: 'Dog Training in ',
    headingAccent: 'St. Augustine.',
    subtitle:
      "Professional behavior modification and obedience training for Florida's oldest city — from the historic district to the beach.",
  },
  local: {
    headingId: 'staug-local-heading',
    headingBefore: 'Training for',
    headingAccent: "The Nation's Oldest City.",
    description:
      'From the Historic District and St. George Street to Anastasia Island, St. Augustine Beach, Vilano Beach, and World Golf Village, St. Augustine requires a dog that can handle changing environments with composure.',
    features: [
      {
        icon: 'Landmark',
        title: 'Historic District Distracted',
        body: 'St. George Street, the Historic District, and the narrow downtown blocks mean crowds, horse-drawn carriages, street performers, and constant stimulation. We train calm, controlled behavior for dogs that struggle with reactive outbursts amid downtown chaos.',
        accent: 'orange',
      },
      {
        icon: 'Palmtree',
        title: 'Beach & Waterfront Control',
        body: 'Anastasia Island, St. Augustine Beach, Vilano Beach, and the Intracoastal offer endless distractions. We build off-leash reliability and water safety for coastal living.',
        accent: 'olive',
      },
      {
        icon: 'Camera',
        title: 'Outdoor Dining & Tourism',
        body: "From the restaurants near the Plaza to the neighborhoods around World Golf Village, St. Augustine's tourism economy means dogs must behave around outdoor diners, tour groups, and constant foot traffic. We train public neutrality.",
        accent: 'orange',
      },
    ],
  },
  services: {
    headingId: 'staug-services-heading',
    heading: 'Training Services in St. Augustine',
    intro: [
      {
        text: 'If your dog is struggling with crowded sidewalks, visitor-heavy public spaces, or beachside overstimulation, our ',
      },
      { text: 'behavior modification services', href: '/services/behavior-modification' },
      { text: ' can address the root cause. We also help owners working through ' },
      { text: 'reactive dog behavior', href: '/training-issues/reactive-dog' },
      { text: ' and more serious ' },
      { text: 'aggression issues', href: '/training-issues/aggression' },
      {
        text: ' that show up around tourists, other dogs, and high-pressure environments in St. Augustine.',
      },
    ],
    links: [
      {
        href: '/services/behavior-modification',
        title: 'Behavior Modification',
        description:
          "Address reactivity, aggression, and anxiety in St. Augustine's high-distraction environment.",
        hover: 'orange',
      },
      {
        href: '/services/advanced-obedience',
        title: 'Advanced Obedience',
        description: 'Off-leash reliability for beach walks, downtown strolls, and outdoor dining.',
        hover: 'olive',
      },
      {
        href: '/community',
        title: 'Axiom Cares',
        description:
          'Free in-home visits for newly adopted dogs in St. Augustine. No judgment, no pressure, no bill.',
        hover: 'orange',
      },
    ],
  },
  faqTitle: 'St. Augustine Dog Training FAQs',
  faqs: [
    {
      question: 'Do you offer training services in St. Augustine?',
      answer:
        'Yes! Axiom Canine serves all of St. Augustine including the historic district, St. Augustine Beach, Vilano Beach, and World Golf Village. We provide in-home training, board-and-train programs, and behavioral consultations throughout the area.',
    },
    {
      question: 'What makes St. Augustine dog training unique?',
      answer:
        'St. Augustine presents unique challenges — heavy tourist foot traffic in the historic district, horse-drawn carriages, outdoor dining, and beach access. We train dogs to remain calm and controlled amid these specific distractions.',
    },
    {
      question: 'Can you help with dog reactivity on St. George Street?',
      answer:
        'Absolutely. The narrow, crowded streets of downtown St. Augustine are a major trigger for reactive dogs. We work on desensitization to crowds, noise, and movement in these high-stimulation environments.',
    },
    {
      question: 'How long does training typically take?',
      answer:
        'Behavior modification typically takes 4-12 weeks with consistent weekly sessions. Obedience training can take 6-8 weeks. We create customized plans during your free consultation.',
    },
    {
      question: 'Do you offer free rescue support in St. Augustine?',
      answer:
        'Yes! Our Axiom Cares program provides free in-home visits for newly adopted or rescued dogs in the St. Augustine area. No judgment, no pressure, no bill.',
    },
  ],
  cta: {
    headingId: 'staug-cta-heading',
    headingBefore: 'Ready to Transform Your Dog?',
    description: 'Schedule your free consultation today. Serving St. Augustine and surrounding areas.',
  },
};
