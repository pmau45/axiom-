import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import OpenModalButton from '../../components/forms/OpenModalButton';
import JsonLd from '@/app/components/seo/JsonLd';
import {
  buildBreadcrumbList,
  buildFaqPageSchema,
  buildSchemaGraph,
  buildServiceSchema,
} from '@/app/lib/schema';

export const metadata: Metadata = {
  title: 'Group Dog Training Classes Jacksonville, FL',
  description:
    'Axiom Canine group dog training classes in Jacksonville, FL. Practice real obedience around controlled distractions with structured coaching. Great for socialization and owner accountability.',
  alternates: {
    canonical: '/services/group-classes',
  },
};

const whoItIsFor = [
  'Dogs that have a basic behavioral foundation and need structured distraction work',
  'Owners who benefit from coached repetition in a group setting',
  'Dogs working on socialization in a controlled, supervised environment',
  'Owners looking for ongoing maintenance and accountability after a primary program',
];

const whoItIsNotFor = [
  'Dogs with active aggression toward other dogs or people — safety first',
  'Dogs that have no foundational training in place (consider in-home or board & train first)',
  'Situations requiring individualized behavior rehabilitation',
];

const whatToExpect = [
  'Structured group environment with clear rules enforced consistently',
  'Coaching through real distractions — other dogs, people, movement',
  'Handler education alongside dog training (you practice, not just watch)',
  'Focus on practical commands: heel, sit, down, stay, recall',
  'Small class sizes for quality feedback',
];

const faqs = [
  {
    q: 'Does my dog need prior training before joining a group class?',
    a: 'Basic foundational skills are helpful. We evaluate each dog before enrollment. Dogs with no prior training or active behavior issues may be directed toward in-home or board & train first.',
  },
  {
    q: 'Are group classes appropriate for reactive dogs?',
    a: 'It depends on the severity. Mild reactivity managed in a structured environment can improve in group settings. Severe leash reactivity is better addressed one-on-one first. Describe your dog\'s behavior in the intake and we\'ll advise.',
  },
  {
    q: 'How many dogs are in a group class?',
    a: 'We keep class sizes small to maintain quality coaching and ensure every dog-handler pair gets real feedback.',
  },
  {
    q: 'What happens if my dog has a bad day in class?',
    a: 'Dogs have off days. The instructor\'s job is to manage the environment, adjust the exercise, and coach you through it — not to pretend it didn\'t happen.',
  },
];


const pageJsonLd = buildSchemaGraph(
  buildServiceSchema({
    name: 'Group Dog Training Classes',
    description: 'Axiom Canine group dog training classes in Jacksonville, FL. Practice real obedience around controlled distractions with structured coaching. Great for socialization and owner accountability.',
    path: '/services/group-classes',
    serviceType: 'Group Classes',
  }),
  buildBreadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Group Classes', path: '/services/group-classes' },
  ]),
  buildFaqPageSchema(faqs)
);

export default function GroupClassesPage() {
  return (
    <div className="page-enter">
      
      <JsonLd data={pageJsonLd} />
{/* ── Hero ──────────────────────────────────────── */}
      <section
        className="relative min-h-[65vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden bg-gradient-to-br from-[#5B8FA8]/10 via-[#050505] to-[#050505]"
        aria-labelledby="group-hero-heading"
      >
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <Users className="w-12 h-12 text-[#5B8FA8] mx-auto mb-6" aria-hidden="true" />
          <h1
            id="group-hero-heading"
            className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[1] mb-6 text-white drop-shadow-2xl"
          >
            Train Around{' '}
            <span className="text-[#5B8FA8]">Real Distractions.</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed">
            Obedience under pressure requires practice under pressure. Our group classes give
            your dog the controlled distraction environment they need to generalize their
            training to the real world.
          </p>
        </div>
      </section>

      {/* ── Who It's For / Not For ────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="group-fit-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="group-fit-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center"
          >
            Is Group Class the Right Fit?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1A2030] p-10 border-l-4 border-[#5B8FA8]">
              <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-6">
                Group Class Works Well If…
              </h3>
              <ul className="space-y-4">
                {whoItIsFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#C5C6C7]">
                    <CheckCircle2 className="w-5 h-5 text-[#5B8FA8] flex-shrink-0 mt-0.5" aria-hidden="true" />
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
                Start with{' '}
                <Link href="/services/in-home-dog-training" className="underline hover:text-[#FF5E00]">
                  in-home training
                </Link>{' '}
                or{' '}
                <Link href="/services/board-and-train" className="underline hover:text-[#FF5E00]">
                  board &amp; train
                </Link>{' '}
                to build the foundation first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Expect ────────────────────────────── */}
      <section
        className="py-24 bg-[#050505] border-b border-[#1A2030]"
        aria-labelledby="group-expect-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="group-expect-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center"
          >
            What to Expect in Class
          </h2>
          <ul className="space-y-4">
            {whatToExpect.map((item) => (
              <li key={item} className="flex items-start gap-4 text-[#C5C6C7] text-lg">
                <ArrowRight className="w-5 h-5 text-[#5B8FA8] flex-shrink-0 mt-1" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────── */}
      <section
        className="py-16 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="group-related-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="group-related-heading"
            className="font-oswald text-3xl font-bold uppercase tracking-widest text-[#7A8B66] mb-8"
          >
            Related Training Issues
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'Reactive Dog', href: '/training-issues/reactive-dog' },
              { label: 'Leash Pulling', href: '/training-issues/leash-pulling' },
              { label: 'Advanced Obedience', href: '/services/advanced-obedience' },
              { label: 'All Services', href: '/services' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="font-oswald uppercase tracking-widest text-sm px-5 py-3 border border-[#1A2030] text-[#C5C6C7] hover:border-[#5B8FA8] hover:text-[#5B8FA8] transition-colors"
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
        aria-labelledby="group-faq-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="group-faq-heading"
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
        aria-labelledby="group-cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="group-cta-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]"
          >
            Ready to Practice?
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-10">
            Submit an intake and we&apos;ll confirm whether group class is the right fit for
            your dog&apos;s current skill level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <OpenModalButton
              className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center justify-center gap-3"
              ariaLabel="Start your free group class intake"
              service="group"
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
    <details className="group bg-[#0B0C10] border border-[#1A2030] open:border-[#5B8FA8] transition-colors">
      <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none select-none font-oswald text-lg uppercase tracking-widest text-white hover:text-[#5B8FA8] transition-colors">
        <span>{question}</span>
        <span
          className="text-[#5B8FA8] font-bold text-2xl leading-none group-open:rotate-45 transition-transform flex-shrink-0"
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
