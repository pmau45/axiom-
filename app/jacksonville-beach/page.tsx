import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection, FAQSchema } from '@/app/components/ui/FAQSection';
import OpenModalButton from '@/app/components/forms/OpenModalButton';
import { StaggerContainer } from '@/app/components/animations/StaggerContainer';
import AnimatedSection from '@/app/components/animations/AnimatedSection';
import { ArrowRight, MapPin, Waves, Users, Dog } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dog Training in Jacksonville Beach, FL | Axiom Canine',
  description:
    'Dog training for Jacksonville Beach, Atlantic Beach, and Neptune Beach. Leash manners, beach etiquette, reactivity, and obedience. Call (904) 458-7561.',
  keywords: [
    'dog training Jacksonville Beach',
    'dog trainer Jax Beach',
    'beach dog training Jacksonville FL',
    'reactive dog training Atlantic Beach',
    'leash training Neptune Beach',
  ],
  alternates: {
    canonical: '/jacksonville-beach',
  },
  openGraph: {
    title: 'Dog Training in Jacksonville Beach, FL | Axiom Canine',
    description: 'Professional dog training for the Beaches communities.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Do you train dogs in Jacksonville Beach?',
    answer:
      'Yes. We serve Jacksonville Beach, Atlantic Beach, Neptune Beach, and nearby coastal neighborhoods with in-home training, behavior modification, and board & train options.',
  },
  {
    question: 'Can you help with beach leash rules and manners?',
    answer:
      'Absolutely. Seasonal beach rules, crowded boardwalks, and high distraction environments require reliable leash skills and calm public behavior. We train for those exact conditions.',
  },
  {
    question: 'Do you work with reactive dogs at the Beaches?',
    answer:
      'Yes. Coastal walks are full of triggers — other dogs, bikes, skateboards, and crowds. We build structured plans for leash reactivity and public neutrality.',
  },
  {
    question: 'Is Axiom Cares available at the Beaches?',
    answer:
      'Yes. Newly adopted dogs in the Beaches area can receive a free Axiom Cares in-home visit.',
  },
];

export default function JacksonvilleBeachTrainingPage() {
  return (
    <div className="page-enter">
      <section className="relative min-h-[75vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden" aria-labelledby="jb-hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C10] via-[#050505] to-[#1A2030]" />
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 border border-[#FF5E00]/30 px-4 py-2 bg-[#050505]/60 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-[#FF5E00]" aria-hidden="true" />
            <span className="text-[#C5C6C7] font-bold tracking-[0.2em] uppercase text-sm">Jacksonville Beach, FL</span>
          </div>
          <h1 id="jb-hero-heading" className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[0.9] mb-6 text-white">
            Dog Training at <span className="text-[#FF5E00]">Jax Beach.</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed mb-10">
            Beach crowds, seasonal rules, and constant distractions. We train dogs for real coastal life —
            not just quiet living-room obedience.
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

      <section className="py-24 bg-[#0B0C10] border-b border-[#1A2030]" aria-labelledby="jb-local-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="jb-local-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4">
              Training for <span className="text-white">Beaches Life.</span>
            </h2>
            <p className="text-[#C5C6C7] text-lg max-w-2xl mx-auto">
              Jacksonville Beach, Atlantic Beach, and Neptune Beach ask more of your dog than a suburban sidewalk.
            </p>
          </div>
          <StaggerContainer>
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#FF5E00] h-full">
                  <Waves className="w-8 h-8 text-[#FF5E00] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Beach Access</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    Seasonal time rules, leashes, and crowded sand. We train reliable manners before a citation or conflict ruins the outing.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#7A8B66] h-full">
                  <Users className="w-8 h-8 text-[#7A8B66] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Crowds &amp; Noise</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    Boardwalks, restaurants, bikes, and tourists. Public neutrality is the difference between a calm walk and a constant fight.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#FF5E00] h-full">
                  <Dog className="w-8 h-8 text-[#FF5E00] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Dog Density</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    More dogs per block means more reactivity triggers. We address leash manners and threshold control where it actually fails.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 bg-[#050505] border-t border-[#1A2030]" aria-labelledby="jb-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="jb-services-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center">
            Training Services at the Beaches
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/training-issues/leash-pulling" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#FF5E00] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">Leash Manners</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Stop being dragged down Beach Blvd and the boardwalk.</p>
              <span className="text-[#FF5E00] font-semibold">Learn more →</span>
            </Link>
            <Link href="/training-issues/reactive-dog" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#FF5E00] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">Reactive Dogs</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Address lunging and barking around coastal dog traffic.</p>
              <span className="text-[#FF5E00] font-semibold">Learn more →</span>
            </Link>
            <Link href="/blog/beach-etiquette-ponte-vedra-jacksonville-beach-dogs" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#FF5E00] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">Beach Etiquette Guide</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Local rules for Jacksonville Beach and Ponte Vedra owners.</p>
              <span className="text-[#FF5E00] font-semibold">Read more →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0C10] border-t border-[#1A2030]">
        <div className="max-w-4xl mx-auto px-4">
          <FAQSection items={faqItems} title="Jacksonville Beach Dog Training FAQs" />
        </div>
      </section>

      <section className="py-24 bg-[#050505] border-t border-[#1A2030]" aria-labelledby="jb-cta-heading">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 id="jb-cta-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]">
            Train for the Coast You Live On.
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-10">Free consultation for Jacksonville Beach, Atlantic Beach, and Neptune Beach.</p>
          <OpenModalButton className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center gap-3">
            Schedule Consultation <ArrowRight className="w-6 h-6" />
          </OpenModalButton>
        </div>
      </section>

      <FAQSchema items={faqItems} />
    </div>
  );
}
