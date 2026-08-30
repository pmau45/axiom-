import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';
import OpenModalButton from '../../components/forms/OpenModalButton';
import JsonLd from '@/app/components/seo/JsonLd';
import {
  buildBreadcrumbList,
  buildFaqPageSchema,
  buildSchemaGraph,
  buildServiceSchema,
} from '@/app/lib/schema';

export const metadata: Metadata = {
  title: 'Dog Aggression Training Jacksonville, FL | Safety-First Approach',
  description:
    'Axiom Canine addresses dog aggression in Jacksonville, FL with a safety-first, honest approach. We give realistic assessments — not irresponsible promises.',
  alternates: {
    canonical: '/training-issues/aggression',
  },
};

const aggressionTypes = [
  {
    title: 'Dog-Directed Aggression',
    desc: 'Directed toward other dogs. Can range from reactive displays to full predatory behavior. Assessment determines the appropriate approach.',
  },
  {
    title: 'Human-Directed Aggression',
    desc: 'Directed toward people — strangers, visitors, or in severe cases, family members. Requires careful, individualized assessment.',
  },
  {
    title: 'Resource Guarding',
    desc: 'Protecting food, toys, spaces, or people through growling, snapping, or biting. A predictable behavior pattern that can be addressed with structured protocols.',
  },
  {
    title: 'Fear-Based Aggression',
    desc: 'Aggression that stems from fear rather than dominance or predatory drive. Often misread and therefore mistreated. Identifying the root matters.',
  },
];

const safetyCommitments = [
  'We give honest assessments — including when a case is outside our scope',
  'Some dogs with a serious bite history also need veterinary behavioral evaluation — we will tell you this',
  'We do not promise to "fix" aggression — we promise a structured, safety-focused rehabilitation process',
  'We do not use methods that suppress aggression without addressing the underlying cause',
  'We do not accept cases where the safety risk to the dog, handler, or public cannot be responsibly managed',
];

const faqs = [
  {
    q: 'Can you guarantee my dog won\'t bite again?',
    a: 'No trainer who gives you that guarantee is being honest with you. Behavior modification can dramatically reduce aggressive behavior and improve safety, but behavior is not a controlled variable. We give you realistic expectations based on the assessment, not sales promises.',
  },
  {
    q: 'My dog bit someone. Should I be considering rehoming?',
    a: 'Not necessarily. A bite history does not automatically mean the situation is unmanageable. It does mean the situation needs to be evaluated carefully and honestly. Describe the incident in the intake and we\'ll advise on whether training is appropriate and what realistic outcomes look like.',
  },
  {
    q: 'Is board & train appropriate for an aggressive dog?',
    a: 'In some cases, yes. Immersive structure can help reset patterns in certain aggression profiles. It requires careful pre-assessment and specific protocols. We evaluate this during intake.',
  },
  {
    q: 'What if I have children in the home?',
    a: 'Child safety is a primary consideration in aggression cases. We factor the full household environment into the assessment and are honest if the risk profile requires additional precautions or professional oversight.',
  },
  {
    q: 'My dog is only aggressive toward other dogs — not people. Does that change the approach?',
    a: 'Yes, significantly. Dog-directed aggression and human-directed aggression are different behavioral profiles with different risk levels and different treatment approaches.',
  },
  {
    q: 'Do you use punishment in aggression cases?',
    a: 'We use whatever structured, humane approach the individual dog and behavior profile require. Aggression cases are not treated with an ideological one-size-fits-all methodology. What we do not do is use techniques that suppress behavior while leaving the underlying drive completely unaddressed.',
  },
];


const pageJsonLd = buildSchemaGraph(
  buildServiceSchema({
    name: 'Dog Aggression Training',
    description: 'Axiom Canine addresses dog aggression in Jacksonville, FL with a safety-first, honest approach. We give realistic assessments — not irresponsible promises.',
    path: '/training-issues/aggression',
    serviceType: 'Aggression Rehabilitation',
  }),
  buildBreadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Aggression', path: '/training-issues/aggression' },
  ]),
  buildFaqPageSchema(faqs)
);

export default function AggressionPage() {
  return (
    <div className="page-enter">
      
      <JsonLd data={pageJsonLd} />
{/* ── Hero ──────────────────────────────────────── */}
      <section
        className="relative min-h-[65vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden bg-gradient-to-br from-[#FF5E00]/10 via-[#050505] to-[#050505]"
        aria-labelledby="aggression-hero-heading"
      >
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <ShieldCheck className="w-12 h-12 text-[#7A8B66] mx-auto mb-6" aria-hidden="true" />
          <h1
            id="aggression-hero-heading"
            className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[1] mb-6 text-white drop-shadow-2xl"
          >
            Honest Assessments.{' '}
            <span className="text-[#7A8B66]">No Empty Promises.</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed">
            Aggression is one of the most serious behavior issues a dog owner can face. It
            deserves honesty, structure, and a safety-first approach — not a sales pitch or
            irresponsible guarantees.
          </p>
        </div>
      </section>

      {/* ── Safety Notice ─────────────────────────────── */}
      <section className="py-12 bg-[#0B0C10] border-b border-[#1A2030]" aria-label="Safety notice">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A2030] border-l-4 border-[#FF5E00] p-8 flex gap-4">
            <AlertTriangle className="w-8 h-8 text-[#FF5E00] flex-shrink-0 mt-1" aria-hidden="true" />
            <div>
              <h2 className="font-oswald text-xl uppercase tracking-widest text-white mb-2">
                If Your Dog Has Bitten Someone
              </h2>
              <p className="text-[#C5C6C7] leading-relaxed">
                Call us directly at{' '}
                <a
                  href="tel:9044587561"
                  className="text-[#FF5E00] hover:text-white transition-colors font-bold"
                  aria-label="Call Axiom Canine at (904) 458-7561"
                >
                  (904) 458-7561
                </a>{' '}
                rather than submitting a form. Bite history cases require direct discussion before
                intake. If there is an immediate safety risk, please contact Animal Services or a
                veterinary behaviorist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Types of Aggression ───────────────────────── */}
      <section
        className="py-24 bg-[#050505] border-b border-[#1A2030]"
        aria-labelledby="aggression-types-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              id="aggression-types-heading"
              className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4"
            >
              Types of Aggression We Address
            </h2>
            <p className="text-[#C5C6C7] text-lg leading-relaxed">
              Not all aggression is the same. The type and root cause determine the approach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aggressionTypes.map(({ title, desc }) => (
              <div
                key={title}
                className="bg-[#0B0C10] p-10 border-l-4 border-[#7A8B66] shadow-lg"
              >
                <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-4">
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
        aria-labelledby="aggression-approach-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="aggression-approach-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-8"
          >
            How We Approach Aggression Cases
          </h2>
          <div className="space-y-6 text-[#C5C6C7] text-lg leading-relaxed">
            <p>
              We start with a thorough assessment. Aggression cases require understanding the
              full behavioral history, identifying triggers, and evaluating severity before any
              training protocol begins. We do not skip this step.
            </p>
            <p>
              We are transparent about what training can and cannot achieve. Behavior
              modification for aggression reduces the frequency, intensity, and predictability of
              aggressive behavior. It does not always eliminate risk entirely — and anyone who
              tells you otherwise is not being honest with you.
            </p>
            <p>
              Our approach focuses on structure, leadership, and clear behavioral expectations —
              combined with appropriate counter-conditioning where indicated. We do not use
              methods that suppress outward signs of aggression while leaving the underlying
              emotional state unaddressed.
            </p>
            <p>
              When a case warrants veterinary behavioral involvement — certain cases involving
              idiopathic aggression, neurological factors, or severe bite histories — we will
              tell you directly and can help facilitate a referral.
            </p>
          </div>
        </div>
      </section>

      {/* ── Safety Commitments ────────────────────────── */}
      <section
        className="py-24 bg-[#050505] border-b border-[#1A2030]"
        aria-labelledby="aggression-safety-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-10">
            <ShieldCheck className="w-10 h-10 text-[#7A8B66] flex-shrink-0 mt-1" aria-hidden="true" />
            <h2
              id="aggression-safety-heading"
              className="font-oswald text-3xl font-bold uppercase tracking-widest text-[#7A8B66]"
            >
              Our Safety Commitments
            </h2>
          </div>
          <ul className="space-y-4">
            {safetyCommitments.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[#C5C6C7]">
                <CheckCircle2 className="w-5 h-5 text-[#7A8B66] flex-shrink-0 mt-0.5" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Related Programs ──────────────────────────── */}
      <section
        className="py-16 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="aggression-programs-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="aggression-programs-heading"
            className="font-oswald text-3xl font-bold uppercase tracking-widest text-[#7A8B66] mb-8"
          >
            Programs for Aggression Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Behavior Modification', href: '/services/behavior-modification', desc: 'The primary framework for addressing aggression and related behavior issues.' },
              { title: 'Board & Train', href: '/services/board-and-train', desc: 'Full-immersion rehabilitation for serious aggression cases that need around-the-clock structure.' },
            ].map(({ title, href, desc }) => (
              <Link
                key={href}
                href={href}
                className="group bg-[#050505] border border-[#1A2030] hover:border-[#FF5E00] p-8 transition-colors duration-300"
              >
                <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-2 group-hover:text-[#FF5E00] transition-colors">
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
        className="py-24 bg-[#050505] border-b border-[#1A2030]"
        aria-labelledby="aggression-faq-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="aggression-faq-heading"
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
        className="py-24 bg-[#0B0C10] border-t border-[#1A2030]"
        aria-labelledby="aggression-cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="aggression-cta-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]"
          >
            Let&apos;s Have an Honest Conversation.
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-4">
            Describe the behavior honestly in the intake. We&apos;ll respond within 24 hours
            with a real assessment — not a sales pitch.
          </p>
          <p className="text-[#C5C6C7]/60 text-sm mb-10">
            Bite history cases: please call{' '}
            <a href="tel:9044587561" className="text-[#FF5E00] hover:text-white transition-colors">
              (904) 458-7561
            </a>{' '}
            directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <OpenModalButton
              className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center justify-center gap-3"
              ariaLabel="Start dog aggression training intake"
              service="behavior"
            >
              Start Free Intake{' '}
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
    <details className="group bg-[#0B0C10] border border-[#1A2030] open:border-[#7A8B66] transition-colors">
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
