import type { Metadata } from 'next';
import { FAQSection, FAQSchema } from '@/app/components/ui/FAQSection';
import OpenModalButton from '@/app/components/forms/OpenModalButton';
import { StaggerContainer } from '@/app/components/animations/StaggerContainer';
import AnimatedSection from '@/app/components/animations/AnimatedSection';
import { ArrowRight, MapPin, Anchor, Shell, Sailboat } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dog Training in Brunswick, GA | Axiom Canine',
  description:
    'Professional dog training serving Brunswick, GA and Coastal Georgia. Behavior modification, obedience training, and free rescue support. Call (904) 458-7561.',
  keywords: [
    'dog training Brunswick GA',
    'dog trainer Brunswick Georgia',
    'behavior modification Brunswick GA',
    'obedience training Coastal Georgia',
    'dog training St. Simons Island',
    'dog trainer Jekyll Island',
    'Golden Isles dog training',
  ],
  alternates: {
    canonical: '/brunswick-ga',
  },
  openGraph: {
    title: 'Dog Training in Brunswick, GA | Axiom Canine',
    description: 'Professional dog training serving Brunswick, GA and Coastal Georgia.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Do you offer training services in Brunswick, GA?',
    answer:
      'Yes! Axiom Canine serves Brunswick, St. Simons Island, Jekyll Island, Sea Island, and all of Glynn County. We travel across the state line to provide in-home training, board-and-train programs, and behavioral consultations.',
  },
  {
    question: 'What makes Coastal Georgia dog training unique?',
    answer:
      'The Golden Isles present unique challenges — marsh wildlife, boat culture, island tourism, and beach access across multiple islands. We train dogs for off-leash reliability on the beach, calm behavior on boats, and control around coastal wildlife.',
  },
  {
    question: 'Do you train dogs for boat and marina behavior?',
    answer:
      'Absolutely. Coastal Georgia life often involves boats, marinas, and waterfront dining. We train dogs to board calmly, remain controlled on deck, and handle the unique stimuli of marina environments.',
  },
  {
    question: 'How far do you travel into Georgia?',
    answer:
      'We regularly serve Brunswick, St. Simons Island, Jekyll Island, and Sea Island. For areas further north or inland, contact us to discuss availability. We aim to help as many Coastal Georgia dog owners as possible.',
  },
  {
    question: 'Do you offer free rescue support in Brunswick?',
    answer:
      'Yes! Our Axiom Cares program provides free in-home visits for newly adopted or rescued dogs in the Brunswick and Golden Isles area. No judgment, no pressure, no bill.',
  },
];

export default function BrunswickGaTrainingPage() {
  return (
    <div className="page-enter">
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden" aria-labelledby="brunswick-hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C10] via-[#050505] to-[#1A2030]" />
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 border border-[#7A8B66]/30 px-4 py-2 bg-[#050505]/60 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-[#7A8B66]" aria-hidden="true" />
            <span className="text-[#C5C6C7] font-bold tracking-[0.2em] uppercase text-sm">Brunswick, GA &amp; Coastal Georgia</span>
          </div>
          
          <h1 id="brunswick-hero-heading" className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[0.9] mb-6 text-white">
            Dog Training in <span className="text-[#7A8B66]">Brunswick, GA.</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed mb-10">
            Professional behavior modification and obedience training for Coastal Georgia — 
            Brunswick, St. Simons, Jekyll Island, and the Golden Isles.
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

      {/* ── Local Context ─────────────────────────────── */}
      <section className="py-24 bg-[#0B0C10] border-b border-[#1A2030]" aria-labelledby="brunswick-local-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="brunswick-local-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4">
              Training for <span className="text-white">Coastal Georgia Life.</span>
            </h2>
            <p className="text-[#C5C6C7] text-lg max-w-2xl mx-auto">
              From marsh walks to island hopping — your dog needs to handle the unique challenges of the Golden Isles.
            </p>
          </div>
          
          <StaggerContainer>
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#7A8B66] h-full">
                  <Shell className="w-8 h-8 text-[#7A8B66] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Island Beach Access</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    St. Simons and Jekyll Island beaches are incredible — but require off-leash reliability 
                    around shorebirds, surf, and other beachgoers. We train for safe, controlled coastal freedom.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#FF5E00] h-full">
                  <Anchor className="w-8 h-8 text-[#FF5E00] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Marina &amp; Boat Manners</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    Coastal Georgia life means boats. We train dogs to board calmly, stay controlled on deck, 
                    and handle marina stimuli — from dock lines to other boat dogs.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#7A8B66] h-full">
                  <Sailboat className="w-8 h-8 text-[#7A8B66] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Marsh &amp; Wildlife Control</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    The Georgia marshes are full of wildlife — herons, dolphins, deer. We train recall and 
                    control around these natural distractions so you can enjoy coastal walks safely.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────── */}
      <section className="py-24 bg-[#050505] border-t border-[#1A2030]" aria-labelledby="brunswick-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="brunswick-services-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center">
            Training Services in Coastal Georgia
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/services/behavior-modification" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#FF5E00] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">Behavior Modification</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Address reactivity, aggression, anxiety, and resource guarding through science-based training.</p>
              <span className="text-[#FF5E00] font-semibold">Learn more →</span>
            </a>
            <a href="/services/advanced-obedience" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#7A8B66] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#7A8B66] transition-colors">Advanced Obedience</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Off-leash reliability for beach adventures, marina visits, and coastal walks.</p>
              <span className="text-[#7A8B66] font-semibold">Learn more →</span>
            </a>
            <a href="/community" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#FF5E00] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">Axiom Cares</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Free in-home visits for newly adopted dogs in Brunswick and the Golden Isles. No judgment, no pressure, no bill.</p>
              <span className="text-[#FF5E00] font-semibold">Learn more →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 bg-[#0B0C10] border-t border-[#1A2030]">
        <div className="max-w-4xl mx-auto px-4">
          <FAQSection items={faqItems} title="Brunswick, GA Dog Training FAQs" />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-[#050505] border-t border-[#1A2030]" aria-labelledby="brunswick-cta-heading">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 id="brunswick-cta-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]">
            Ready to Transform Your Dog?
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-10">Schedule your free consultation today. Serving Brunswick, GA and the Golden Isles.</p>
          <OpenModalButton className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center gap-3">
            Schedule Consultation <ArrowRight className="w-6 h-6" />
          </OpenModalButton>
        </div>
      </section>

      <FAQSchema items={faqItems} />
    </div>
  );
}
