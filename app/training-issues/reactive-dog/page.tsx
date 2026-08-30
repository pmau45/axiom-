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
  title: {
    absolute: 'Reactive Dog Training Jacksonville | Behavior Modification That Works',
  },
  description:
    'Specialized reactive dog training in Jacksonville, FL. We help dogs overcome leash reactivity, stranger reactivity, and aggression through proven behavior modification and owner coaching.',
  alternates: {
    canonical: '/training-issues/reactive-dog',
  },
};

const symptoms = [
  'Lunging toward other dogs or people on leash',
  'Barking explosively when seeing another dog from a distance',
  'Hyper-fixating on stimuli and becoming unable to redirect',
  'Threshold creep — the distance at which your dog reacts keeps getting smaller',
  'Pulling forward or spinning on leash to get to or away from the trigger',
  'Difficulty recovering after a reactive episode',
];

const whyItHappens = [
  {
    title: 'Fear-Based Reactivity',
    desc: 'The dog perceives the trigger as a threat. The reactive display is designed to increase distance — "if I make myself scary, the scary thing will go away."',
  },
  {
    title: 'Frustration-Based Reactivity',
    desc: 'The dog wants access to the trigger but can\'t reach it. The frustration escalates into reactive behavior. Often confused with aggression but treated differently.',
  },
  {
    title: 'Lack of Leadership & Structure',
    desc: 'A dog without a strong behavioral framework has no anchor when arousal spikes. Structure creates the stability that prevents escalation.',
  },
];

const programLinks = [
  {
    title: 'In-Home Dog Training',
    href: '/services/in-home-dog-training',
    desc: 'Address reactivity in the exact environments where it\'s happening.',
  },
  {
    title: 'Board & Train',
    href: '/services/board-and-train',
    desc: 'Immersive rehabilitation for dogs whose reactivity is severe or has been building for a long time.',
  },
  {
    title: 'Behavior Modification',
    href: '/services/behavior-modification',
    desc: 'The broader framework that reactive dog training falls under.',
  },
];

const faqs = [
  {
    q: 'Is my reactive dog aggressive?',
    a: 'Reactivity and aggression are related but not the same. Many reactive dogs are operating from fear or frustration, not predatory intent. The distinction matters for treatment. We assess properly before labeling.',
  },
  {
    q: 'Can a reactive dog be fully fixed?',
    a: 'Many reactive dogs improve dramatically with structured training. "Fixed" is not always the right word — some dogs will always need more deliberate management around high-value triggers. We give you honest expectations during assessment.',
  },
  {
    q: 'My dog is only reactive on leash — why?',
    a: 'Leash reactivity is extremely common. The leash creates constraint, which amplifies arousal. A dog that ignores other dogs off-leash may still react intensely on leash. We address the on-leash behavioral pattern specifically.',
  },
  {
    q: 'How do I manage reactive episodes during training?',
    a: 'Distance, calm exits, and avoiding unnecessary trigger exposure during the early stages. We give you a specific management framework as part of the training plan so you\'re not white-knuckling every walk.',
  },
  {
    q: 'Which program is best for a reactive dog?',
    a: 'It depends on the severity and how long the behavior has been present. In-home training works well for moderate cases. Board & train is often better for severe or long-standing reactivity. We recommend based on the assessment.',
  },
];


const pageJsonLd = buildSchemaGraph(
  buildServiceSchema({
    name: 'Reactive Dog Training',
    description: 'Specialized reactive dog training in Jacksonville, FL. We help dogs overcome leash reactivity, stranger reactivity, and aggression through proven behavior modification and owner coaching.',
    path: '/training-issues/reactive-dog',
    serviceType: 'Reactive Dog Training',
  }),
  buildBreadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Reactive Dogs', path: '/training-issues/reactive-dog' },
  ]),
  buildFaqPageSchema(faqs)
);

export default function ReactiveDogPage() {
  return (
    <div className="page-enter">
      
      <JsonLd data={pageJsonLd} />
{/* ── Hero ──────────────────────────────────────── */}
      <section
        className="relative min-h-[65vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden bg-gradient-to-br from-[#FF5E00]/10 via-[#050505] to-[#050505]"
        aria-labelledby="reactive-hero-heading"
      >
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <AlertTriangle className="w-12 h-12 text-[#FF5E00] mx-auto mb-6" aria-hidden="true" />
          <h1
            id="reactive-hero-heading"
            className="font-oswald text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[1] mb-6 text-white drop-shadow-2xl"
          >
            Reactive Dog Training in Jacksonville –{' '}
            <span className="text-[#FF5E00]">Calm, Confident Dogs &amp; Owners</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed">
            Reactivity on leash is one of the most frustrating — and most fixable — dog behavior
            issues we address. It requires understanding the root cause, not just suppressing the
            symptom.
          </p>
        </div>
      </section>

      {/* ── Symptoms ──────────────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="reactive-symptoms-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="reactive-symptoms-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4"
          >
            Sound Familiar?
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-8 leading-relaxed">
            If your dog does any of these consistently on leash, you&apos;re dealing with
            reactivity:
          </p>
          <ul className="space-y-4">
            {symptoms.map((symptom) => (
              <li key={symptom} className="flex items-start gap-4 text-[#C5C6C7] text-lg">
                <CheckCircle2 className="w-5 h-5 text-[#FF5E00] flex-shrink-0 mt-0.5" aria-hidden="true" />
                {symptom}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Why It Happens ────────────────────────────── */}
      <section
        className="py-24 bg-[#050505] border-b border-[#1A2030]"
        aria-labelledby="reactive-why-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              id="reactive-why-heading"
              className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4"
            >
              Understanding Reactivity in High-Drive Breeds
            </h2>
            <p className="text-[#C5C6C7] text-lg leading-relaxed">
              Reactivity is not a character flaw or a sign that the dog is broken. Understanding
              the type of reactivity is what determines the right approach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyItHappens.map(({ title, desc }) => (
              <div key={title} className="bg-[#0B0C10] border-t-4 border-[#FF5E00] p-8">
                <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-4">
                  {title}
                </h3>
                <p className="text-[#C5C6C7] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Approach ──────────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="reactive-approach-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-10">
            <ShieldCheck className="w-10 h-10 text-[#7A8B66] flex-shrink-0 mt-1" aria-hidden="true" />
            <h2
              id="reactive-approach-heading"
              className="font-oswald text-3xl font-bold uppercase tracking-widest text-[#7A8B66]"
            >
              Our Reactivity Training Process
            </h2>
          </div>
          <div className="space-y-6 text-[#C5C6C7] text-lg leading-relaxed">
            <p>
              We begin with an honest assessment of the type and severity of reactivity. The
              approach for a fear-based reactive dog is different from the approach for a
              frustration-based reactive dog.
            </p>
            <p>
              We build structure and leadership first. A dog that trusts their handler and
              understands the behavioral expectations has a foundation to fall back on when
              arousal spikes. Without that foundation, counter-conditioning exercises alone
              rarely stick.
            </p>
            <p>
              From there, we work thresholds systematically — gradually decreasing the distance
              at which the dog can remain under threshold while maintaining behavior. We don&apos;t
              flood, and we don&apos;t use suppression techniques that mask behavior without
              addressing the state.
            </p>
            <p>
              Owner education is non-negotiable. You need to read the early warning signs,
              manage the environment during training, and know exactly how to respond in a
              reactive moment.
            </p>
          </div>
        </div>
      </section>

      {/* ── Recommended Programs ──────────────────────── */}
      <section
        className="py-24 bg-[#050505] border-b border-[#1A2030]"
        aria-labelledby="reactive-programs-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              id="reactive-programs-heading"
              className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4"
            >
              Owner Tools for Real-World Success
            </h2>
            <p className="text-[#C5C6C7] text-lg leading-relaxed">
              The right program gives you a clear system — not just session-day compliance — so
              you can handle reactivity in everyday Jacksonville environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programLinks.map(({ title, href, desc }) => (
              <Link
                key={href}
                href={href}
                className="group bg-[#0B0C10] border border-[#1A2030] hover:border-[#FF5E00] p-8 transition-colors duration-300"
              >
                <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">
                  {title}
                </h3>
                <p className="text-[#C5C6C7] text-sm leading-relaxed">{desc}</p>
                <span className="mt-4 block font-oswald text-sm uppercase tracking-widest text-[#FF5E00]/60 group-hover:text-[#FF5E00] transition-colors">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="reactive-faq-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="reactive-faq-heading"
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
        aria-labelledby="reactive-cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="reactive-cta-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]"
          >
            Let&apos;s Assess Your Dog.
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-10">
            Describe the behavior in the intake form. We&apos;ll reach out within 24 hours with
            a real recommendation — not a generic program upsell.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <OpenModalButton
              className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center justify-center gap-3"
              ariaLabel="Start reactive dog training intake"
              service="behavior"
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
    <details className="group bg-[#050505] border border-[#1A2030] open:border-[#FF5E00] transition-colors">
      <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none select-none font-oswald text-lg uppercase tracking-widest text-white hover:text-[#FF5E00] transition-colors">
        <span>{question}</span>
        <span
          className="text-[#FF5E00] font-bold text-2xl leading-none group-open:rotate-45 transition-transform flex-shrink-0"
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
