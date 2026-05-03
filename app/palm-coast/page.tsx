import type { Metadata } from 'next';
import { FAQSection, FAQSchema } from '@/app/components/ui/FAQSection';
import Link from 'next/link';
import OpenModalButton from '@/app/components/forms/OpenModalButton';
import { StaggerContainer } from '@/app/components/animations/StaggerContainer';
import AnimatedSection from '@/app/components/animations/AnimatedSection';
import { ArrowRight, MapPin, Waves, Trees, Sun } from 'lucide-react';

export const metadata: Metadata = {
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
  alternates: {
    canonical: '/palm-coast',
  },
  openGraph: {
    title: 'Dog Training in Palm Coast, FL | Axiom Canine',
    description: 'Professional dog training serving Palm Coast and Flagler County.',
    type: 'website',
  },
};

const faqItems = [
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
];

export default function PalmCoastTrainingPage() {
  return (
    <div className="page-enter">
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden" aria-labelledby="pc-hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C10] via-[#050505] to-[#1A2030]" />
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 border border-[#FF5E00]/30 px-4 py-2 bg-[#050505]/60 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-[#FF5E00]" aria-hidden="true" />
            <span className="text-[#C5C6C7] font-bold tracking-[0.2em] uppercase text-sm">Palm Coast, FL</span>
          </div>
          
          <h1 id="pc-hero-heading" className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[0.9] mb-6 text-white">
            Dog Training in <span className="text-[#FF5E00]">Palm Coast.</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed mb-10">
            Professional behavior modification and obedience training for Palm Coast and Flagler County — 
            from the beach to the trails.
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
      <section className="py-24 bg-[#0B0C10] border-b border-[#1A2030]" aria-labelledby="pc-local-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="pc-local-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4">
              Built for <span className="text-white">Palm Coast Living.</span>
            </h2>
            <p className="text-[#C5C6C7] text-lg max-w-2xl mx-auto">
              From Flagler Beach to Washington Oaks — your dog should enjoy everything the Florida coast has to offer.
            </p>
          </div>
          
          <StaggerContainer>
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#FF5E00] h-full">
                  <Waves className="w-8 h-8 text-[#FF5E00] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Flagler Beach &amp; Coast</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    Flagler Beach offers miles of drivable beach and surf. We train dogs for off-leash reliability 
                    near water, controlled behavior around beach traffic, and recall from surf and shorebirds.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#7A8B66] h-full">
                  <Trees className="w-8 h-8 text-[#7A8B66] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Nature Preserves &amp; Trails</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    Washington Oaks Gardens and Graham Swamp are incredible — but full of wildlife distractions. 
                    We train trail manners, wildlife desensitization, and reliable recall in natural settings.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#FF5E00] h-full">
                  <Sun className="w-8 h-8 text-[#FF5E00] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Suburban &amp; Golf Communities</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    Palm Coast&apos;s planned communities and golf courses require dogs who respect boundaries, 
                    greet calmly, and maintain control around golfers and pedestrians.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────── */}
      <section className="py-24 bg-[#050505] border-t border-[#1A2030]" aria-labelledby="pc-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="pc-services-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center">
            Training Services in Palm Coast
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/behavior-modification" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#FF5E00] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">Behavior Modification</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Address reactivity, aggression, anxiety, and resource guarding through science-based training.</p>
              <span className="text-[#FF5E00] font-semibold">Learn more →</span>
            </Link>
            <Link href="/services/advanced-obedience" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#7A8B66] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#7A8B66] transition-colors">Advanced Obedience</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Off-leash reliability for beach walks, trail adventures, and community living.</p>
              <span className="text-[#7A8B66] font-semibold">Learn more →</span>
            </Link>
            <Link href="/community" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#FF5E00] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">Axiom Cares</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Free in-home visits for newly adopted dogs in Palm Coast. No judgment, no pressure, no bill.</p>
              <span className="text-[#FF5E00] font-semibold">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 bg-[#0B0C10] border-t border-[#1A2030]">
        <div className="max-w-4xl mx-auto px-4">
          <FAQSection items={faqItems} title="Palm Coast Dog Training FAQs" />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-[#050505] border-t border-[#1A2030]" aria-labelledby="pc-cta-heading">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 id="pc-cta-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]">
            Ready to Transform Your Dog?
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-10">Schedule your free consultation today. Serving Palm Coast and Flagler County.</p>
          <OpenModalButton className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center gap-3">
            Schedule Consultation <ArrowRight className="w-6 h-6" />
          </OpenModalButton>
        </div>
      </section>

      <FAQSchema items={faqItems} />
    </div>
  );
}
