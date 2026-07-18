import type { Metadata } from 'next';
import { FAQSection } from '@/app/components/ui/FAQSection';
import Link from 'next/link';
import OpenModalButton from '@/app/components/forms/OpenModalButton';
import { StaggerContainer } from '@/app/components/animations/StaggerContainer';
import AnimatedSection from '@/app/components/animations/AnimatedSection';
import { ArrowRight, MapPin, Droplets, Bike, Users } from 'lucide-react';
import JsonLd from '@/app/components/seo/JsonLd';
import {
  buildBreadcrumbList,
  buildFaqPageSchema,
  buildLocationServiceSchema,
  buildSchemaGraph,
} from '@/app/lib/schema';

export const metadata: Metadata = {
  title: {
    absolute: 'Board & Train Nocatee FL | Axiom Canine',
  },
  description:
    'Premium board and train programs serving Nocatee, Ponte Vedra, and St. Augustine. Reactivity and obedience training with owner education. Limited spots available.',
  keywords: [
    'dog training Nocatee',
    'board and train Nocatee',
    'dog trainer Nocatee FL',
    'behavior modification Nocatee',
    'obedience training Nocatee',
    'Nocatee Splash Park dog training',
    'dog trainer near Nocatee FL',
  ],
  alternates: {
    canonical: '/nocatee',
  },
  openGraph: {
    title: 'Board & Train Nocatee FL | Axiom Canine',
    description:
      'Premium board and train programs serving Nocatee, Ponte Vedra, and St. Augustine. Reactivity and obedience with owner education.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Do you offer training services in Nocatee?',
    answer:
      'Yes! Axiom Canine serves the entire Nocatee community including Del Webb, Coastal Oaks, Greenleaf Park, and all Nocatee neighborhoods. We provide in-home training, board-and-train programs, and behavioral consultations.',
  },
  {
    question: 'What makes Nocatee dog training different?',
    answer:
      'Nocatee is a master-planned community with unique features like the Splash Water Park, Greenway trails, and extensive dog-friendly amenities. We train dogs to handle these environments — from trail etiquette to calm behavior around the Splash Park crowds.',
  },
  {
    question: 'Do you train dogs for the Nocatee Greenway trails?',
    answer:
      'Absolutely. The Nocatee Greenway is one of the best places to walk your dog — but it requires reliable recall, proper trail etiquette, and control around cyclists and other dogs. We specifically train for these real-world Greenway scenarios.',
  },
  {
    question: 'How long does training typically take?',
    answer:
      'Behavior modification typically takes 4-12 weeks with consistent weekly sessions. Obedience training can take 6-8 weeks. We create customized plans during your free consultation based on your dog\'s needs and your lifestyle in Nocatee.',
  },
  {
    question: 'Do you offer free rescue support in Nocatee?',
    answer:
      'Yes! Our Axiom Cares program provides free in-home visits for newly adopted or rescued dogs in the Nocatee area. No judgment, no pressure, no bill.',
  },
];


const pageJsonLd = buildSchemaGraph(
  buildLocationServiceSchema('Nocatee, FL', '/nocatee', 'Dog training in Nocatee, FL — trail manners, reactivity help, and in-home obedience for Nocatee families.'),
  buildBreadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Dog Training in Nocatee, FL', path: '/nocatee' },
  ]),
  buildFaqPageSchema(faqItems)
);

export default function NocateeTrainingPage() {
  return (
    <div className="page-enter">
      
      <JsonLd data={pageJsonLd} />
{/* ── Hero ──────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden" aria-labelledby="nocatee-hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C10] via-[#050505] to-[#1A2030]" />
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 border border-[#7A8B66]/30 px-4 py-2 bg-[#050505]/60 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-[#7A8B66]" aria-hidden="true" />
            <span className="text-[#C5C6C7] font-bold tracking-[0.2em] uppercase text-sm">Nocatee, FL</span>
          </div>
          
          <h1 id="nocatee-hero-heading" className="font-oswald text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[0.95] mb-6 text-white">
            Board &amp; Train in Nocatee –{' '}
            <span className="text-[#7A8B66]">Professional Results</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed mb-10">
            Professional behavior modification and obedience training for Nocatee&apos;s 
            family-centered, active community.
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
      <section className="py-24 bg-[#0B0C10] border-b border-[#1A2030]" aria-labelledby="nocatee-local-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="nocatee-local-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4">
              Built for <span className="text-white">Nocatee&apos;s Active Lifestyle.</span>
            </h2>
            <p className="text-[#C5C6C7] text-lg max-w-2xl mx-auto">
              From the Splash Water Park to the Greenway trails — your dog should be able to enjoy everything Nocatee offers.
            </p>
          </div>
          
          <StaggerContainer>
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#7A8B66] h-full">
                  <Droplets className="w-8 h-8 text-[#7A8B66] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Splash Water Park Etiquette</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    Nocatee Splash Park draws crowds and excitement. We train dogs to remain calm around 
                    water features, crowds, and the high energy of Splash Park days.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#FF5E00] h-full">
                  <Bike className="w-8 h-8 text-[#FF5E00] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Greenway Trail Manners</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    The Nocatee Greenway is perfect for walking — but requires control around cyclists, 
                    other dogs, and wildlife. We train reliable trail behavior and recall.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="bg-[#1A2030] p-8 border-l-4 border-[#7A8B66] h-full">
                  <Users className="w-8 h-8 text-[#7A8B66] mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">Family-Friendly Training</h3>
                  <p className="text-[#C5C6C7] leading-relaxed">
                    Nocatee is built for families. We train dogs to behave safely around children, 
                    guests, and the busy, social atmosphere of this community.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────── */}
      <section className="py-24 bg-[#050505] border-t border-[#1A2030]" aria-labelledby="nocatee-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="nocatee-services-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center">
            Training Services in Nocatee
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/behavior-modification" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#FF5E00] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">Behavior Modification</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Address reactivity, aggression, anxiety, and resource guarding through science-based training.</p>
              <span className="text-[#FF5E00] font-semibold">Learn more →</span>
            </Link>
            <Link href="/services/advanced-obedience" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#7A8B66] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#7A8B66] transition-colors">Advanced Obedience</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Off-leash reliability for Greenway trails, Splash Park, and neighborhood walks.</p>
              <span className="text-[#7A8B66] font-semibold">Learn more →</span>
            </Link>
            <Link href="/community" className="bg-[#1A2030] p-8 border border-[#1A2030] hover:border-[#FF5E00] transition-colors group">
              <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">Axiom Cares</h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-4">Free in-home visits for newly adopted dogs in Nocatee. No judgment, no pressure, no bill.</p>
              <span className="text-[#FF5E00] font-semibold">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 bg-[#0B0C10] border-t border-[#1A2030]">
        <div className="max-w-4xl mx-auto px-4">
          <FAQSection items={faqItems} title="Nocatee Dog Training FAQs" />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-[#050505] border-t border-[#1A2030]" aria-labelledby="nocatee-cta-heading">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 id="nocatee-cta-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]">
            Ready to Transform Your Dog?
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-10">Schedule your free consultation today. Serving Nocatee and surrounding communities.</p>
          <OpenModalButton className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center gap-3">
            Schedule Consultation <ArrowRight className="w-6 h-6" />
          </OpenModalButton>
        </div>
      </section>
</div>
  );
}
