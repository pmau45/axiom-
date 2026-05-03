import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection, FAQSchema } from '@/app/components/ui/FAQSection';
import OpenModalButton from '@/app/components/forms/OpenModalButton';
import { StaggerContainer } from '@/app/components/animations/StaggerContainer';
import AnimatedSection from '@/app/components/animations/AnimatedSection';
import { ArrowRight, MapPin, Waves, TreePine, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dog Training in Ponte Vedra, FL | Axiom Canine',
  description:
    'Professional dog training serving Ponte Vedra Beach, Ponte Vedra Isles, and Palencia. Behavior modification and obedience training for Northeast Florida&apos;s most discerning dog owners. Call (904) 458-7561.',
  keywords: [
    'dog training Ponte Vedra',
    'dog trainer Ponte Vedra Beach',
    'behavior modification Ponte Vedra',
    'obedience training Ponte Vedra Isles',
    'dog training Palencia',
    'Ponte Vedra dog behaviorist',
  ],
  alternates: {
    canonical: '/ponte-vedra',
  },
  openGraph: {
    title: 'Dog Training in Ponte Vedra, FL | Axiom Canine',
    description: 'Professional dog training serving Ponte Vedra Beach and surrounding communities.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Do you offer training services in Ponte Vedra Beach?',
    answer:
      'Yes! Axiom Canine serves Ponte Vedra Beach, Ponte Vedra Isles, Palencia, and surrounding neighborhoods. We provide in-home training, board-and-train programs, and behavioral consultations throughout the Ponte Vedra area.',
  },
  {
    question: 'What makes Ponte Vedra dog training unique?',
    answer:
      'Ponte Vedra homes often have larger properties, beach access, and active outdoor lifestyles. We train dogs to handle off-leash reliability on the beach, proper etiquette around golfers and pedestrians on Ponte Vedra Blvd, and calm behavior in the upscale, high-activity environment.',
  },
  {
    question: 'How long does training typically take?',
    answer:
      'Behavior modification typically takes 4-12 weeks with consistent weekly sessions. Obedience training can take 6-8 weeks. We create customized plans during your free consultation based on your dog&apos;s specific needs and your goals.',
  },
  {
    question: 'Do you work with dogs from Ponte Vedra country clubs and golf communities?',
    answer:
      'Absolutely. We understand the unique challenges of training dogs in golf course communities and country club settings — from proper leash etiquette around golfers to managing prey drive near water features. We tailor our approach to your lifestyle.',
  },
  {
    question: 'Do you offer free rescue support in Ponte Vedra?',
    answer:
      'Yes! Our Axiom Cares program provides free in-home visits for newly adopted or rescued dogs in the Ponte Vedra area. No judgment, no pressure, no bill.',
  },
];

export default function PonteVedraTrainingPage() {
  return (
    <div className="page-enter">
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden" aria-labelledby="pv-hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C10] via-[#050505] to-[#1A2030]" />
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 border border-[#FF5E00]/30 px-4 py-2 bg-[#050505]/60 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-[#FF5E00]" aria-hidden="true" />
            <span className="text-[#C5C6C7] font-bold tracking-[0.2em] uppercase text-sm">Ponte Vedra Beach, FL</span>
          </div>
          
          <h1 id="pv-hero-heading" className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[0.9] mb-6 text-white">
            Dog Training in <span className="text-[#FF5E00]">Ponte Vedra.</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed mb-10">
            Professional behavior modification and obedience training for Ponte Vedra Beach, 
            Ponte Vedra Isles, Palencia, and surrounding communities.
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
      <section className="py-24 bg-[#0B0C10] border-b border-[#1A2030]" aria-labelledby="pv-local-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="pv-local-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4">
              Training Built for <span className="text-white">Ponte Vedra Life.</span>
            </h2>
            <p className="text-[#C5C6C7] text-lg max-w-2xl mx-auto">
              From beach walks to golf course communities — your dog needs to navigate a unique environment.
            </p>
          </div>
          
          <StaggerContainer>
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#FF5E00] h-full">
                  <Waves className="w-8 h-8 text-[#FF5E00] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Beach &amp; Waterfront</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    Ponte Vedra Beach access means dogs need off-leash reliability around waves, wildlife, 
                    and other beachgoers. We train for real-world beach scenarios.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#7A8B66] h-full">
                  <TreePine className="w-8 h-8 text-[#7A8B66] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Golf &amp; Greenway Communities</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    Living in Sawgrass, Marsh Landing, or the Plantation means navigating golf carts, 
                    walkers, and water features. We train calm, controlled behavior in these environments.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#FF5E00] h-full">
                  <Home className="w-8 h-8 text-[#FF5E00] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Larger Properties</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    Ponte Vedra homes often have expansive yards and open spaces. We address boundary training, 
                    recall across larger properties, and proper guest greeting for estate-style living.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────── */}
      <section className="py-24 bg-[#050505] border-t border-[#1A2030]" aria-labelledby="pv-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="pv-services-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center">
            Training Services in Ponte Vedra
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/behavior-modification" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#FF5E00] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">Behavior Modification</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Address reactivity, aggression, anxiety, and resource guarding through science-based training.</p>
              <span className="text-[#FF5E00] font-semibold">Learn more →</span>
            </Link>
            <Link href="/services/advanced-obedience" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#7A8B66] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#7A8B66] transition-colors">Advanced Obedience</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Off-leash reliability, bulletproof recall, and calm behavior in public spaces.</p>
              <span className="text-[#7A8B66] font-semibold">Learn more →</span>
            </Link>
            <Link href="/community" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#FF5E00] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">Axiom Cares</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Free in-home visits for newly adopted dogs in Ponte Vedra. No judgment, no pressure, no bill.</p>
              <span className="text-[#FF5E00] font-semibold">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 bg-[#0B0C10] border-t border-[#1A2030]">
        <div className="max-w-4xl mx-auto px-4">
          <FAQSection items={faqItems} title="Ponte Vedra Dog Training FAQs" />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-[#050505] border-t border-[#1A2030]" aria-labelledby="pv-cta-heading">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 id="pv-cta-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]">
            Ready to Transform Your Dog?
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-10">Schedule your free consultation today. Serving Ponte Vedra Beach and surrounding communities.</p>
          <OpenModalButton className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center gap-3">
            Schedule Consultation <ArrowRight className="w-6 h-6" />
          </OpenModalButton>
        </div>
      </section>

      <FAQSchema items={faqItems} />
    </div>
  );
}
