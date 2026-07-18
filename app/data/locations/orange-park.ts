import type { LocationPageData } from './types';

export const orangePark: LocationPageData = {
  slug: 'orange-park',
  schemaName: 'Orange Park, FL',
  breadcrumbLabel: 'Dog Training in Orange Park, FL',
  schemaDescription:
    'Dog training in Orange Park, FL — behavior modification, obedience, and in-home training for Clay County owners.',
  metadata: {
    title: 'Dog Training in Orange Park, FL | Axiom Canine',
    description:
      'Professional dog training in Orange Park and Clay County. Behavior modification, puppy training, board & train, and free rescue support. Call (904) 458-7561.',
    keywords: [
      'dog training Orange Park',
      'dog trainer Orange Park FL',
      'behavior modification Clay County',
      'puppy training Orange Park',
      'board and train Orange Park FL',
    ],
    openGraph: {
      title: 'Dog Training in Orange Park, FL | Axiom Canine',
      description: 'Professional dog training serving Orange Park and Clay County.',
    },
  },
  badge: { label: 'Orange Park, FL', accent: 'orange' },
  hero: {
    headingId: 'op-hero-heading',
    headingBefore: 'Dog Training in ',
    headingAccent: 'Orange Park.',
    subtitle:
      'Structure-first training for Orange Park, Fleming Island, and Clay County homes — from puppy manners to reactivity and board & train.',
  },
  local: {
    headingId: 'op-local-heading',
    headingBefore: 'Built for',
    headingAccent: 'Clay County Life.',
    description:
      'Busy roads, family neighborhoods, and park walks demand reliable leash skills and calm public manners.',
    features: [
      {
        icon: 'Home',
        title: 'Family Households',
        body: 'Kids, guests, and busy evenings. We train greetings, place work, and household rules that hold when life gets loud.',
        accent: 'orange',
      },
      {
        icon: 'Car',
        title: 'Busy Corridors',
        body: 'Blanding, US-17, and neighborhood cut-throughs create constant distractions. Loose-leash and neutrality matter here.',
        accent: 'olive',
      },
      {
        icon: 'Trees',
        title: 'Parks & Trails',
        body: 'From neighborhood green spaces to Fleming Island walks — we train for real outdoor environments, not just living-room sits.',
        accent: 'orange',
      },
    ],
  },
  services: {
    headingId: 'op-services-heading',
    heading: 'Training Services in Orange Park',
    links: [
      {
        href: '/services/puppy-training',
        title: 'Puppy Training',
        description: 'Foundations before adolescence turns small problems into big ones.',
        hover: 'orange',
      },
      {
        href: '/services/behavior-modification',
        title: 'Behavior Modification',
        description: 'Reactivity, guarding, and aggression addressed at the root.',
        hover: 'orange',
      },
      {
        href: '/community',
        title: 'Axiom Cares',
        description: 'Free rescue and adoption adjustment support in Clay County.',
        hover: 'orange',
      },
    ],
  },
  faqTitle: 'Orange Park Dog Training FAQs',
  faqs: [
    {
      question: 'Do you offer dog training in Orange Park?',
      answer:
        'Yes. Axiom Canine serves Orange Park, Fleming Island, Middleburg, Green Cove Springs, and surrounding Clay County neighborhoods with in-home training, board & train, and behavior consultations.',
    },
    {
      question: 'What training issues are common in Orange Park?',
      answer:
        'Leash manners on busy corridors, reactivity around neighborhood dogs, puppy foundations in family homes, and alone-time issues for working households are common. We build plans around your actual streets and schedule.',
    },
    {
      question: 'Do you offer free rescue support in Orange Park?',
      answer:
        'Yes. Axiom Cares provides free in-home visits for newly adopted or rescued dogs in Orange Park and Clay County. No judgment, no pressure, no bill.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Request a free assessment online or call (904) 458-7561. We respond within 24 hours with next steps based on your dog’s behavior and goals.',
    },
  ],
  cta: {
    headingId: 'op-cta-heading',
    headingBefore: 'Ready to Train in Orange Park?',
    description: 'Free consultation for Orange Park and Clay County dog owners.',
  },
};
