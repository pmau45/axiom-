import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import OpenModalButton from '../../components/forms/OpenModalButton';

export const metadata: Metadata = {
  title: 'Behavior Modification Dog Training Jacksonville, FL',
  description:
    'Axiom Canine specializes in dog behavior modification in Jacksonville, FL. Reactivity, resource guarding, and aggression addressed at the root cause — not just managed.',
  alternates: {
    canonical: '/services/behavior-modification',
  },
};

const conditions = [
  {
    title: 'Leash Reactivity',
    desc: 'Lunging, barking, and hyper-fixation on other dogs or people during walks. We address the underlying state of mind, not just the surface behavior.',
    href: '/training-issues/reactive-dog',
  },
  {
    title: 'Resource Guarding',
    desc: 'Growling or snapping over food, toys, spaces, or people. A dangerous pattern that requires structured protocols — not punishment or workarounds.',
    href: '/training-issues/resource-guarding',
  },
  {
    title: 'Aggression',
    desc: 'Directed aggression toward dogs, people, or both. Safety-focused assessment and structured rehabilitation with no irresponsible promises.',
    href: '/training-issues/aggression',
  },
  {
    title: 'Dog-on-Dog Reactivity',
    desc: 'Escalating responses to other dogs that make walks, dog parks, and vet visits dangerous or impossible.',
    href: '/training-issues/reactive-dog',
  },
];

const process = [
  {
    step: '01',
    title: 'Honest Assessment',
    desc: 'We evaluate the behavior — what triggers it, the dog\'s history, and the severity. No sugarcoating, no overselling what training can achieve.',
  },
  {
    step: '02',
    title: 'Root Cause Identification',
    desc: 'Behavior modification starts with understanding why. Reactivity driven by fear looks different from reactivity driven by frustration. Treatment differs accordingly.',
  },
  {
    step: '03',
    title: 'Structured Rehabilitation',
    desc: 'We implement a specific protocol based on the behavior type. Structure, thresholds, and incremental exposure — not flooding, not force.',
  },
  {
    step: '04',
    title: 'Owner Integration',
    desc: 'You learn to read the dog, manage the environment, and reinforce the behavior change. Without owner consistency, no behavior modification holds.',
  },
];

const safetyPoints = [
  'We give honest assessments — some dogs require a veterinary behaviorist in addition to or instead of a trainer',
  'We do not make guarantees about aggression cases because behavior is not a controlled variable',
  'Safety protocols are non-negotiable: proper equipment, controlled environments, no unnecessary risk',
  'We communicate limitations clearly before starting any rehabilitation program',
];

const faqs = [
  {
    q: 'Can behavior modification really fix aggression?',
    a: 'Behavior modification can significantly reduce and manage aggressive behavior in most dogs. However, we do not promise "cures." We promise a structured, honest approach that improves safety and quality of life. Some cases also warrant veterinary behavioral evaluation.',
  },
  {
    q: 'What\'s the difference between behavior modification and obedience training?',
    a: 'Obedience training teaches commands. Behavior modification addresses the emotional and physiological state driving problem behavior. A dog that is in a reactive state cannot simply "obey" their way out of it — the state must be addressed first.',
  },
  {
    q: 'Is my dog too far gone for behavior modification?',
    a: 'Not necessarily, but we need to assess honestly. Some dogs with severe histories can be dramatically improved. Others have limitations we\'ll discuss with you openly. Describe the behavior in the intake and we\'ll give you a real answer.',
  },
  {
    q: 'How long does behavior modification take?',
    a: 'Longer than obedience training, typically. Behavior modification addresses patterns that are often deeply ingrained. We outline a realistic timeline during the assessment — not a sales pitch.',
  },
  {
    q: 'Should I consider board & train for a behavior modification case?',
    a: 'Board & train can accelerate results for behavior modification cases where full-day immersion in structure helps break entrenched patterns. We\'ll recommend it if it\'s the right fit.',
  },
];

export default function BehaviorModificationPage() {
  return (
    <div className="page-enter">
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        className="relative min-h-[65vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden bg-gradient-to-br from-[#FF5E00]/10 via-[#050505] to-[#050505]"
        aria-labelledby="behmod-hero-heading"
      >
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <AlertTriangle className="w-12 h-12 text-[#FF5E00] mx-auto mb-6" aria-hidden="true" />
          <h1
            id="behmod-hero-heading"
            className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[1] mb-6 text-white drop-shadow-2xl"
          >
            Liability Becomes{' '}
            <span className="text-[#FF5E00]">Reliability.</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed">
            Reactivity, resource guarding, and aggression don&apos;t happen in a vacuum. We
            address the root cause — not the symptom — through a structured, honest
            rehabilitation process.
          </p>
        </div>
      </section>

      {/* ── Conditions ────────────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="conditions-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              id="conditions-heading"
              className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4"
            >
              Issues We Address
            </h2>
            <p className="text-[#C5C6C7] text-lg leading-relaxed">
              Treating the symptom won&apos;t work. We go deeper.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {conditions.map(({ title, desc, href }) => (
              <div
                key={title}
                className="bg-[#1A2030] p-10 border-l-4 border-[#FF5E00] shadow-lg"
              >
                <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-4">
                  {title}
                </h3>
                <p className="text-[#C5C6C7] leading-relaxed mb-4">{desc}</p>
                {href && (
                  <Link
                    href={href}
                    className="font-oswald text-sm uppercase tracking-widest text-[#FF5E00] border-b border-[#FF5E00] pb-1 hover:text-white hover:border-white transition-colors"
                  >
                    Learn More →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────── */}
      <section
        className="py-24 bg-[#050505] border-b border-[#1A2030]"
        aria-labelledby="behmod-process-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              id="behmod-process-heading"
              className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4"
            >
              How We Approach Behavior Modification
            </h2>
            <p className="text-[#C5C6C7] text-lg leading-relaxed">
              Structured. Transparent. No quick fixes. This is what the process looks like.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="bg-[#0B0C10] border border-[#1A2030] p-8 flex gap-6">
                <span
                  className="font-oswald text-4xl font-bold text-[#FF5E00]/30 flex-shrink-0 leading-none"
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

      {/* ── Safety ────────────────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="behmod-safety-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-10">
            <ShieldCheck className="w-10 h-10 text-[#7A8B66] flex-shrink-0 mt-1" aria-hidden="true" />
            <h2
              id="behmod-safety-heading"
              className="font-oswald text-3xl font-bold uppercase tracking-widest text-[#7A8B66]"
            >
              Safety &amp; Honest Expectations
            </h2>
          </div>
          <ul className="space-y-4">
            {safetyPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[#C5C6C7]">
                <CheckCircle2 className="w-5 h-5 text-[#7A8B66] flex-shrink-0 mt-0.5" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Training Programs ─────────────────────────── */}
      <section
        className="py-16 bg-[#050505] border-b border-[#1A2030]"
        aria-labelledby="behmod-programs-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="behmod-programs-heading"
            className="font-oswald text-3xl font-bold uppercase tracking-widest text-[#7A8B66] mb-8"
          >
            Programs That Address Behavior Issues
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'In-Home Training', href: '/services/in-home-dog-training', desc: 'Address behavior in your home environment with hands-on coaching.' },
              { label: 'Board & Train', href: '/services/board-and-train', desc: 'Full-immersion rehabilitation for serious behavioral cases.' },
              { label: 'All Services', href: '/services', desc: 'See all available programs and find the right fit.' },
            ].map(({ label, href, desc }) => (
              <Link
                key={href}
                href={href}
                className="group bg-[#0B0C10] border border-[#1A2030] hover:border-[#FF5E00] p-8 transition-colors duration-300"
              >
                <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-2 group-hover:text-[#FF5E00] transition-colors">
                  {label}
                </h3>
                <p className="text-[#C5C6C7] text-sm leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="behmod-faq-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="behmod-faq-heading"
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
        aria-labelledby="behmod-cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="behmod-cta-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]"
          >
            Ready to Lead?
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-10">
            Let&apos;s build a plan that actually works. We&apos;ll reach out within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <OpenModalButton
              className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center justify-center gap-3"
              ariaLabel="Request a behavior modification assessment"
            >
              Request Assessment{' '}
              <ArrowRight className="w-6 h-6" aria-hidden="true" />
            </OpenModalButton>
            <Link
              href="/contact"
              className="font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center justify-center gap-3 border border-[#1A2030] text-[#C5C6C7] hover:border-[#FF5E00] hover:text-white transition-colors"
            >
              Contact Us
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
