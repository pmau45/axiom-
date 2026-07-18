import type { LocationPageData } from './types';

export const palmCoast: LocationPageData = {
  slug: 'palm-coast',
  schemaName: 'Palm Coast, FL',
  breadcrumbLabel: 'Dog Training in Palm Coast, FL',
  schemaDescription:
    'Dog training in Palm Coast, FL — obedience, reactivity help, and structured training for Flagler County dogs.',
  metadata: {
    title: 'Dog Training in Palm Coast, FL | Axiom Canine',
    description:
      'Professional dog training serving Palm Coast and Flagler County. Behavior modification, obedience training, and free rescue support. Call (904) 458-7561.',
    keywords: [
      'dog training Palm Coast',
      'dog trainer Palm Coast FL',
      'behavior modification Palm Coast',
      'obedience training Flagler County',
      'dog training Flagler Beach',
      'Palm Coast dog behaviorist',
    ],
    openGraph: {
      title: 'Dog Training in Palm Coast, FL | Axiom Canine',
      description: 'Professional dog training serving Palm Coast and Flagler County.',
    },
  },
  badge: { label: 'Palm Coast, FL', accent: 'orange' },
  hero: {
    headingId: 'pc-hero-heading',
    headingBefore: 'Dog Training in ',
    headingAccent: 'Palm Coast.',
    subtitle:
      'Professional behavior modification and obedience training for Palm Coast and Flagler County — from the beach to the trails.',
  },
  local: {
    headingId: 'pc-local-heading',
    headingBefore: 'Built for',
    headingAccent: 'Palm Coast Living.',
    description:
      'From Flagler Beach to Washington Oaks — your dog should enjoy everything the Florida coast has to offer.',
    features: [
      {
        icon: 'Waves',
        title: 'Flagler Beach & Coast',
        body: 'Flagler Beach offers miles of drivable beach and surf. We train dogs for off-leash reliability near water, controlled behavior around beach traffic, and recall from surf and shorebirds.',
        accent: 'orange',
      },
      {
        icon: 'Trees',
        title: 'Nature Preserves & Trails',
        body: 'Washington Oaks Gardens and Graham Swamp are incredible — but full of wildlife distractions. We train trail manners, wildlife desensitization, and reliable recall in natural settings.',
        accent: 'olive',
      },
      {
        icon: 'Sun',
        title: 'Suburban & Golf Communities',
        body: "Palm Coast's planned communities and golf courses require dogs who respect boundaries, greet calmly, and maintain control around golfers and pedestrians.",
        accent: 'orange',
      },
    ],
  },
  services: {
    headingId: 'pc-services-heading',
    heading: 'Training Services in Palm Coast',
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
        description: 'Off-leash reliability for beach walks, trail adventures, and community living.',
        hover: 'olive',
      },
      {
        href: '/community',
        title: 'Axiom Cares',
        description:
          'Free in-home visits for newly adopted dogs in Palm Coast. No judgment, no pressure, no bill.',
        hover: 'orange',
      },
    ],
  },
  faqTitle: 'Palm Coast Dog Training FAQs',
  faqs: [
    {
      question: 'Do you offer training services in Palm Coast?',
      answer:
        'Yes! Axiom Canine serves Palm Coast, Flagler Beach, Bunnell, and all of Flagler County. We provide in-home training, board-and-train programs, and behavioral consultations throughout the area.',
    },
    {
      question: 'What makes Palm Coast dog training unique?',
      answer:
        'Palm Coast offers a unique blend of coastal living and inland nature preserves. With miles of trails at Washington Oaks Gardens, Flagler Beach access, and the Intracoastal Waterway, dogs here need off-leash reliability and wildlife control.',
    },
    {
      question: 'Do you train dogs for Washington Oaks Gardens and local trails?',
      answer:
        'Absolutely. Palm Coast has incredible natural spaces like Washington Oaks Gardens State Park and the Graham Swamp Conservation Area. We train reliable recall, trail etiquette, and wildlife desensitization for these environments.',
    },
    {
      question: 'How long does training typically take?',
      answer:
        'Behavior modification typically takes 4-12 weeks with consistent weekly sessions. Obedience training can take 6-8 weeks. We create customized plans during your free consultation.',
    },
    {
      question: 'Do you offer free rescue support in Palm Coast?',
      answer:
        'Yes! Our Axiom Cares program provides free in-home visits for newly adopted or rescued dogs in the Palm Coast area. No judgment, no pressure, no bill.',
    },
  ],
  cta: {
    headingId: 'pc-cta-heading',
    headingBefore: 'Ready to Transform Your Dog?',
    description: 'Schedule your free consultation today. Serving Palm Coast and Flagler County.',
  },
};
