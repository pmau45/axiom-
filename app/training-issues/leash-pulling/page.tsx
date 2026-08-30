import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import OpenModalButton from '../../components/forms/OpenModalButton';
import JsonLd from '@/app/components/seo/JsonLd';
import {
  buildBreadcrumbList,
  buildFaqPageSchema,
  buildSchemaGraph,
  buildServiceSchema,
} from '@/app/lib/schema';

export const metadata: Metadata = {
  title: 'Dog Leash Pulling Training Jacksonville, FL',
  description:
    'Your dog pulling on leash is not inevitable. Axiom Canine addresses leash pulling in Jacksonville, FL by teaching real loose-leash walking through structure and handler technique.',
  alternates: {
    canonical: '/training-issues/leash-pulling',
  },
};

const symptoms = [
  'Your dog hits the end of the leash within ten feet of your front door',
  'Walking becomes a physical battle that leaves you exhausted',
  'Your dog pulls toward every smell, person, or dog they see',
  'You\'ve tried stopping, turning, treats — nothing creates lasting change',
  'Walks have become something you dread instead of enjoy',
];

const whyItHappens = [
  {
    title: 'The Leash Has Never Meant Anything',
    desc: 'If a dog has been allowed to pull and still get what they want, the leash becomes just a physical connection — not a communication tool. The dog has learned that pulling works.',
  },
  {
    title: 'No Foundation in Loose-Leash Expectations',
    desc: 'Loose-leash walking is a trained skill, not a default behavior. Dogs must be taught specifically to walk in position and that tension on the leash has consequences.',
  },
  {
    title: 'High Environmental Arousal',
    desc: 'Some dogs are so stimulated by the outdoor environment that their arousal overwhelms any handler cues. The root issue is the arousal, not the pulling specifically.',
  },
];

const process = [
  {
    step: '01',
    title: 'Establish Handler Communication',
    desc: 'The dog must understand that the leash is meaningful. We establish clear leash pressure communication before expecting loose-leash behavior.',
  },
  {
    step: '02',
    title: 'Teach the Position',
    desc: 'The dog learns exactly where they\'re supposed to be relative to the handler. Not a vague "near my side" — a specific, reliable position.',
  },
  {
    step: '03',
    title: 'Build Duration & Distance',
    desc: 'Once the position is solid in a low-distraction environment, we build duration and begin adding real-world distractions systematically.',
  },
  {
    step: '04',
    title: 'Owner Technique',
    desc: 'Your timing and mechanics matter. We coach your handling technique so the dog gets consistent communication — not mixed signals.',
  },
];

const faqs = [
  {
    q: 'Can I stop leash pulling with treats alone?',
    a: 'Treats can be useful as a reinforcement tool, but treat-based methods alone rarely produce reliable loose-leash walking because they don\'t address the underlying drive to get somewhere. We use structured techniques that create clear expectations.',
  },
  {
    q: 'What equipment do you recommend for leash pullers?',
    a: 'Equipment recommendations depend on the dog and the handler. We don\'t have a one-size-fits-all tool recommendation — we assess and advise during the intake and evaluation.',
  },
  {
    q: 'My dog pulls only sometimes — does that still need training?',
    a: 'Inconsistent behavior is often harder to address than consistent behavior. If your dog knows they might get away with pulling, the pulling will persist. Clear, consistent expectations are the foundation.',
  },
  {
    q: 'How long does it take to stop leash pulling?',
    a: 'Depends on the dog\'s history, the severity, and owner consistency between sessions. Loose-leash walking fundamentals can improve significantly in a focused block of training. Maintenance requires daily practice.',
  },
];


const pageJsonLd = buildSchemaGraph(
  buildServiceSchema({
    name: 'Leash Pulling Dog Training',
    description: 'Your dog pulling on leash is not inevitable. Axiom Canine addresses leash pulling in Jacksonville, FL by teaching real loose-leash walking through structure and handler technique.',
    path: '/training-issues/leash-pulling',
    serviceType: 'Leash Manners Training',
  }),
  buildBreadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Leash Pulling', path: '/training-issues/leash-pulling' },
  ]),
  buildFaqPageSchema(faqs)
);

export default function LeashPullingPage() {
  return (
    <div className="page-enter">
      
      <JsonLd data={pageJsonLd} />
{/* ── Hero ──────────────────────────────────────── */}
      <section
        className="relative min-h-[65vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden bg-gradient-to-br from-[#7A8B66]/10 via-[#050505] to-[#050505]"
        aria-labelledby="leash-hero-heading"
      >
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <h1
            id="leash-hero-heading"
            className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[1] mb-6 text-white drop-shadow-2xl"
          >
            Walks Should Not{' '}
            <span className="text-[#7A8B66]">Be a Battle.</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed">
            Leash pulling is one of the most common and most correctable dog behaviors. It
            doesn&apos;t require endless treats or expensive gadgets — it requires a structured,
            consistent approach and the right handler technique.
          </p>
        </div>
      </section>

      {/* ── Symptoms ──────────────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="leash-symptoms-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="leash-symptoms-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4"
          >
            Does This Sound Like Your Walk?
          </h2>
          <ul className="space-y-4 mt-8">
            {symptoms.map((symptom) => (
              <li key={symptom} className="flex items-start gap-4 text-[#C5C6C7] text-lg">
                <CheckCircle2 className="w-5 h-5 text-[#7A8B66] flex-shrink-0 mt-0.5" aria-hidden="true" />
                {symptom}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Why It Happens ────────────────────────────── */}
      <section
        className="py-24 bg-[#050505] border-b border-[#1A2030]"
        aria-labelledby="leash-why-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              id="leash-why-heading"
              className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4"
            >
              Why It Keeps Happening
            </h2>
            <p className="text-[#C5C6C7] text-lg leading-relaxed">
              Leash pulling is a learned behavior that gets reinforced every time the dog
              gets what they want by pulling. Understanding the pattern is the first step
              to breaking it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyItHappens.map(({ title, desc }) => (
              <div key={title} className="bg-[#0B0C10] border-t-4 border-[#7A8B66] p-8">
                <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-4">
                  {title}
                </h3>
                <p className="text-[#C5C6C7] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Jacksonville Context ──────────────────────── */}
      <section
        className="py-16 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="leash-jax-walks-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="leash-jax-walks-heading"
            className="font-oswald text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-6"
          >
            Leash Pulling Solutions for Jacksonville Walks
          </h2>
          <p className="text-[#C5C6C7] text-lg leading-relaxed">
            Jacksonville walks can shift fast from quiet neighborhood sidewalks to busy trails,
            parks, and storefronts with bikes, joggers, and other dogs passing close by. We build
            loose-leash skills that hold up outside the driveway so your dog can stay connected to
            you through real local distractions instead of dragging you from one trigger to the
            next.
          </p>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="leash-process-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              id="leash-process-heading"
              className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4"
            >
              How We Fix It
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="bg-[#050505] border border-[#1A2030] p-8 flex gap-6">
                <span
                  className="font-oswald text-4xl font-bold text-[#7A8B66]/30 flex-shrink-0 leading-none"
                  aria-hidden="true"
                >
                  {step}
                </span>
                <div>
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">
                    {title}
                  </h3>
                  <p className="text-[#C5C6C7] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── High Arousal Context ──────────────────────── */}
      <section
        className="py-16 bg-[#050505] border-b border-[#1A2030]"
        aria-labelledby="leash-jax-arousal-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="leash-jax-arousal-heading"
            className="font-oswald text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-6"
          >
            Handling High Arousal at Jax Dog Parks & Beaches
          </h2>
          <p className="text-[#C5C6C7] text-lg leading-relaxed">
            For many dogs, leash pulling spikes around the places they find most exciting. Whether
            that is a crowded dog park, the beach access points, or a trail packed with movement,
            the real issue is often over-arousal. We teach dogs how to downshift, re-engage with
            the handler, and maintain control before excitement turns every outing into a tug-of-war.
          </p>
        </div>
      </section>

      {/* ── Related Programs ──────────────────────────── */}
      <section
        className="py-16 bg-[#050505] border-b border-[#1A2030]"
        aria-labelledby="leash-programs-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="leash-programs-heading"
            className="font-oswald text-3xl font-bold uppercase tracking-widest text-[#7A8B66] mb-8"
          >
            Best Programs for Leash Pulling
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'In-Home Training', href: '/services/in-home-dog-training', desc: 'Train loose-leash walking in your own neighborhood.' },
              { title: 'Advanced Obedience', href: '/services/advanced-obedience', desc: 'For owners who want structured heel work and full public reliability.' },
              { title: 'Group Classes', href: '/services/group-classes', desc: 'Practice around controlled distractions with coaching.' },
            ].map(({ title, href, desc }) => (
              <Link
                key={href}
                href={href}
                className="group bg-[#0B0C10] border border-[#1A2030] hover:border-[#7A8B66] p-8 transition-colors duration-300"
              >
                <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-2 group-hover:text-[#7A8B66] transition-colors">
                  {title}
                </h3>
                <p className="text-[#C5C6C7] text-sm leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            {[
              { label: 'Reactive Dog', href: '/training-issues/reactive-dog' },
              { label: 'All Services', href: '/services' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="font-oswald uppercase tracking-widest text-sm px-5 py-3 border border-[#1A2030] text-[#C5C6C7] hover:border-[#7A8B66] hover:text-[#7A8B66] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="leash-faq-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="leash-faq-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center"
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {faqs.map(({ q, a }) => (
              <FaqItem key={q} question={q} answer={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section
        className="py-24 bg-[#050505] border-t border-[#1A2030]"
        aria-labelledby="leash-cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="leash-cta-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]"
          >
            Ready for Enjoyable Walks?
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-10">
            Fill out the intake form and describe what your walks look like. We&apos;ll
            reach out within 24 hours with a program recommendation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <OpenModalButton
              className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center justify-center gap-3"
              ariaLabel="Start leash pulling training intake"
              service="in-home"
            >
              Start Free Intake{' '}
              <ArrowRight className="w-6 h-6" aria-hidden="true" />
            </OpenModalButton>
            <Link
              href="/services"
              className="font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center justify-center gap-3 border border-[#1A2030] text-[#C5C6C7] hover:border-[#FF5E00] hover:text-white transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-[#050505] border border-[#1A2030] open:border-[#7A8B66] transition-colors">
      <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none select-none font-oswald text-lg uppercase tracking-widest text-white hover:text-[#7A8B66] transition-colors">
        <span>{question}</span>
        <span
          className="text-[#7A8B66] font-bold text-2xl leading-none group-open:rotate-45 transition-transform flex-shrink-0"
          aria-hidden="true"
        >
          +
        </span>
      </summary>
      <div className="px-6 pb-6 text-[#C5C6C7] leading-relaxed border-t border-[#1A2030] pt-4">
        {answer}
      </div>
    </details>
  );
}
