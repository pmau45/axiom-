import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection, FAQSchema } from '@/app/components/ui/FAQSection';
import OpenModalButton from '@/app/components/forms/OpenModalButton';
import { StaggerContainer } from '@/app/components/animations/StaggerContainer';
import AnimatedSection from '@/app/components/animations/AnimatedSection';
import { ArrowRight, MapPin, Home, Trees, Car } from 'lucide-react';

export const metadata: Metadata = {
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
  alternates: {
    canonical: '/orange-park',
  },
  openGraph: {
    title: 'Dog Training in Orange Park, FL | Axiom Canine',
    description: 'Professional dog training serving Orange Park and Clay County.',
    type: 'website',
  },
};

const faqItems = [
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
];

export default function OrangeParkTrainingPage() {
  return (
    <div className="page-enter">
      <section className="relative min-h-[75vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden" aria-labelledby="op-hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C10] via-[#050505] to-[#1A2030]" />
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 border border-[#FF5E00]/30 px-4 py-2 bg-[#050505]/60 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-[#FF5E00]" aria-hidden="true" />
            <span className="text-[#C5C6C7] font-bold tracking-[0.2em] uppercase text-sm">Orange Park, FL</span>
          </div>
          <h1 id="op-hero-heading" className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[0.9] mb-6 text-white">
            Dog Training in <span className="text-[#FF5E00]">Orange Park.</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed mb-10">
            Structure-first training for Orange Park, Fleming Island, and Clay County homes —
            from puppy manners to reactivity and board &amp; train.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <OpenModalButton className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-lg font-bold uppercase tracking-widest px-8 py-4 inline-flex items-center gap-2">
              Free Consultation <ArrowRight className="w-5 h-5" />
            </OpenModalButton>
            <a href="tel:+19044587561" className="btn-rugged border-2 border-[#1A2030] text-[#C5C6C7] font-oswald text-lg font-bold uppercase tracking-widest px-8 py-4 inline-flex items-center gap-2 hover:border-[#FF5E00] hover:text-white transition-colors">
              (904) 458-7561
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0C10] border-b border-[#1A2030]" aria-labelledby="op-local-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="op-local-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4">
              Built for <span className="text-white">Clay County Life.</span>
            </h2>
            <p className="text-[#C5C6C7] text-lg max-w-2xl mx-auto">
              Busy roads, family neighborhoods, and park walks demand reliable leash skills and calm public manners.
            </p>
          </div>
          <StaggerContainer>
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#FF5E00] h-full">
                  <Home className="w-8 h-8 text-[#FF5E00] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Family Households</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    Kids, guests, and busy evenings. We train greetings, place work, and household rules that hold when life gets loud.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#7A8B66] h-full">
                  <Car className="w-8 h-8 text-[#7A8B66] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Busy Corridors</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    Blanding, US-17, and neighborhood cut-throughs create constant distractions. Loose-leash and neutrality matter here.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#FF5E00] h-full">
                  <Trees className="w-8 h-8 text-[#FF5E00] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Parks &amp; Trails</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    From neighborhood green spaces to Fleming Island walks — we train for real outdoor environments, not just living-room sits.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 bg-[#050505] border-t border-[#1A2030]" aria-labelledby="op-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="op-services-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center">
            Training Services in Orange Park
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/puppy-training" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#FF5E00] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">Puppy Training</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Foundations before adolescence turns small problems into big ones.</p>
              <span className="text-[#FF5E00] font-semibold">Learn more →</span>
            </Link>
            <Link href="/services/behavior-modification" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#FF5E00] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">Behavior Modification</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Reactivity, guarding, and aggression addressed at the root.</p>
              <span className="text-[#FF5E00] font-semibold">Learn more →</span>
            </Link>
            <Link href="/community" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#FF5E00] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">Axiom Cares</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Free rescue and adoption adjustment support in Clay County.</p>
              <span className="text-[#FF5E00] font-semibold">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0C10] border-t border-[#1A2030]">
        <div className="max-w-4xl mx-auto px-4">
          <FAQSection items={faqItems} title="Orange Park Dog Training FAQs" />
        </div>
      </section>

      <section className="py-24 bg-[#050505] border-t border-[#1A2030]" aria-labelledby="op-cta-heading">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 id="op-cta-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]">
            Ready to Train in Orange Park?
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-10">Free consultation for Orange Park and Clay County dog owners.</p>
          <OpenModalButton className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center gap-3">
            Schedule Consultation <ArrowRight className="w-6 h-6" />
          </OpenModalButton>
        </div>
      </section>

      <FAQSchema items={faqItems} />
    </div>
  );
}
