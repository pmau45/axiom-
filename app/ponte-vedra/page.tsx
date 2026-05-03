import type { Metadata } from 'next';
import { FAQSection, FAQSchema } from '@/app/components/ui/FAQSection';
import OpenModalButton from '@/app/components/forms/OpenModalButton';
import { StaggerContainer } from '@/app/components/animations/StaggerContainer';
import AnimatedSection from '@/app/components/animations/AnimatedSection';

export const metadata: Metadata = {
  title: 'Dog Training in Ponte Vedra, FL | Axiom Canine',
  description:
    'Professional dog training serving Ponte Vedra Beach. Behavior modification, obedience training, and rescue support. Call (904) 458-7561.',
  keywords: [
    'dog training Ponte Vedra',
    'dog trainer Ponte Vedra Beach',
    'behavior modification Ponte Vedra',
    'obedience training Ponte Vedra',
  ],
  openGraph: {
    title: 'Dog Training in Ponte Vedra, FL | Axiom Canine',
    description: 'Professional dog training serving Ponte Vedra Beach, FL',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Do you offer training services in Ponte Vedra Beach?',
    answer:
      'Yes! Axiom Canine serves the Ponte Vedra Beach area with in-home training, group classes, and board & train programs. We come to you for initial consultations and ongoing training sessions.',
  },
  {
    question: 'What areas of Ponte Vedra do you serve?',
    answer:
      'We service all of Ponte Vedra Beach including Ponte Vedra Isles, Palencia, and surrounding neighborhoods. We also serve Nocatee, St. Augustine, Jacksonville, and Nassau County.',
  },
  {
    question: 'How long does training typically take?',
    answer:
      'Timeline varies by dog and training goals. Behavior modification typically takes 4-12 weeks with consistent weekly sessions. Obedience training can take 6-8 weeks. We create customized plans during your free consultation.',
  },
  {
    question: 'Do you offer free rescue support?',
    answer:
      'Yes! Our Axiom Cares program provides free in-home visits for newly adopted or rescued dogs in the Ponte Vedra area to help with adjustment and early training. No judgment, no pressure, no bill.',
  },
  {
    question: 'What training methods do you use?',
    answer:
      'We use science-based, positive reinforcement training methods combined with structure and consistency. We address the root causes of behavioral issues, not just symptoms. Our philosophy is Structure. Consistency. Results.',
  },
];

export default function PonteVedraTrainingPage() {
  return (
    <div className="page-enter">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden bg-gradient-to-br from-[#FF5E00]/10 via-[#050505] to-[#050505]" aria-labelledby="pv-hero-heading">
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <h1 id="pv-hero-heading" className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[1] mb-6 text-white drop-shadow-2xl">
            Dog Training in <span className="text-[#FF5E00]">Ponte Vedra Beach</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed mb-10">
            Professional behavior modification and obedience training for Ponte Vedra families
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
      <section className="py-24 bg-[#0B0C10] border-b border-[#1A2030]" aria-labelledby="pv-why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="pv-why-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center">Why Axiom Canine for Ponte Vedra?</h2>
          <StaggerContainer>
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#FF5E00] h-full">
                  <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-3">Local Expertise</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">Serving Ponte Vedra Beach for years. We understand the community and your dogs&apos; unique needs.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#FF5E00] h-full">
                  <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-3">In-Home Training</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">We come to your Ponte Vedra home. Train in the environment where your dog spends most time.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#FF5E00] h-full">
                  <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-3">Free Rescue Support</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">Axiom Cares offers free in-home visits for rescue and adopted dogs in Ponte Vedra.</p>
                </div>
              </AnimatedSection>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#050505] border-t border-[#1A2030]" aria-labelledby="pv-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="pv-services-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center">Training Services in Ponte Vedra</h2>
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
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Free in-home visits for newly adopted dogs in Ponte Vedra. Help with adjustment, basic training, and behavior assessment.</p>
              <span className="text-[#FF5E00] font-semibold">Learn more &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0B0C10] border-t border-[#1A2030]">
        <div className="max-w-4xl mx-auto px-4">
          <FAQSection items={faqItems} title="Dog Training FAQs for Ponte Vedra" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#050505] border-t border-[#1A2030]" aria-labelledby="pv-cta-heading">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 id="pv-cta-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]">Ready to Transform Your Dog?</h2>
          <p className="text-[#C5C6C7] text-lg mb-10">Schedule your free consultation today. Serving Ponte Vedra Beach and surrounding areas.</p>
          <OpenModalButton className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center gap-3">
            Schedule Consultation
          </OpenModalButton>
        </div>
      </section>

      <FAQSchema items={faqItems} />
    </div>
  );
}
