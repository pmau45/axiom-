import type { LocationPageData } from './types';

export const jacksonville: LocationPageData = {
  slug: 'jacksonville',
  schemaName: 'Jacksonville, FL',
  breadcrumbLabel: 'Dog Training in Jacksonville, FL',
  schemaDescription:
    'Professional dog training in Jacksonville, FL. Behavior modification, advanced obedience, and free rescue support.',
  metadata: {
    title: 'Dog Training in Jacksonville, FL | Axiom Canine',
    description:
      'Professional dog training in Jacksonville, FL. Behavior modification, advanced obedience, and free rescue support. Serving Riverside, San Marco, Mandarin, Jax Beach & all of Northeast Florida. Call (904) 458-7561.',
    keywords: [
      'dog training Jacksonville FL',
      'dog trainer Jacksonville',
      'behavior modification Jacksonville',
      'advanced obedience Jacksonville',
      'dog training Riverside Jacksonville',
      'dog trainer San Marco',
      'dog training Mandarin FL',
      'Jacksonville Beach dog trainer',
      'reactive dog training Jacksonville',
      'aggressive dog training Jacksonville',
    ],
    openGraph: {
      title: 'Dog Training in Jacksonville, FL | Axiom Canine',
      description:
        'Professional dog training serving all of Jacksonville and Northeast Florida. Structure. Consistency. Results.',
    },
  },
  badge: { label: 'Jacksonville, FL & Northeast Florida', accent: 'orange' },
  hero: {
    headingId: 'jax-hero-heading',
    headingBefore: 'Before You Give Up ',
    headingAccent: 'On Your Dog.',
    subtitle:
      'Most dog owners in Jacksonville reach out when they are at their breaking point. Reactivity. Aggression. Failed obedience classes. Before you rehome, surrender, or give up — there is another option.',
    subtitleHighlights: [
      { match: 'there is another option.', className: 'text-white font-medium' },
    ],
    subtext:
      'We help Jacksonville dog owners build real-world obedience through structure, consistency, and clear communication.',
    size: 'large',
    showPhoneIcon: true,
  },
  mission: {
    eyebrow: 'Our Mission',
    headingBefore: 'Keeping Dogs',
    headingAccent: 'In Their Homes.',
    paragraphs: [
      {
        text: 'Too many dogs are surrendered, rehomed, or euthanized because of behavioral issues that could have been resolved with the right guidance.',
        highlights: [
          { match: 'could have been resolved', className: 'text-[#FF5E00] font-medium' },
        ],
      },
      {
        text: 'In Jacksonville and across Northeast Florida, we work with families who feel like they have tried everything. Owners dealing with leash reactivity on the Riverside sidewalks. Families managing aggression in Mandarin. New adopters in San Marco struggling with adjustment. We have been there, and we can help.',
      },
      {
        text: 'Through our Axiom Cares program, we even provide free in-home support for newly adopted and rescued dogs. No judgment. No pressure. No bill. Just help.',
        highlights: [
          { match: 'Axiom Cares', className: 'text-[#7A8B66] font-medium' },
          { match: 'free in-home support', className: 'text-white' },
        ],
      },
    ],
  },
  neighborhoods: {
    eyebrow: 'Service Area',
    headingBefore: 'Serving',
    headingAccent: 'All of Jacksonville',
    description:
      'From the historic streets of Springfield to the beaches of Atlantic Beach — we come to you.',
    areas: [
      'Riverside',
      'San Marco',
      'Mandarin',
      'Jacksonville Beach',
      'Atlantic Beach',
      'Neptune Beach',
      'Avondale',
      'Ortega',
      'Southside',
      'Deerwood',
      'Baymeadows',
      'Arlington',
      'Springfield',
      'Murray Hill',
      'Westside',
    ],
  },
  relatedLocations: [
    {
      href: '/jacksonville-beach',
      title: 'Jacksonville Beach',
      description: 'Dog training for Jax Beach, Atlantic Beach & Neptune Beach',
    },
    {
      href: '/ponte-vedra',
      title: 'Ponte Vedra Beach',
      description: 'Dog training in Ponte Vedra & surrounding areas',
    },
    {
      href: '/nocatee',
      title: 'Nocatee',
      description: 'Dog training in Nocatee & surrounding communities',
    },
    {
      href: '/orange-park',
      title: 'Orange Park',
      description: 'Dog training in Orange Park & Clay County',
    },
    {
      href: '/st-augustine',
      title: 'St. Augustine',
      description: 'Dog training in St. Augustine & historic district',
    },
    {
      href: '/fernandina-beach',
      title: 'Fernandina Beach',
      description: 'Dog training on Amelia Island & Nassau County',
    },
    {
      href: '/palm-coast',
      title: 'Palm Coast',
      description: 'Dog training in Palm Coast & Flagler County',
    },
    {
      href: '/brunswick-ga',
      title: 'Brunswick, GA',
      description: 'Dog training across the state line in Coastal Georgia',
    },
  ],
  services: {
    headingId: 'jax-services-heading',
    heading: 'Real Training for',
    headingAccent: 'Real Problems.',
    style: 'featured',
    showAllServicesLink: true,
    intro: [
      {
        text: 'Every dog is different. Every problem has a root. We offer programs designed to address what is actually going on — matched to the dog, the behavior, and your lifestyle.',
      },
    ],
    links: [
      {
        href: '/services/behavior-modification',
        title: 'Behavior Modification',
        description:
          'Reactivity, aggression, resource guarding, and anxiety. We rehabilitate the dogs other trainers turn away by addressing the root cause — not just masking symptoms.',
        hover: 'orange',
        icon: 'Shield',
        ctaLabel: 'Learn More →',
      },
      {
        href: '/services/advanced-obedience',
        title: 'Advanced Obedience',
        description:
          'Bulletproof recall, off-leash reliability, and public neutrality. A dog that only listens at home is not trained. We build obedience that holds up at Jacksonville Beach and Riverside Park.',
        hover: 'olive',
        icon: 'ArrowRight',
        ctaLabel: 'Learn More →',
      },
      {
        href: '/community',
        title: 'Axiom Cares',
        description:
          'Free in-home visits for newly adopted and rescued dogs in Jacksonville. No judgment, no pressure, no bill. Because every dog deserves a chance — and every owner deserves support.',
        hover: 'orange',
        icon: 'Heart',
        ctaLabel: 'Learn More →',
      },
    ],
  },
  whyChoose: {
    headingBefore: 'Why Jacksonville Owners',
    headingAccent: 'Choose Axiom',
    items: [
      {
        title: 'Owner-First Approach',
        body: 'We do not just train the dog. We teach the owner. Lasting obedience requires clear communication from the person holding the leash.',
      },
      {
        title: 'Real-World Results',
        body: 'Training that works at Riverside Park, not just in your living room. Off-leash reliability where it actually matters.',
      },
      {
        title: 'Honest Assessment',
        body: 'We do not promise miracles. We promise honest evaluation, clear structure, and a realistic path to improvement.',
      },
      {
        title: 'Free Rescue Support',
        body: 'Axiom Cares provides free in-home visits for newly adopted dogs in Jacksonville. No judgment, no pressure, no bill.',
      },
    ],
  },
  faqTitle: 'Jacksonville Dog Training FAQs',
  faqs: [
    {
      question: 'Do you offer in-home dog training in Jacksonville?',
      answer:
        'Yes. We come to your home in Jacksonville and surrounding areas. In-home training is often the most effective approach because your dog learns in their actual environment — where they spend most of their time and where problem behaviors occur.',
    },
    {
      question: 'What areas of Jacksonville do you serve?',
      answer:
        'We serve all of Jacksonville including Riverside, San Marco, Mandarin, Jacksonville Beach, Atlantic Beach, Neptune Beach, Avondale, Ortega, Southside, Deerwood, Baymeadows, Arlington, Springfield, Murray Hill, and the Westside. We also travel to Ponte Vedra, Nocatee, St. Augustine, Palm Coast, and Brunswick, GA.',
    },
    {
      question: 'How much does dog training cost in Jacksonville?',
      answer:
        'Every dog is different, so we customize our approach. During your free consultation, we evaluate your dog and recommend the right program. We offer in-home training, board-and-train programs, and group classes to fit different budgets and needs.',
    },
    {
      question: 'Do you work with aggressive or reactive dogs?',
      answer:
        'Yes. Behavior modification is one of our specialties. We work with reactivity, aggression, resource guarding, and anxiety. We do not promise "cures" — we promise honest assessment, clear structure, and a path to improvement. If a case is beyond our scope, we refer to veterinary behaviorists.',
    },
    {
      question: 'What makes Axiom Canine different from other Jacksonville dog trainers?',
      answer:
        'We do not just train the dog — we teach the owner. Lasting obedience requires clear communication from the person holding the leash. We use science-based, balanced methods and focus on real-world reliability, not just living room obedience. Plus, our Axiom Cares program provides free support for rescues and newly adopted dogs.',
    },
    {
      question: 'Do you offer free rescue support in Jacksonville?',
      answer:
        'Absolutely. Through Axiom Cares, we provide free in-home visits for newly adopted or rescued dogs in the Jacksonville area. No judgment, no pressure, no bill. We help with adjustment, basic training, and behavior assessment so your new family member gets the best start.',
    },
  ],
  cta: {
    headingId: 'jax-cta-heading',
    headingBefore: 'Your Dog Is Worth ',
    headingAccent: 'Another Try.',
    description:
      'Before you rehome, surrender, or give up — reach out. Most behavioral issues are solvable with the right structure and guidance. We serve all of Jacksonville and Northeast Florida.',
    note: 'Free consultation • No obligation • Serving Jacksonville, FL',
    buttonLabel: 'Start Free Consultation',
  },
};
