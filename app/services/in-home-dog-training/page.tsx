import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import OpenModalButton from '../../components/forms/OpenModalButton';

export const metadata: Metadata = {
  title: {
    absolute: 'In-Home Dog Training Jacksonville | Private Lessons That Work',
  },
  description:
    'Personalized in-home dog training in Jacksonville, FL. Perfect for reactivity, resource guarding, and obedience. We train both dog and owner in your real environment.',
  alternates: {
    canonical: '/services/in-home-dog-training',
  },
};

const whoItIsFor = [
  'Dogs with behavior issues tied to the home environment (guarding, reactivity indoors, anxiety)',
  'Owners who want to be active participants in the training process',
  'Families with multiple household members who all need to learn the system',
  'Dogs that are difficult to transport or more comfortable in familiar surroundings',
];

const whoItIsNotFor = [
  'Owners who need a rapid turnaround and cannot commit to daily follow-through',
  'Severe aggression cases that require a more immersive environment to reset safely',
  'Dogs that feed off household energy in ways that slow the training process significantly',
];

const process = [
  {
    step: '01',
    title: 'Intake & Assessment',
    desc: 'We start with a thorough evaluation of the dog\'s behavior history, triggers, and environment. No guessing.',
  },
  {
    step: '02',
    title: 'Structured Training Sessions',
    desc: 'We come to your home for focused, structured sessions. We handle the dog, then walk you through it.',
  },
  {
    step: '03',
    title: 'Owner Education',
    desc: 'You learn the techniques, the language, and the expectations. Consistency at home is non-negotiable.',
  },
  {
    step: '04',
    title: 'Follow-Through & Maintenance',
    desc: 'We stay involved to make sure the behavior holds. Real-world results, not just session-day compliance.',
  },
];

const faqs = [
  {
    q: 'How many sessions does in-home training typically take?',
    a: 'It depends on the behavior and the dog. We don\'t sell session packages that run out before results are achieved. We build a plan specific to your situation and work it until the goals are met.',
  },
  {
    q: 'What areas of Jacksonville do you serve for in-home training?',
    a: 'We serve Jacksonville, Ponte Vedra, Nocatee, St. Augustine, and Nassau County. Contact us if you\'re outside those areas.',
  },
  {
    q: 'Does everyone in the household need to be present?',
    a: 'Ideally, yes — at least for key sessions. Dogs don\'t "know" they\'re supposed to listen to only one person. Consistency across household members matters.',
  },
  {
    q: 'What if my dog\'s behavior is dangerous?',
    a: 'That\'s exactly the kind of situation in-home training is designed to address in context. We\'ve worked with serious behavior cases. Describe what\'s happening honestly in the intake and we\'ll advise on the safest approach.',
  },
];

export default function InHomeTrainingPage() {
  return (
    <div className="page-enter">
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        className="relative min-h-[65vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden bg-gradient-to-br from-[#FF5E00]/10 via-[#050505] to-[#050505]"
        aria-labelledby="in-home-hero-heading"
      >
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <Home className="w-12 h-12 text-[#FF5E00] mx-auto mb-6" aria-hidden="true" />
          <h1
            id="in-home-hero-heading"
            className="font-oswald text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[1] mb-6 text-white drop-shadow-2xl"
          >
            In-Home Dog Training in Jacksonville –{' '}
            <span className="text-[#FF5E00]">Training That Fits Your Life</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed">
            Most behavior problems happen at home. That&apos;s exactly where we train. We come
            to you, address the real triggers, and teach you the system that keeps it working.
          </p>
        </div>
      </section>

      {/* ── Who It's For / Not For ────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="fit-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="fit-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center"
          >
            Is This the Right Fit?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1A2030] p-10 border-l-4 border-[#7A8B66]">
              <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-6">
                In-Home Is a Good Fit If…
              </h3>
              <ul className="space-y-4">
                {whoItIsFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#C5C6C7]">
                    <CheckCircle2 className="w-5 h-5 text-[#7A8B66] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1A2030] p-10 border-l-4 border-[#FF5E00]">
              <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-6">
                Consider Another Option If…
              </h3>
              <ul className="space-y-4">
                {whoItIsNotFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#C5C6C7]">
                    <AlertTriangle className="w-5 h-5 text-[#FF5E00] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-[#C5C6C7]/60">
                Not sure?{' '}
                <Link href="/services/board-and-train" className="underline hover:text-[#FF5E00]">
                  See if Board &amp; Train is a better fit.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────── */}
      <section
        className="py-24 bg-[#050505] border-b border-[#1A2030]"
        aria-labelledby="process-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              id="process-heading"
              className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4"
            >
              How In-Home Training Works
            </h2>
            <p className="text-[#C5C6C7] text-lg leading-relaxed">
              No guesswork. No surprises. Here&apos;s what the process looks like from intake to
              lasting results.
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

      {/* ── Training Issues ───────────────────────────── */}
      <section
        className="py-16 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="ih-issues-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="ih-issues-heading"
            className="font-oswald text-3xl font-bold uppercase tracking-widest text-[#7A8B66] mb-8"
          >
            Issues Commonly Addressed In-Home
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'Reactive Dog', href: '/training-issues/reactive-dog' },
              { label: 'Leash Pulling', href: '/training-issues/leash-pulling' },
              { label: 'Aggression', href: '/training-issues/aggression' },
              { label: 'Behavior Modification', href: '/services/behavior-modification' },
              { label: 'Advanced Obedience', href: '/services/advanced-obedience' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="font-oswald uppercase tracking-widest text-sm px-5 py-3 border border-[#1A2030] text-[#C5C6C7] hover:border-[#FF5E00] hover:text-[#FF5E00] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section
        className="py-24 bg-[#050505] border-b border-[#1A2030]"
        aria-labelledby="ih-faq-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="ih-faq-heading"
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
        aria-labelledby="ih-cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="ih-cta-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]"
          >
            Ready to Start?
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-10">
            Fill out the intake form and we&apos;ll reach out within 24 hours to discuss your
            dog&apos;s specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <OpenModalButton
              className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center justify-center gap-3"
              ariaLabel="Start your free in-home dog training intake"
            >
              Start Free Intake{' '}
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
    <details className="group bg-[#0B0C10] border border-[#1A2030] open:border-[#FF5E00] transition-colors">
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
