import type { Metadata } from 'next';
import { FAQSection, FAQSchema } from '@/app/components/ui/FAQSection';
import Link from 'next/link';
import OpenModalButton from '@/app/components/forms/OpenModalButton';
import { StaggerContainer } from '@/app/components/animations/StaggerContainer';
import AnimatedSection from '@/app/components/animations/AnimatedSection';
import { ArrowRight, MapPin, Landmark, Palmtree, Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dog Training in St. Augustine, FL | Axiom Canine',
  description:
    'Professional dog training serving St. Augustine and the historic district. Behavior modification and obedience training for Florida&apos;s oldest city — from downtown distractions to beach reliability. Call (904) 458-7561.',
  keywords: [
    'dog training St. Augustine',
    'dog trainer St. Augustine FL',
    'behavior modification St. Augustine',
    'obedience training St. Augustine',
    'historic district dog training',
    'St. Augustine Beach dog trainer',
  ],
  alternates: {
    canonical: '/st-augustine',
  },
  openGraph: {
    title: 'Dog Training in St. Augustine, FL | Axiom Canine',
    description: 'Professional dog training serving St. Augustine and the historic district.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Do you offer training services in St. Augustine?',
    answer:
      'Yes! Axiom Canine serves all of St. Augustine including the historic district, St. Augustine Beach, Vilano Beach, and World Golf Village. We provide in-home training, board-and-train programs, and behavioral consultations throughout the area.',
  },
  {
    question: 'What makes St. Augustine dog training unique?',
    answer:
      'St. Augustine presents unique challenges — heavy tourist foot traffic in the historic district, horse-drawn carriages, outdoor dining, and beach access. We train dogs to remain calm and controlled amid these specific distractions.',
  },
  {
    question: 'Can you help with dog reactivity on St. George Street?',
    answer:
      'Absolutely. The narrow, crowded streets of downtown St. Augustine are a major trigger for reactive dogs. We work on desensitization to crowds, noise, and movement in these high-stimulation environments.',
  },
  {
    question: 'How long does training typically take?',
    answer:
      'Behavior modification typically takes 4-12 weeks with consistent weekly sessions. Obedience training can take 6-8 weeks. We create customized plans during your free consultation.',
  },
  {
    question: 'Do you offer free rescue support in St. Augustine?',
    answer:
      'Yes! Our Axiom Cares program provides free in-home visits for newly adopted or rescued dogs in the St. Augustine area. No judgment, no pressure, no bill.',
  },
];

export default function StAugustineTrainingPage() {
  return (
    <div className="page-enter">
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden" aria-labelledby="staug-hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C10] via-[#050505] to-[#1A2030]" />
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 border border-[#FF5E00]/30 px-4 py-2 bg-[#050505]/60 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-[#FF5E00]" aria-hidden="true" />
            <span className="text-[#C5C6C7] font-bold tracking-[0.2em] uppercase text-sm">St. Augustine, FL</span>
          </div>
          
          <h1 id="staug-hero-heading" className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[0.9] mb-6 text-white">
            Dog Training in <span className="text-[#FF5E00]">St. Augustine.</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed mb-10">
            Professional behavior modification and obedience training for Florida&apos;s oldest city — 
            from the historic district to the beach.
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
      <section className="py-24 bg-[#0B0C10] border-b border-[#1A2030]" aria-labelledby="staug-local-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="staug-local-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4">
              Training for <span className="text-white">The Nation&apos;s Oldest City.</span>
            </h2>
            <p className="text-[#C5C6C7] text-lg max-w-2xl mx-auto">
              From the Historic District and St. George Street to Anastasia Island, St. Augustine
              Beach, Vilano Beach, and World Golf Village, St. Augustine requires a dog that can
              handle changing environments with composure.
            </p>
          </div>
          
          <StaggerContainer>
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#FF5E00] h-full">
                  <Landmark className="w-8 h-8 text-[#FF5E00] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Historic District Distractions</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    St. George Street, the Historic District, and the narrow downtown blocks mean
                    crowds, horse-drawn carriages, street performers, and constant stimulation. We
                    train calm, controlled behavior for dogs that struggle with reactive outbursts
                    amid downtown chaos.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#7A8B66] h-full">
                  <Palmtree className="w-8 h-8 text-[#7A8B66] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Beach &amp; Waterfront Control</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    Anastasia Island, St. Augustine Beach, Vilano Beach, and the Intracoastal offer
                    endless distractions. We build off-leash reliability and water safety for
                    coastal living.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#FF5E00] h-full">
                  <Camera className="w-8 h-8 text-[#FF5E00] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Outdoor Dining &amp; Tourism</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    From the restaurants near the Plaza to the neighborhoods around World Golf
                    Village, St. Augustine&apos;s tourism economy means dogs must behave around outdoor
                    diners, tour groups, and constant foot traffic. We train public neutrality.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────── */}
      <section className="py-24 bg-[#050505] border-t border-[#1A2030]" aria-labelledby="staug-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="staug-services-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center">
            Training Services in St. Augustine
          </h2>
          <p className="text-[#C5C6C7] text-lg leading-relaxed text-center max-w-4xl mx-auto mb-12">
            If your dog is struggling with crowded sidewalks, visitor-heavy public spaces, or
            beachside overstimulation, our{' '}
            <Link href="/services/behavior-modification" className="text-[#FF5E00] hover:text-white transition-colors">
              behavior modification services
            </Link>{' '}
            can address the root cause. We also help owners working through{' '}
            <Link href="/training-issues/reactive-dog" className="text-[#FF5E00] hover:text-white transition-colors">
              reactive dog behavior
            </Link>{' '}
            and more serious{' '}
            <Link href="/training-issues/aggression" className="text-[#FF5E00] hover:text-white transition-colors">
              aggression issues
            </Link>{' '}
            that show up around tourists, other dogs, and high-pressure environments in St.
            Augustine.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/behavior-modification" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#FF5E00] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">Behavior Modification</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Address reactivity, aggression, and anxiety in St. Augustine&apos;s high-distraction environment.</p>
              <span className="text-[#FF5E00] font-semibold">Learn more →</span>
            </Link>
            <Link href="/services/advanced-obedience" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#7A8B66] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#7A8B66] transition-colors">Advanced Obedience</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Off-leash reliability for beach walks, downtown strolls, and outdoor dining.</p>
              <span className="text-[#7A8B66] font-semibold">Learn more →</span>
            </Link>
            <Link href="/community" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#FF5E00] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">Axiom Cares</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Free in-home visits for newly adopted dogs in St. Augustine. No judgment, no pressure, no bill.</p>
              <span className="text-[#FF5E00] font-semibold">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 bg-[#0B0C10] border-t border-[#1A2030]">
        <div className="max-w-4xl mx-auto px-4">
          <FAQSection items={faqItems} title="St. Augustine Dog Training FAQs" />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-[#050505] border-t border-[#1A2030]" aria-labelledby="staug-cta-heading">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 id="staug-cta-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]">
            Ready to Transform Your Dog?
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-10">Schedule your free consultation today. Serving St. Augustine and surrounding areas.</p>
          <OpenModalButton className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center gap-3">
            Schedule Consultation <ArrowRight className="w-6 h-6" />
          </OpenModalButton>
        </div>
      </section>

      <FAQSchema items={faqItems} />
    </div>
  );
}
