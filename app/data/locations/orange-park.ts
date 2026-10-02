import type { LocationPageData } from './types';

export const orangePark: LocationPageData = {
  slug: 'orange-park',
  schemaName: 'Orange Park, FL',
  breadcrumbLabel: 'Dog Training in Orange Park, FL',
  schemaDescription:
    'Dog training in Orange Park, FL — behavior modification, obedience, and in-home training for Clay County owners.',
  metadata: {
    title: 'Dog Training in Orange Park, FL',
    description:
      'In-home dog training in Orange Park, FL for puppies, reactivity, and obedience. Serving Fleming Island, Oakleaf, and Clay County. Free consultation.',
    keywords: [
      'dog training Orange Park FL',
      'dog trainer Orange Park FL',
      'dog training Orange Park',
      'behavior modification Clay County',
      'puppy training Orange Park',
      'board and train Orange Park FL',
    ],
    openGraph: {
      title: 'Dog Training in Orange Park, FL | Axiom Canine',
      description:
        'In-home dog training in Orange Park, FL for puppies, reactivity, and obedience. Serving Fleming Island, Oakleaf, and Clay County.',
    },
  },
  badge: { label: 'Orange Park, FL', accent: 'orange' },
  hero: {
    headingId: 'op-hero-heading',
    headingBefore: 'Dog Training in ',
    headingAccent: 'Orange Park, FL.',
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
  about: {
    headingId: 'op-about-heading',
    headingBefore: 'Dog Training That Fits',
    headingAccent: 'Orange Park.',
    paragraphs: [
      'Orange Park and Clay County are built around family streets, HOA neighborhoods, and fast commercial corridors. Blanding Boulevard and US-17 mean constant cars, delivery traffic, and other dogs at every intersection. Fleming Island and Oakleaf Plantation add longer sidewalks, golf-cart paths, and neighbors who expect a quiet, well-mannered dog — not a daily fence-line argument. If you are searching for dog training in Orange Park, FL, you need work that holds on those routes, not cues that only work in the kitchen.',
      'The patterns we see here are specific. Leash pulling on busy sidewalks. Reactivity at the end of the driveway when another dog walks past. Puppies that rehearse jumping on kids and guests. Adolescents that fall apart the moment a skateboard or school bus goes by. Heat and humidity shrink the useful outdoor window, so evening walks get stacked with every distraction at once. None of that is a “bad dog.” It is an untrained default in a loud environment.',
      [
        { text: 'In-home lessons are the backbone of how we work in Clay County. We come to your house, your street, and the loop you actually walk — Doctors Inlet, Middleburg, Green Cove Springs, or a quiet pocket off Wells Road. You get owner coaching in the same session, because a dog who only listens to a trainer is not trained. If your schedule cannot support daily reps, or the behavior needs a hard reset, ' },
        { text: 'board and train', href: '/services/board-and-train' },
        { text: ' puts structure in place with a planned handoff so you can run the same system at home. ' },
        { text: 'Group classes', href: '/services/group-classes' },
        { text: ' help once the dog can think around other dogs; they are not a substitute for fixing serious reactivity first.' },
      ],
      [
        { text: 'Puppies in Orange Park do not stay small for long. ' },
        { text: 'Puppy training', href: '/services/puppy-training' },
        { text: ' covers crate, potty, leash, and household manners before adolescence turns rehearsal into a habit. For dogs already barking, lunging, or guarding, ' },
        { text: 'behavior modification', href: '/services/behavior-modification' },
        { text: ' addresses the root — not a weekend of “socialization” that makes the problem louder. ' },
        { text: 'Advanced obedience', href: '/services/advanced-obedience' },
        { text: ' is for owners who want recall, place, and public manners that survive Blanding traffic and a packed Saturday at a neighborhood green space.' },
      ],
      [
        { text: 'Immersion is not automatically the right fit. Read how Florida programs are structured in our guide to ' },
        { text: 'board and train cost in Florida', href: '/blog/board-and-train-cost-florida' },
        { text: ', then we will tell you honestly whether lessons or a stay make more sense for your dog. We serve Orange Park, Fleming Island, Oakleaf, Doctors Inlet, Middleburg, Green Cove Springs, and nearby Westside Jacksonville. Hours are Monday–Friday 9am–5pm and Saturday 9am–2pm. Call (904) 458-7561 or request a free consultation — no obligation, and no one-size package.' },
      ],
    ],
  },
  serviceArea: {
    headingId: 'op-area-heading',
    headingBefore: 'Serving',
    headingAccent: 'Orange Park & Clay County',
    description:
      'In-home and immersive training across Orange Park and nearby Clay County communities. We train where your dog actually lives and walks.',
    areas: [
      'Orange Park',
      'Fleming Island',
      'Oakleaf Plantation',
      'Doctors Inlet',
      'Middleburg',
      'Green Cove Springs',
      'Bellair-Meadowbrook Terrace',
      'Argyle Forest',
      'Pace Island',
      'Eagle Harbor',
    ],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sOrange+Park,+FL!6i11',
    mapTitle: 'Axiom Canine service area — Orange Park and Clay County, FL',
  },
  services: {
    headingId: 'op-services-heading',
    heading: 'Training Services in Orange Park',
    intro: [
      { text: 'Every Clay County household is different. We match ' },
      { text: 'in-home lessons', href: '/services/in-home-dog-training' },
      { text: ', ' },
      { text: 'board and train', href: '/services/board-and-train' },
      { text: ', ' },
      { text: 'puppy foundations', href: '/services/puppy-training' },
      { text: ', and ' },
      { text: 'obedience or behavior work', href: '/services/advanced-obedience' },
      { text: ' to the dog in front of us — not a canned curriculum.' },
    ],
    links: [
      {
        href: '/services/puppy-training',
        title: 'Puppy Training',
        description:
          'Foundations in Orange Park homes before adolescence turns jumping, nipping, and leash chaos into a lifestyle.',
        hover: 'orange',
      },
      {
        href: '/services/behavior-modification',
        title: 'Behavior Modification',
        description:
          'Reactivity, guarding, and aggression on busy Clay County streets — addressed at the root, not masked.',
        hover: 'orange',
      },
      {
        href: '/services/board-and-train',
        title: 'Board and Train',
        description:
          'Immersive structure with owner coaching at handoff — for dogs that need a reset before home lessons can stick.',
        hover: 'olive',
      },
    ],
  },
  faqTitle: 'Orange Park Dog Training FAQs',
  faqs: [
    {
      question: 'Do you offer dog training in Orange Park?',
      answer:
        'Yes. Axiom Canine serves Orange Park, Fleming Island, Oakleaf Plantation, Middleburg, Green Cove Springs, and surrounding Clay County neighborhoods with in-home training, board and train, group classes, and behavior consultations.',
    },
    {
      question: 'What training issues are common in Orange Park?',
      answer:
        'Leash manners on Blanding and US-17, reactivity around neighborhood dogs, puppy foundations in family homes, fence-line barking in HOA communities, and alone-time issues for working households are common. We build plans around your actual streets and schedule.',
    },
    {
      question: 'Do you come to Fleming Island and Oakleaf?',
      answer:
        'Yes. In-home lessons and owner coaching cover Fleming Island, Oakleaf Plantation, Doctors Inlet, and nearby Clay County communities. Board and train is available when immersion is a better fit than weekly visits.',
    },
    {
      question: 'Do you offer free rescue support in Orange Park?',
      answer:
        'Yes. Axiom Cares provides free in-home visits for newly adopted or rescued dogs in Orange Park and Clay County. No judgment, no pressure, no bill.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Request a free consultation online or call (904) 458-7561. We are available Monday–Friday 9am–5pm and Saturday 9am–2pm, and we respond within 24 hours on business days with next steps based on your dog’s behavior and goals.',
    },
  ],
  cta: {
    headingId: 'op-cta-heading',
    headingBefore: 'Ready to Train in Orange Park?',
    description: 'Free consultation for Orange Park and Clay County dog owners.',
  },
};
