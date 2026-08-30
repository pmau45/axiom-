import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';
import OpenModalButton from '../../components/forms/OpenModalButton';
import JsonLd from '@/app/components/seo/JsonLd';
import {
  buildBreadcrumbList,
  buildFaqPageSchema,
  buildSchemaGraph,
  buildServiceSchema,
} from '@/app/lib/schema';

export const metadata: Metadata = {
  title: 'Separation Anxiety Dog Training Jacksonville, FL | Axiom Canine',
  description:
    'Separation anxiety dog training in Jacksonville, FL. Stop destructive alone-time panic with structure, gradual independence, and owner coaching across NE Florida.',
  keywords: [
    'separation anxiety dog training Jacksonville',
    'dog separation anxiety trainer near me',
    'dog alone time training Jacksonville FL',
    'separation anxiety board and train Florida',
  ],
  alternates: {
    canonical: '/training-issues/separation-anxiety',
  },
};

const signs = [
  'Destructive chewing, digging, or door-scratching only when left alone',
  'Constant barking, howling, or whining after you leave',
  'House soiling despite being house-trained when you are home',
  'Panic at keys, shoes, or other departure cues',
  'Inability to settle in a crate or designated place without you present',
];

const approach = [
  {
    title: 'Diagnose the Pattern',
    desc: 'True separation anxiety is different from boredom or under-exercise. We identify what is driving the panic before building a plan.',
  },
  {
    title: 'Build Independence on Purpose',
    desc: 'Place work, crate structure, and graduated absences teach your dog that alone time is predictable — not abandonment.',
  },
  {
    title: 'Stabilize the Household',
    desc: 'Owners often accidentally reinforce clinginess. We rewrite departure routines so calm behavior is what gets practiced.',
  },
];

const faqs = [
  {
    q: 'Is separation anxiety the same as boredom?',
    a: 'No. Bored dogs often need more exercise and enrichment. Anxious dogs panic when left — even after exercise. Treatment paths are different.',
  },
  {
    q: 'Can board and train fix separation anxiety?',
    a: 'It can help build independence skills, but owner routines must change too. Without handoff work at home, the panic often returns.',
  },
  {
    q: 'Why does this spike after travel or back-to-school?',
    a: 'Schedule shocks matter. Dogs that had constant company suddenly face long absences. Structure before the schedule change prevents a lot of cases.',
  },
  {
    q: 'Do you serve areas outside Jacksonville?',
    a: 'Yes — Ponte Vedra, Nocatee, St. Augustine, Orange Park, Jacksonville Beach, Fernandina Beach, Palm Coast, and Brunswick, GA.',
  },
];


const pageJsonLd = buildSchemaGraph(
  buildServiceSchema({
    name: 'Separation Anxiety Dog Training',
    description: 'Separation anxiety dog training in Jacksonville, FL. Stop destructive alone-time panic with structure, gradual independence, and owner coaching across NE Florida.',
    path: '/training-issues/separation-anxiety',
    serviceType: 'Separation Anxiety Training',
  }),
  buildBreadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Separation Anxiety', path: '/training-issues/separation-anxiety' },
  ]),
  buildFaqPageSchema(faqs)
);

export default function SeparationAnxietyPage() {
  return (
    <div className="page-enter">
      
      <JsonLd data={pageJsonLd} />
<section
        className="relative min-h-[65vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden bg-gradient-to-br from-[#FF5E00]/10 via-[#050505] to-[#050505]"
        aria-labelledby="sa-hero-heading"
      >
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <AlertTriangle className="w-12 h-12 text-[#FF5E00] mx-auto mb-6" aria-hidden="true" />
          <h1
            id="sa-hero-heading"
            className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[1] mb-6 text-white drop-shadow-2xl"
          >
            Separation Anxiety Training in{' '}
            <span className="text-[#FF5E00]">Jacksonville</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed">
            Alone-time panic is not a manners problem. It is a structure and independence problem —
            and it is trainable with the right plan.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#0B0C10] border-b border-[#1A2030]" aria-labelledby="sa-signs-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="sa-signs-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4">
            Common Signs
          </h2>
          <ul className="space-y-4 mt-8">
            {signs.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#C5C6C7]">
                <CheckCircle2 className="w-5 h-5 text-[#FF5E00] flex-shrink-0 mt-0.5" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 bg-[#050505] border-b border-[#1A2030]" aria-labelledby="sa-approach-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="sa-approach-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center">
            How We Approach It
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {approach.map(({ title, desc }) => (
              <div key={title} className="bg-[#1A2030] p-8 border-l-4 border-[#FF5E00]">
                <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">{title}</h3>
                <p className="text-[#C5C6C7] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0B0C10] border-b border-[#1A2030]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-3xl font-bold uppercase tracking-widest text-[#7A8B66] mb-8">
            Programs That Help
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: '/services/in-home-dog-training', title: 'In-Home Training', desc: 'Rewrite departure routines where the panic actually happens.' },
              { href: '/services/board-and-train', title: 'Board & Train', desc: 'Immersive independence building for severe cases.' },
              { href: '/services/puppy-training', title: 'Puppy Training', desc: 'Prevent alone-time issues before they start.' },
            ].map(({ href, title, desc }) => (
              <Link key={href} href={href} className="bg-[#050505] border border-[#1A2030] hover:border-[#FF5E00] p-8 transition-colors group">
                <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-2 group-hover:text-[#FF5E00] transition-colors">{title}</h3>
                <p className="text-[#C5C6C7] text-sm leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#050505] border-b border-[#1A2030]" aria-labelledby="sa-faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="sa-faq-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group bg-[#0B0C10] border border-[#1A2030] open:border-[#7A8B66] transition-colors">
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none select-none font-oswald text-lg uppercase tracking-widest text-white hover:text-[#7A8B66] transition-colors">
                  <span>{q}</span>
                  <span className="text-[#7A8B66] font-bold text-2xl leading-none group-open:rotate-45 transition-transform flex-shrink-0" aria-hidden="true">+</span>
                </summary>
                <div className="px-6 pb-6 text-[#C5C6C7] leading-relaxed border-t border-[#1A2030] pt-4">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0C10] border-t border-[#1A2030]" aria-labelledby="sa-cta-heading">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 id="sa-cta-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]">
            Get a Real Plan for Alone Time.
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-10">
            Free assessment. Call{' '}
            <a href="tel:9044587561" className="text-[#FF5E00] hover:text-white transition-colors">(904) 458-7561</a>.
          </p>
          <OpenModalButton
            className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center gap-3"
            ariaLabel="Start separation anxiety intake"
            service="in-home"
          >
            Start Free Intake <ArrowRight className="w-6 h-6" aria-hidden="true" />
          </OpenModalButton>
        </div>
      </section>
    </div>
  );
}
