import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection, FAQSchema } from '@/app/components/ui/FAQSection';
import OpenModalButton from '@/app/components/forms/OpenModalButton';
import { StaggerContainer } from '@/app/components/animations/StaggerContainer';
import AnimatedSection from '@/app/components/animations/AnimatedSection';
import { ArrowRight, MapPin, Anchor, Trees, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dog Training in Fernandina Beach, FL | Axiom Canine',
  description:
    'Dog training serving Fernandina Beach, Amelia Island, and Nassau County. Behavior modification, obedience, puppy training, and free rescue support. Call (904) 458-7561.',
  keywords: [
    'dog training Fernandina Beach',
    'dog trainer Amelia Island',
    'dog training Nassau County FL',
    'puppy training Fernandina Beach',
    'behavior modification Amelia Island',
  ],
  alternates: {
    canonical: '/fernandina-beach',
  },
  openGraph: {
    title: 'Dog Training in Fernandina Beach, FL | Axiom Canine',
    description: 'Professional dog training for Fernandina Beach and Amelia Island.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Do you offer dog training in Fernandina Beach and Amelia Island?',
    answer:
      'Yes. Axiom Canine serves Fernandina Beach, Amelia Island, Yulee, and Nassau County with in-home training, board & train, and behavior consultations.',
  },
  {
    question: 'What makes training on Amelia Island different?',
    answer:
      'Island life means beach access, wildlife, golf carts, tourists, and quieter residential streets that still demand reliable recall and leash manners. We train for those real environments.',
  },
  {
    question: 'Can you help newly adopted dogs in Nassau County?',
    answer:
      'Yes. Axiom Cares offers free in-home visits for rescue and adoption adjustment in the Fernandina Beach area.',
  },
  {
    question: 'How do I book an assessment?',
    answer:
      'Submit the free intake form or call (904) 458-7561. We will follow up within 24 hours.',
  },
];

export default function FernandinaBeachTrainingPage() {
  return (
    <div className="page-enter">
      <section className="relative min-h-[75vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden" aria-labelledby="fb-hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C10] via-[#050505] to-[#1A2030]" />
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 border border-[#FF5E00]/30 px-4 py-2 bg-[#050505]/60 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-[#FF5E00]" aria-hidden="true" />
            <span className="text-[#C5C6C7] font-bold tracking-[0.2em] uppercase text-sm">Fernandina Beach, FL</span>
          </div>
          <h1 id="fb-hero-heading" className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[0.9] mb-6 text-white">
            Dog Training on <span className="text-[#FF5E00]">Amelia Island.</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed mb-10">
            Professional training for Fernandina Beach, Amelia Island, and Nassau County —
            structure that holds on beaches, trails, and historic downtown streets.
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

      <section className="py-24 bg-[#0B0C10] border-b border-[#1A2030]" aria-labelledby="fb-local-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="fb-local-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4">
              Built for <span className="text-white">Nassau County.</span>
            </h2>
            <p className="text-[#C5C6C7] text-lg max-w-2xl mx-auto">
              Island wildlife, beach access, and visitor traffic create a unique training environment.
            </p>
          </div>
          <StaggerContainer>
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#FF5E00] h-full">
                  <Anchor className="w-8 h-8 text-[#FF5E00] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Coastal Living</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    Beach walks and waterfront distractions require reliable leash skills and calm focus around people and dogs.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#7A8B66] h-full">
                  <Trees className="w-8 h-8 text-[#7A8B66] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Wildlife &amp; Trails</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    Prey drive and scent overload are common on island trails. We train engagement and recall under real distraction.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#FF5E00] h-full">
                  <Home className="w-8 h-8 text-[#FF5E00] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Quiet Neighborhoods</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    Even quieter streets need guest manners, fence-line neutrality, and alone-time structure for working households.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 bg-[#050505] border-t border-[#1A2030]" aria-labelledby="fb-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="fb-services-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center">
            Training Services in Fernandina Beach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/advanced-obedience" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#FF5E00] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">Advanced Obedience</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Recall, place, and public manners for island life.</p>
              <span className="text-[#FF5E00] font-semibold">Learn more →</span>
            </Link>
            <Link href="/services/behavior-modification" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#FF5E00] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">Behavior Modification</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Reactivity, anxiety, and guarding addressed with structure.</p>
              <span className="text-[#FF5E00] font-semibold">Learn more →</span>
            </Link>
            <Link href="/community" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#FF5E00] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">Axiom Cares</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Free rescue support for Nassau County adoptions.</p>
              <span className="text-[#FF5E00] font-semibold">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0C10] border-t border-[#1A2030]">
        <div className="max-w-4xl mx-auto px-4">
          <FAQSection items={faqItems} title="Fernandina Beach Dog Training FAQs" />
        </div>
      </section>

      <section className="py-24 bg-[#050505] border-t border-[#1A2030]" aria-labelledby="fb-cta-heading">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 id="fb-cta-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]">
            Serving Fernandina &amp; Amelia Island
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-10">Schedule your free consultation today.</p>
          <OpenModalButton className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center gap-3">
            Schedule Consultation <ArrowRight className="w-6 h-6" />
          </OpenModalButton>
        </div>
      </section>

      <FAQSchema items={faqItems} />
    </div>
  );
}
