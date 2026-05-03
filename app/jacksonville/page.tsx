import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Heart, Shield, Phone } from 'lucide-react';
import OpenModalButton from '../components/forms/OpenModalButton';
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer';
import AnimatedSection from '../components/animations/AnimatedSection';
import { FAQSection, FAQSchema } from '../components/ui/FAQSection';

export const metadata: Metadata = {
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
  alternates: {
    canonical: '/jacksonville',
  },
  openGraph: {
    title: 'Dog Training in Jacksonville, FL | Axiom Canine',
    description: 'Professional dog training serving all of Jacksonville and Northeast Florida. Structure. Consistency. Results.',
    type: 'website',
  },
};

const serviceAreas = [
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
];

const faqItems = [
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
];

export default function JacksonvillePage() {
  return (
    <div className="page-enter">
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden"
        aria-labelledby="jax-hero-heading"
      >
        {/* Cinematic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C10] via-[#050505] to-[#1A2030]" />
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        
        {/* Subtle cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 border border-[#FF5E00]/30 px-4 py-2 bg-[#050505]/60 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-[#FF5E00]" aria-hidden="true" />
            <span className="text-[#C5C6C7] font-bold tracking-[0.2em] uppercase text-sm">
              Jacksonville, FL &amp; Northeast Florida
            </span>
          </div>
          
          <h1
            id="jax-hero-heading"
            className="font-oswald text-5xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tight leading-[0.9] mb-8 text-white"
          >
            Before You Give Up{' '}
            <span className="text-[#FF5E00]">On Your Dog.</span>
          </h1>
          
          <p className="text-lg md:text-2xl font-light max-w-3xl mx-auto mb-6 text-[#C5C6C7] leading-relaxed">
            Most dog owners in Jacksonville reach out when they are at their breaking point. 
            Reactivity. Aggression. Failed obedience classes. Before you rehome, surrender, or give up — 
            <span className="text-white font-medium"> there is another option.</span>
          </p>
          
          <p className="text-base md:text-lg font-light max-w-2xl mx-auto mb-12 text-[#7A8B66] leading-relaxed italic">
            We help Jacksonville dog owners build real-world obedience through structure, consistency, and clear communication.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <OpenModalButton
              className="btn-rugged inline-flex items-center justify-center gap-3 bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5"
              ariaLabel="Request a free consultation"
            >
              Free Consultation{' '}
              <ArrowRight className="w-6 h-6" aria-hidden="true" />
            </OpenModalButton>
            <a
              href="tel:+19044587561"
              className="btn-rugged inline-flex items-center justify-center gap-3 border-2 border-[#1A2030] text-[#C5C6C7] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 hover:border-[#FF5E00] hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              (904) 458-7561
            </a>
          </div>
        </div>
      </section>

      {/* ── Mission Statement ─────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030] relative overflow-hidden"
        aria-labelledby="mission-heading"
      >
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#FF5E00]/5 to-transparent pointer-events-none" aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-[#FF5E00]" aria-hidden="true" />
                <span className="text-[#FF5E00] font-bold tracking-[0.2em] uppercase text-sm">Our Mission</span>
              </div>
              <h2
                id="mission-heading"
                className="font-oswald text-5xl md:text-6xl font-bold uppercase tracking-tight leading-none text-white"
              >
                Keeping Dogs{' '}
                <span className="text-[#7A8B66]">In Their Homes.</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-[#1A2030] p-8 md:p-12 border border-white/5 relative shadow-2xl shadow-black/50">
                <Heart className="absolute top-6 right-6 w-10 h-10 text-[#FF5E00]/20" aria-hidden="true" />
                <p className="text-xl text-white font-light leading-relaxed mb-6">
                  Too many dogs are surrendered, rehomed, or euthanized because of behavioral issues that 
                  <span className="text-[#FF5E00] font-medium"> could have been resolved</span> with the right guidance.
                </p>
                <p className="text-[#C5C6C7] leading-relaxed mb-6">
                  In Jacksonville and across Northeast Florida, we work with families who feel like they have tried everything. 
                  Owners dealing with leash reactivity on the Riverside sidewalks. Families managing aggression in Mandarin. 
                  New adopters in San Marco struggling with adjustment. We have been there, and we can help.
                </p>
                <p className="text-[#C5C6C7] leading-relaxed">
                  Through our <span className="text-[#7A8B66] font-medium">Axiom Cares</span> program, we even provide 
                  <span className="text-white"> free in-home support </span> 
                  for newly adopted and rescued dogs. No judgment. No pressure. No bill. Just help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Areas ─────────────────────────────── */}
      <section
        className="py-24 bg-[#050505] relative"
        aria-labelledby="areas-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#7A8B66]" aria-hidden="true" />
              <span className="text-[#7A8B66] font-bold tracking-[0.2em] uppercase text-sm">Service Area</span>
              <div className="h-px w-12 bg-[#7A8B66]" aria-hidden="true" />
            </div>
            <h2
              id="areas-heading"
              className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4"
            >
              Serving <span className="text-[#FF5E00]">All of Jacksonville</span>
            </h2>
            <p className="text-[#C5C6C7] text-lg max-w-2xl mx-auto">
              From the historic streets of Springfield to the beaches of Atlantic Beach — we come to you.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 bg-[#1A2030]/50 border border-[#1A2030] px-4 py-3 hover:border-[#7A8B66]/50 transition-colors"
              >
                <MapPin className="w-3 h-3 text-[#7A8B66] flex-shrink-0" aria-hidden="true" />
                <span className="text-[#C5C6C7] text-sm">{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/ponte-vedra"
              className="group flex items-center justify-between bg-[#1A2030] border border-[#1A2030] hover:border-[#FF5E00] p-6 transition-colors"
            >
              <div>
                <h3 className="font-oswald text-lg uppercase tracking-widest text-white group-hover:text-[#FF5E00] transition-colors">Ponte Vedra Beach</h3>
                <p className="text-[#C5C6C7] text-sm">Dog training in Ponte Vedra &amp; surrounding areas</p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#FF5E00] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="/nocatee"
              className="group flex items-center justify-between bg-[#1A2030] border border-[#1A2030] hover:border-[#FF5E00] p-6 transition-colors"
            >
              <div>
                <h3 className="font-oswald text-lg uppercase tracking-widest text-white group-hover:text-[#FF5E00] transition-colors">Nocatee</h3>
                <p className="text-[#C5C6C7] text-sm">Dog training in Nocatee &amp; surrounding communities</p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#FF5E00] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="/st-augustine"
              className="group flex items-center justify-between bg-[#1A2030] border border-[#1A2030] hover:border-[#FF5E00] p-6 transition-colors"
            >
              <div>
                <h3 className="font-oswald text-lg uppercase tracking-widest text-white group-hover:text-[#FF5E00] transition-colors">St. Augustine</h3>
                <p className="text-[#C5C6C7] text-sm">Dog training in St. Augustine &amp; historic district</p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#FF5E00] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="/palm-coast"
              className="group flex items-center justify-between bg-[#1A2030] border border-[#1A2030] hover:border-[#FF5E00] p-6 transition-colors"
            >
              <div>
                <h3 className="font-oswald text-lg uppercase tracking-widest text-white group-hover:text-[#FF5E00] transition-colors">Palm Coast</h3>
                <p className="text-[#C5C6C7] text-sm">Dog training in Palm Coast &amp; Flagler County</p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#FF5E00] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="/brunswick-ga"
              className="group flex items-center justify-between bg-[#1A2030] border border-[#1A2030] hover:border-[#FF5E00] p-6 transition-colors md:col-span-2"
            >
              <div>
                <h3 className="font-oswald text-lg uppercase tracking-widest text-white group-hover:text-[#FF5E00] transition-colors">Brunswick, GA</h3>
                <p className="text-[#C5C6C7] text-sm">Dog training across the state line in Coastal Georgia</p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#FF5E00] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030] relative overflow-hidden"
        aria-labelledby="jax-services-heading"
      >
        <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-[#7A8B66]/5 to-transparent pointer-events-none" aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#FF5E00]" aria-hidden="true" />
              <span className="text-[#FF5E00] font-bold tracking-[0.2em] uppercase text-sm">Programs</span>
              <div className="h-px w-12 bg-[#FF5E00]" aria-hidden="true" />
            </div>
            <h2
              id="jax-services-heading"
              className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6"
            >
              Real Training for <span className="text-[#7A8B66]">Real Problems.</span>
            </h2>
            <p className="text-[#C5C6C7] text-lg leading-relaxed">
              Every dog is different. Every problem has a root. We offer programs designed to address 
              what is actually going on — matched to the dog, the behavior, and your lifestyle.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <Link
                href="/services/behavior-modification"
                className="group bg-[#1A2030] border border-[#1A2030] hover:border-[#FF5E00] transition-all duration-300 p-10 flex flex-col h-full shadow-lg hover:shadow-[#FF5E00]/10"
              >
                <Shield className="text-[#FF5E00] w-10 h-10 mb-6" aria-hidden="true" />
                <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-4">
                  Behavior Modification
                </h3>
                <p className="text-[#C5C6C7] leading-relaxed mb-8 flex-grow">
                  Reactivity, aggression, resource guarding, and anxiety. We rehabilitate the dogs 
                  other trainers turn away by addressing the root cause — not just masking symptoms.
                </p>
                <span className="font-oswald text-sm uppercase tracking-widest text-[#FF5E00] border-b border-[#FF5E00] pb-1 self-start group-hover:text-white group-hover:border-white transition-colors">
                  Learn More →
                </span>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link
                href="/services/advanced-obedience"
                className="group bg-[#1A2030] border border-[#1A2030] hover:border-[#7A8B66] transition-all duration-300 p-10 flex flex-col h-full shadow-lg hover:shadow-[#7A8B66]/10"
              >
                <ArrowRight className="text-[#7A8B66] w-10 h-10 mb-6" aria-hidden="true" />
                <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-4">
                  Advanced Obedience
                </h3>
                <p className="text-[#C5C6C7] leading-relaxed mb-8 flex-grow">
                  Bulletproof recall, off-leash reliability, and public neutrality. A dog that only 
                  listens at home is not trained. We build obedience that holds up at Jacksonville Beach 
                  and Riverside Park.
                </p>
                <span className="font-oswald text-sm uppercase tracking-widest text-[#7A8B66] border-b border-[#7A8B66] pb-1 self-start group-hover:text-white group-hover:border-white transition-colors">
                  Learn More →
                </span>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link
                href="/community"
                className="group bg-[#1A2030] border border-[#1A2030] hover:border-[#FF5E00] transition-all duration-300 p-10 flex flex-col h-full shadow-lg hover:shadow-[#FF5E00]/10"
              >
                <Heart className="text-[#FF5E00] w-10 h-10 mb-6" aria-hidden="true" />
                <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-4">
                  Axiom Cares
                </h3>
                <p className="text-[#C5C6C7] leading-relaxed mb-8 flex-grow">
                  Free in-home visits for newly adopted and rescued dogs in Jacksonville. 
                  No judgment, no pressure, no bill. Because every dog deserves a chance — 
                  and every owner deserves support.
                </p>
                <span className="font-oswald text-sm uppercase tracking-widest text-[#FF5E00] border-b border-[#FF5E00] pb-1 self-start group-hover:text-white group-hover:border-white transition-colors">
                  Learn More →
                </span>
              </Link>
            </StaggerItem>
          </StaggerContainer>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="font-oswald text-lg font-bold uppercase tracking-widest px-8 py-4 inline-flex items-center gap-3 border border-[#1A2030] text-[#C5C6C7] hover:border-[#FF5E00] hover:text-white transition-colors"
            >
              View All Services &amp; Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Axiom ──────────────────────────── */}
      <section
        className="py-24 bg-[#050505] relative"
        aria-labelledby="why-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              id="why-heading"
              className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4"
            >
              Why Jacksonville Owners <span className="text-[#7A8B66]">Choose Axiom</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
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
            ].map((item) => (
              <AnimatedSection key={item.title}>
                <div className="bg-[#1A2030] p-8 border-t-4 border-[#1A2030] hover:border-[#FF5E00] transition-colors h-full">
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#C5C6C7] leading-relaxed text-sm">{item.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 bg-[#0B0C10] border-t border-[#1A2030]">
        <div className="max-w-4xl mx-auto px-4">
          <FAQSection items={faqItems} title="Jacksonville Dog Training FAQs" />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section
        className="py-24 bg-[#050505] border-t border-[#1A2030] relative overflow-hidden"
        aria-labelledby="jax-cta-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5E00]/5 via-transparent to-[#7A8B66]/5 pointer-events-none" aria-hidden="true" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2
            id="jax-cta-heading"
            className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4 text-white"
          >
            Your Dog Is Worth <span className="text-[#FF5E00]">Another Try.</span>
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-6 max-w-2xl mx-auto">
            Before you rehome, surrender, or give up — reach out. Most behavioral issues are solvable 
            with the right structure and guidance. We serve all of Jacksonville and Northeast Florida.
          </p>
          <p className="text-[#7A8B66] text-sm mb-10 tracking-wide uppercase">
            Free consultation • No obligation • Serving Jacksonville, FL
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <OpenModalButton
              className="btn-rugged inline-flex items-center justify-center gap-3 bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5"
              ariaLabel="Open free assessment form"
            >
              Start Free Consultation{' '}
              <ArrowRight className="w-6 h-6" aria-hidden="true" />
            </OpenModalButton>
          </div>
        </div>
      </section>

      <FAQSchema items={faqItems} />
    </div>
  );
}
