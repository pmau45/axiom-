import type { LocationPageData } from './types';

export const jacksonvilleBeach: LocationPageData = {
  slug: 'jacksonville-beach',
  schemaName: 'Jacksonville Beach, FL',
  breadcrumbLabel: 'Dog Training in Jacksonville Beach, FL',
  schemaDescription:
    'Dog training in Jacksonville Beach, FL — leash manners, beach reliability, and behavior modification for beachside households.',
  metadata: {
    title: 'Dog Training in Jacksonville Beach, FL',
    description:
      'Dog training in Jacksonville Beach, FL for leash manners, beach etiquette, and reactivity. Serving Jax Beach, Atlantic Beach, and Neptune Beach. Free consult.',
    keywords: [
      'dog training Jacksonville Beach',
      'dog trainer Jax Beach',
      'beach dog training Jacksonville FL',
      'reactive dog training Atlantic Beach',
      'leash training Neptune Beach',
    ],
    openGraph: {
      title: 'Dog Training in Jacksonville Beach, FL | Axiom Canine',
      description:
        'Dog training in Jacksonville Beach — leash manners, beach etiquette, and reactivity help for the Beaches.',
    },
  },
  badge: { label: 'Jacksonville Beach, FL', accent: 'orange' },
  hero: {
    headingId: 'jb-hero-heading',
    headingBefore: 'Dog Training in ',
    headingAccent: 'Jacksonville Beach.',
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
  about: {
    headingId: 'jb-about-heading',
    headingBefore: 'Training Built for',
    headingAccent: 'the Beaches.',
    paragraphs: [
      'Jacksonville Beach, Atlantic Beach, and Neptune Beach are small cities with a high dog population and almost no quiet hours in season. Third Street, Beach Boulevard, and the boardwalk stack runners, bikes, outdoor seating, and other dogs into a few blocks. Mayport adds ferry traffic, fishermen, and wildlife scent. If you searched for dog training in Jacksonville Beach, you already know a driveway heel is not the test — the test is a Saturday evening on the sand and a Tuesday walk past three reactive dogs on the same block.',
      'The Beaches punish rehearsal. Seasonal leash-and-time rules mean you cannot “just let them run it off.” Heat pushes everyone onto the same early and late windows, so every outing is crowded. Pulling on the approach to the water, lunging at dogs on the boardwalk, barking at skateboards, and shutting down around strangers are the usual calls. That is not a coastal personality. It is a dog over threshold with no trained default.',
      [
        { text: 'We train in your neighborhood — Jacksonville Beach, Atlantic Beach, Neptune Beach, and Mayport — with ' },
        { text: 'in-home lessons', href: '/services/in-home-dog-training' },
        { text: ' and owner coaching on the routes you actually use. When home life is too chaotic for weekly reps, ' },
        { text: 'board and train', href: '/services/board-and-train' },
        { text: ' builds daily structure, then we hand the system back to you. ' },
        { text: 'Group classes', href: '/services/group-classes' },
        { text: ' help after the dog can pass other dogs without a scene; they are not a beach-season shortcut for reactivity.' },
      ],
      [
        { text: 'Puppies raised at the Beaches need foundations before summer crowds arrive. ' },
        { text: 'Puppy training', href: '/services/puppy-training' },
        { text: ' covers leash, crate, and greetings so the boardwalk does not become a jumping drill. Dogs already reactive belong in ' },
        { text: 'behavior modification', href: '/services/behavior-modification' },
        { text: '. Owners who want public manners that survive A1A and the sand should look at ' },
        { text: 'advanced obedience', href: '/services/advanced-obedience' },
        { text: '. For rules and timing, read ' },
        { text: 'beach etiquette in Ponte Vedra and Jacksonville Beach', href: '/blog/beach-etiquette-ponte-vedra-jacksonville-beach-dogs' },
        { text: '. For pulling on access paths, see ' },
        { text: 'leash manners at the Beaches and Nocatee', href: '/blog/leash-manners-jacksonville-beaches-nocatee' },
        { text: '.' },
      ],
      'Axiom Canine serves Jacksonville Beach, Atlantic Beach, Neptune Beach, and Mayport. Hours are Monday–Friday 9am–5pm and Saturday 9am–2pm. Call (904) 458-7561 or request a free consultation. We will tell you whether lessons, immersion, or a behavior plan fits — without pretending a weekend on the sand will fix it.',
    ],
  },
  serviceArea: {
    headingId: 'jb-area-heading',
    headingBefore: 'Serving',
    headingAccent: 'Jax Beach & the Beaches',
    description:
      'In-home and immersive training across Jacksonville Beach, Atlantic Beach, Neptune Beach, and nearby coastal streets. We train where you actually walk.',
    areas: [
      'Jacksonville Beach',
      'Atlantic Beach',
      'Neptune Beach',
      'Mayport',
      'Beach Boulevard',
      'Third Street',
      'Pablo Creek',
      'San Pablo',
    ],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sJacksonville+Beach,+FL!6i11',
    mapTitle: 'Axiom Canine service area — Jacksonville Beach, FL',
  },
  services: {
    headingId: 'jb-services-heading',
    heading: 'Training Services at the Beaches',
    intro: [
      { text: 'Coastal walks fail for different reasons. We match the program to the dog — ' },
      { text: 'leash manners', href: '/training-issues/leash-pulling' },
      { text: ', ' },
      { text: 'reactivity', href: '/training-issues/reactive-dog' },
      { text: ', or a full ' },
      { text: 'board and train', href: '/services/board-and-train' },
      { text: ' reset — instead of one generic “beach class.”' },
    ],
    links: [
      {
        href: '/services/behavior-modification',
        title: 'Behavior Modification',
        description: 'Lunging and barking around coastal dog traffic, bikes, and crowds — addressed at the root.',
        hover: 'orange',
      },
      {
        href: '/services/board-and-train',
        title: 'Board and Train',
        description:
          'Immersive structure with owner handoff when weekly beach-season walks keep rehearsing the same fight.',
        hover: 'olive',
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
        'Yes. We serve Jacksonville Beach, Atlantic Beach, Neptune Beach, and nearby coastal neighborhoods with in-home training, behavior modification, group classes, and board and train options.',
    },
    {
      question: 'Can you help with beach leash rules and manners?',
      answer:
        'Yes. Seasonal beach rules, crowded boardwalks, and high distraction environments require reliable leash skills and calm public behavior. We train for those exact conditions — not a quiet parking-lot heel.',
    },
    {
      question: 'Do you work with reactive dogs at the Beaches?',
      answer:
        'Yes. Coastal walks are full of triggers — other dogs, bikes, skateboards, and crowds. We build structured plans for leash reactivity and public neutrality. Flooding the dog on a busy Saturday is not the plan.',
    },
    {
      question: 'Do you train puppies at Jacksonville Beach?',
      answer:
        'Yes. Puppy training in your home covers leash, crate, and greetings before boardwalk crowds turn every walk into a jumping drill.',
    },
    {
      question: 'Is Axiom Cares available at the Beaches?',
      answer:
        'Yes. Newly adopted dogs in the Beaches area can receive a free Axiom Cares in-home visit.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Request a free consultation online or call (904) 458-7561. Hours are Monday–Friday 9am–5pm and Saturday 9am–2pm.',
    },
  ],
  cta: {
    headingId: 'jb-cta-heading',
    headingBefore: 'Train for the Coast You Live On.',
    description: 'Free consultation for Jacksonville Beach, Atlantic Beach, and Neptune Beach.',
  },
};
