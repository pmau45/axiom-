import type { Metadata } from 'next';
import { FAQSection, FAQSchema } from '@/app/components/ui/FAQSection';
import OpenModalButton from '@/app/components/forms/OpenModalButton';
import { StaggerContainer } from '@/app/components/animations/StaggerContainer';
import AnimatedSection from '@/app/components/animations/AnimatedSection';

export const metadata: Metadata = {
  title: 'Dog Training in St. Augustine, FL | Axiom Canine',
  description:
    'Professional dog training serving St. Augustine. Behavior modification, obedience training, and rescue support. Call (904) 458-7561.',
  keywords: [
    'dog training St. Augustine',
    'dog trainer St. Augustine FL',
    'behavior modification St. Augustine',
    'obedience training St. Augustine',
  ],
  openGraph: {
    title: 'Dog Training in St. Augustine, FL | Axiom Canine',
    description: 'Professional dog training serving St. Augustine, FL',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Do you offer training services in St. Augustine?',
    answer:
      'Yes! Axiom Canine serves the St. Augustine area with in-home training, group classes, and board & train programs. We come to you for initial consultations and ongoing training sessions.',
  },
  {
    question: 'What areas of St. Augustine do you serve?',
    answer:
      'We service St. Augustine and surrounding areas. We also serve Ponte Vedra Beach, Nocatee, Jacksonville, and Nassau County with professional dog training.',
  },
  {
    question: 'How long does training typically take?',
    answer:
      'Timeline varies by dog and training goals. Behavior modification typically takes 4-12 weeks with consistent weekly sessions. Obedience training can take 6-8 weeks. We create customized plans during your free consultation.',
  },
  {
    question: 'Do you offer free rescue support?',
    answer:
      'Yes! Our Axiom Cares program provides free in-home visits for newly adopted or rescued dogs in St. Augustine to help with adjustment and early training. No judgment, no pressure, no bill.',
  },
  {
    question: 'What training philosophy do you use?',
    answer:
      'We use science-based, positive reinforcement training combined with structure and consistency. We focus on addressing root causes of behavioral problems, not just masking symptoms. Structure. Consistency. Results.',
  },
];

export default function StAugustineTrainingPage() {
  return (
    <div className="page-enter">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden bg-gradient-to-br from-[#FF5E00]/10 via-[#050505] to-[#050505]" aria-labelledby="staug-hero-heading">
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <h1 id="staug-hero-heading" className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[1] mb-6 text-white drop-shadow-2xl">
            Dog Training in <span className="text-[#FF5E00]">St. Augustine</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed mb-10">
            Professional behavior modification and obedience training for St. Augustine families
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <OpenModalButton className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-lg font-bold uppercase tracking-widest px-8 py-4 inline-flex items-center gap-2">
              Free Consultation
            </OpenModalButton>
            <a href="tel:+19044587561" className="btn-rugged border-2 border-[#FF5E00] text-[#FF5E00] font-oswald text-lg font-bold uppercase tracking-widest px-8 py-4 inline-flex items-center gap-2 hover:bg-[#FF5E00] hover:text-[#050505] transition-colors">
              (904) 458-7561
            </a>
          </div>
        </div>
      </section>

      {/* Why Axiom Canine */}
      <section className="py-24 bg-[#0B0C10] border-b border-[#1A2030]" aria-labelledby="staug-why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="staug-why-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center">Why Axiom Canine for St. Augustine?</h2>
          <StaggerContainer>
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#FF5E00] h-full">
                  <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-3">Local Expertise</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">Serving St. Augustine for years. We understand the community and your dogs&apos; unique needs.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#FF5E00] h-full">
                  <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-3">In-Home Training</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">We come to your St. Augustine home. Train in the environment where your dog spends most time.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#FF5E00] h-full">
                  <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-3">Free Rescue Support</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">Axiom Cares offers free in-home visits for rescue and adopted dogs in St. Augustine.</p>
                </div>
              </AnimatedSection>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#050505] border-t border-[#1A2030]" aria-labelledby="staug-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="staug-services-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center">Training Services in St. Augustine</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/services/behavior-modification" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#FF5E00] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">Behavior Modification</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Address reactivity, aggression, anxiety, and other behavioral challenges through science-based training.</p>
              <span className="text-[#FF5E00] font-semibold">Learn more &rarr;</span>
            </a>
            <a href="/services/advanced-obedience" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#7A8B66] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#7A8B66] transition-colors">Advanced Obedience</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Build bulletproof recall, off-leash reliability, and public neutrality for your dog.</p>
              <span className="text-[#7A8B66] font-semibold">Learn more &rarr;</span>
            </a>
            <a href="/community" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#FF5E00] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">Axiom Cares</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Free in-home visits for newly adopted dogs in St. Augustine. Help with adjustment, basic training, and behavior assessment.</p>
              <span className="text-[#FF5E00] font-semibold">Learn more &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0B0C10] border-t border-[#1A2030]">
        <div className="max-w-4xl mx-auto px-4">
          <FAQSection items={faqItems} title="Dog Training FAQs for St. Augustine" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#050505] border-t border-[#1A2030]" aria-labelledby="staug-cta-heading">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 id="staug-cta-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]">Ready to Transform Your Dog?</h2>
          <p className="text-[#C5C6C7] text-lg mb-10">Schedule your free consultation today. Serving St. Augustine and surrounding areas.</p>
          <OpenModalButton className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center gap-3">
            Schedule Consultation
          </OpenModalButton>
        </div>
      </section>

      <FAQSchema items={faqItems} />
    </div>
  );
}
