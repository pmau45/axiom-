import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import OpenModalButton from '../../components/forms/OpenModalButton';
import JsonLd from '@/app/components/seo/JsonLd';
import {
  buildBreadcrumbList,
  buildFaqPageSchema,
  buildSchemaGraph,
  buildServiceSchema,
} from '@/app/lib/schema';

export const metadata: Metadata = {
  title: 'Resource Guarding Dog Training Jacksonville, FL | Axiom Canine',
  description:
    'Resource guarding training in Jacksonville, FL. Stop growling, snapping, or stiffening over food, toys, couches, and people with structured behavior modification.',
  keywords: [
    'resource guarding dog training Jacksonville',
    'dog food aggression trainer Jacksonville FL',
    'resource guarding behavior modification',
    'dog guarding toys training near me',
  ],
  alternates: {
    canonical: '/training-issues/resource-guarding',
  },
};

const signs = [
  'Growling, freezing, or snapping over food bowls or high-value chews',
  'Guarding toys, stolen items, or resting spots from people or other pets',
  'Body blocking, whale eye, or stiff posture when approached near a valued item',
  'Escalation when someone reaches toward the dog on furniture or in a crate',
  'Conflict between dogs in a multi-dog home around meals or attention',
];

const principles = [
  {
    title: 'Safety First',
    desc: 'We do not use reckless “take it away” drills that create bites. Management and controlled protocols protect people and pets while training progresses.',
  },
  {
    title: 'Change the Emotional Pattern',
    desc: 'Guarding is often about predicted loss. We teach that approach predicts good outcomes — not theft — while building clear obedience under pressure.',
  },
  {
    title: 'Owner Mechanics Matter',
    desc: 'Most guarding cases fail because household handling is inconsistent. We coach exact approaches, trade protocols, and daily structure.',
  },
];

const faqs = [
  {
    q: 'Is resource guarding the same as dominance?',
    a: 'Usually no. Many dogs guard because they have learned that valued items disappear when people approach. We treat the pattern, not a vague dominance story.',
  },
  {
    q: 'Can puppies grow out of resource guarding?',
    a: 'Some mild cases improve with structure. Growling or snapping should not be ignored — early training is safer and faster than waiting.',
  },
  {
    q: 'Do you work with food aggression?',
    a: 'Yes. Food guarding is one of the most common forms we address, along with toy, space, and person guarding.',
  },
  {
    q: 'When is board and train recommended?',
    a: 'When risk is high, multiple dogs are involved, or the home environment cannot safely run protocols yet. Assessment decides the path.',
  },
];


const pageJsonLd = buildSchemaGraph(
  buildServiceSchema({
    name: 'Resource Guarding Dog Training',
    description: 'Resource guarding training in Jacksonville, FL. Stop growling, snapping, or stiffening over food, toys, couches, and people with structured behavior modification.',
    path: '/training-issues/resource-guarding',
    serviceType: 'Resource Guarding Training',
  }),
  buildBreadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Resource Guarding', path: '/training-issues/resource-guarding' },
  ]),
  buildFaqPageSchema(faqs)
);

export default function ResourceGuardingPage() {
  return (
    <div className="page-enter">
      
      <JsonLd data={pageJsonLd} />
<section
        className="relative min-h-[65vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden bg-gradient-to-br from-[#FF5E00]/10 via-[#050505] to-[#050505]"
        aria-labelledby="rg-hero-heading"
      >
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <AlertTriangle className="w-12 h-12 text-[#FF5E00] mx-auto mb-6" aria-hidden="true" />
          <h1
            id="rg-hero-heading"
            className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[1] mb-6 text-white drop-shadow-2xl"
          >
            Resource Guarding Training in{' '}
            <span className="text-[#FF5E00]">Jacksonville</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed">
            Food, toys, couches, people — guarding is a safety issue. We address it with structure,
            clear protocols, and honest expectations.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#0B0C10] border-b border-[#1A2030]" aria-labelledby="rg-signs-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="rg-signs-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4">
            What Guarding Looks Like
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

      <section className="py-24 bg-[#050505] border-b border-[#1A2030]" aria-labelledby="rg-principles-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-12 justify-center">
            <ShieldCheck className="w-10 h-10 text-[#7A8B66] flex-shrink-0" aria-hidden="true" />
            <h2 id="rg-principles-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66]">
              Our Approach
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map(({ title, desc }) => (
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
            Related Paths
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: '/services/behavior-modification', title: 'Behavior Modification', desc: 'The broader framework for guarding and related conflict.' },
              { href: '/training-issues/aggression', title: 'Aggression Training', desc: 'When guarding has escalated into bites or serious risk.' },
              { href: '/services/board-and-train', title: 'Board & Train', desc: 'Immersive work when home safety is compromised.' },
            ].map(({ href, title, desc }) => (
              <Link key={href} href={href} className="bg-[#050505] border border-[#1A2030] hover:border-[#FF5E00] p-8 transition-colors group">
                <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-2 group-hover:text-[#FF5E00] transition-colors">{title}</h3>
                <p className="text-[#C5C6C7] text-sm leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#050505] border-b border-[#1A2030]" aria-labelledby="rg-faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="rg-faq-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center">
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

      <section className="py-24 bg-[#0B0C10] border-t border-[#1A2030]" aria-labelledby="rg-cta-heading">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 id="rg-cta-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]">
            Don&apos;t Wait for the Next Snap.
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-10">
            Describe the behavior honestly. Free assessment — call{' '}
            <a href="tel:9044587561" className="text-[#FF5E00] hover:text-white transition-colors">(904) 458-7561</a>.
          </p>
          <OpenModalButton
            className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center gap-3"
            ariaLabel="Start resource guarding intake"
            service="behavior"
          >
            Start Free Intake <ArrowRight className="w-6 h-6" aria-hidden="true" />
          </OpenModalButton>
        </div>
      </section>
    </div>
  );
}
