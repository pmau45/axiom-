import type { Metadata } from 'next';
import Link from 'next/link';
import { Compass, ArrowRight, CheckCircle2, MapPin, Radio, Anchor } from 'lucide-react';
import OpenModalButton from '../../components/forms/OpenModalButton';

export const metadata: Metadata = {
  title: {
    absolute: 'Off Leash Training Jacksonville | Real-World Reliability',
  },
  description:
    'Advanced off-leash training in Jacksonville, FL. We build reliable recall, neutrality, and trust in real environments — including trails and public spaces. Perfect for high-drive breeds.',
  alternates: {
    canonical: '/services/advanced-obedience',
  },
};

const skills = [
  {
    Icon: MapPin,
    title: 'Public Neutrality',
    desc: 'Ignoring other dogs, people, and urban chaos. Existing calmly in high-traffic environments without constant handling.',
  },
  {
    Icon: Radio,
    title: 'Bulletproof Recall',
    desc: 'Coming back immediately, the first time, every time — regardless of what they\'re chasing or how exciting the distraction.',
  },
  {
    Icon: Anchor,
    title: 'Extended Place',
    desc: 'Holding a designated boundary (a bed or cot) for extended periods until formally released. Reliable impulse control.',
  },
  {
    Icon: Compass,
    title: 'Off-Leash Reliability',
    desc: 'A dog that listens because they\'ve been conditioned to respond — not because they\'re physically prevented from leaving.',
  },
];

const whoItIsFor = [
  'Dogs that have basic obedience foundations and are ready for higher-level generalization',
  'Owners who want off-leash freedom without constant management',
  'Dogs working toward public access reliability (events, parks, travel)',
  'Owners committed to maintaining the training with consistent follow-through',
];

const process = [
  {
    step: '01',
    title: 'Foundation Confirmation',
    desc: 'We confirm the dog has the behavioral baseline for advanced work. If not, we address gaps first.',
  },
  {
    step: '02',
    title: 'Progressive Distraction Training',
    desc: 'Commands are proofed incrementally against increasing levels of distraction — not just practiced in a quiet yard.',
  },
  {
    step: '03',
    title: 'Real-World Generalization',
    desc: 'Training moves into public environments: parks, sidewalks, busy areas. The dog learns to perform everywhere.',
  },
  {
    step: '04',
    title: 'Owner Handoff',
    desc: 'You learn to handle the dog at the advanced level. An obedient dog with an inconsistent handler eventually regresses.',
  },
];

const faqs = [
  {
    q: 'Does my dog need to have prior obedience training before starting advanced obedience?',
    a: 'A solid foundational understanding is helpful. We evaluate where each dog is during the intake and build from there.',
  },
  {
    q: 'How is advanced obedience different from basic obedience?',
    a: 'Basic obedience teaches commands. Advanced obedience proves them — under real distractions, at a distance, off-leash, and in public environments. The standards are much higher.',
  },
  {
    q: 'Can advanced obedience be done through board & train?',
    a: 'Yes. Board & train is often the most efficient path for advanced obedience because the training repetitions compound quickly in an immersive environment. Ask about it during the intake.',
  },
  {
    q: 'Is off-leash training safe for all dogs?',
    a: 'Not immediately. Off-leash reliability is earned through structured progression. We don\'t cut corners on safety. A dog earns off-leash freedom by demonstrating consistent on-leash compliance first.',
  },
];

export default function AdvancedObediencePage() {
  return (
    <div className="page-enter">
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        className="relative min-h-[65vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden bg-gradient-to-bl from-[#7A8B66]/10 via-[#050505] to-[#050505]"
        aria-labelledby="advob-hero-heading"
      >
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <Compass className="w-12 h-12 text-[#7A8B66] mx-auto mb-6" aria-hidden="true" />
          <h1
            id="advob-hero-heading"
            className="font-oswald text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[1] mb-6 text-white drop-shadow-2xl"
          >
            Off-Leash Training in Jacksonville –{' '}
            <span className="text-[#7A8B66]">Trust Your Dog Anywhere</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed">
            A dog that only listens in your living room isn&apos;t trained. True obedience means
            public neutrality, off-leash reliability, and immediate recall under intense
            distractions — in the real world.
          </p>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="skills-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              id="skills-heading"
              className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4"
            >
              What Advanced Obedience Builds
            </h2>
            <p className="text-[#C5C6C7] text-lg leading-relaxed">
              These are the practical competencies your dog develops through advanced obedience
              training — not tricks, but real-world reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#1A2030] p-10 border-l-4 border-[#7A8B66] shadow-lg"
              >
                <Icon className="w-10 h-10 text-[#7A8B66] mb-6" aria-hidden="true" />
                <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-4">
                  {title}
                </h3>
                <p className="text-[#C5C6C7] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For ──────────────────────────────── */}
      <section
        className="py-24 bg-[#050505] border-b border-[#1A2030]"
        aria-labelledby="advob-fit-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="advob-fit-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-10 text-center"
          >
            Who This Is For
          </h2>
          <ul className="space-y-4">
            {whoItIsFor.map((item) => (
              <li key={item} className="flex items-start gap-4 text-[#C5C6C7] text-lg">
                <CheckCircle2 className="w-6 h-6 text-[#7A8B66] flex-shrink-0 mt-0.5" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="advob-process-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              id="advob-process-heading"
              className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4"
            >
              The Advanced Obedience Process
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

      {/* ── Related ───────────────────────────────────── */}
      <section
        className="py-16 bg-[#050505] border-b border-[#1A2030]"
        aria-labelledby="advob-related-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="advob-related-heading"
            className="font-oswald text-3xl font-bold uppercase tracking-widest text-[#7A8B66] mb-8"
          >
            Related Programs &amp; Issues
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'In-Home Training', href: '/services/in-home-dog-training' },
              { label: 'Board & Train', href: '/services/board-and-train' },
              { label: 'Group Classes', href: '/services/group-classes' },
              { label: 'Leash Pulling', href: '/training-issues/leash-pulling' },
              { label: 'Reactive Dog', href: '/training-issues/reactive-dog' },
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
        aria-labelledby="advob-faq-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="advob-faq-heading"
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
        aria-labelledby="advob-cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="advob-cta-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]"
          >
            Ready for Freedom?
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-10">
            True obedience starts with a real evaluation. Let&apos;s see where your dog is and
            build a path to where they need to be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <OpenModalButton
              className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center justify-center gap-3"
              ariaLabel="Request an advanced obedience assessment"
            >
              Request Assessment{' '}
              <ArrowRight className="w-6 h-6" aria-hidden="true" />
            </OpenModalButton>
            <Link
              href="/services"
              className="font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center justify-center gap-3 border border-[#1A2030] text-[#C5C6C7] hover:border-[#FF5E00] hover:text-white transition-colors"
            >
              ← All Services
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
