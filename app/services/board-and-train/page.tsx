import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
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
    absolute: 'Board & Train Jacksonville FL | Reactive Dog Specialists',
  },
  description:
    'Proven board and train programs in Jacksonville, FL for reactive, aggressive, and high-drive dogs. Owner education included. Real-world off-leash results with lifetime support. Book your spot today.',
  alternates: {
    canonical: '/services/board-and-train',
  },
};

const whoItIsFor = [
  'Busy owners who need a faster path to results than weekly sessions allow',
  'Severe behavior issues requiring full-day immersion and consistent structure',
  'Dogs that are difficult to train in a home environment with multiple distractions',
  'Owners who want professional handling to build the foundation before owner coaching begins',
];

const whoItIsNotFor = [
  'Owners who are not willing to commit to the handoff sessions — the owner must learn the system',
  'Dogs with medical conditions that prevent a safe stay away from home',
  'Situations where the primary goal is short-term management rather than lasting behavior change',
];

const process = [
  {
    step: '01',
    title: 'Intake & Pre-Stay Assessment',
    desc: 'We evaluate your dog\'s behavior profile, identify the core issues, and outline the training plan before the stay begins.',
  },
  {
    step: '02',
    title: 'Structured Board & Train Stay',
    desc: 'Your dog lives in our structured environment. Every interaction is intentional — meals, walks, commands, rest. No downtime from the system.',
  },
  {
    step: '03',
    title: 'Owner Handoff Sessions',
    desc: 'This is not optional. You learn to handle your dog the way we trained them. The handoff is where the results transfer to real life.',
  },
  {
    step: '04',
    title: 'Post-Stay Support',
    desc: 'We stay accessible after the stay to help you maintain what was built. Behavior doesn\'t maintain itself — consistency does.',
  },
];

const safetyPoints = [
  'We assess every dog individually before accepting into the program',
  'Dogs are never left unsupervised in situations beyond their current skill level',
  'Aggression cases are handled with strict safety protocols — no shortcuts',
  'We are transparent about limitations: some cases require specialized veterinary behaviorist involvement',
];

const faqs = [
  {
    q: 'How long is the board & train program?',
    a: 'Duration depends on the dog\'s behavior issues and the training goals. We don\'t sell fixed-length packages with artificial endpoints. We outline a realistic timeline during the intake process.',
  },
  {
    q: 'Will my dog forget the training when they come home?',
    a: 'Only if the owner stops maintaining it. That\'s why owner handoff sessions are required — we teach you the system so the behavior holds at home, not just with us.',
  },
  {
    q: 'Is board & train safe for aggressive dogs?',
    a: 'We work with aggression cases, but they require additional assessment and specific protocols. Describe the behavior honestly in the intake so we can evaluate the situation properly and advise on the right approach.',
  },
  {
    q: 'What does my dog\'s daily routine look like during the stay?',
    a: 'Structure, exercise, training repetitions, and rest — in that order. We don\'t use entertainment as a substitute for a proper behavioral framework.',
  },
  {
    q: 'Can I visit my dog during the stay?',
    a: 'This is evaluated case by case. For dogs working through serious behavioral issues, interrupting the immersion period can set back progress. We discuss this during intake.',
  },
];


const pageJsonLd = buildSchemaGraph(
  buildServiceSchema({
    name: 'Board and Train Dog Training',
    description: 'Proven board and train programs in Jacksonville, FL for reactive, aggressive, and high-drive dogs. Owner education included. Real-world off-leash results with lifetime support. Book your spot today.',
    path: '/services/board-and-train',
    serviceType: 'Board and Train',
  }),
  buildBreadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Board and Train', path: '/services/board-and-train' },
  ]),
  buildFaqPageSchema(faqs)
);

export default function BoardAndTrainPage() {
  return (
    <div className="page-enter">
      
      <JsonLd data={pageJsonLd} />
{/* ── Hero ──────────────────────────────────────── */}
      <section
        className="relative min-h-[65vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden bg-gradient-to-br from-[#7A8B66]/10 via-[#050505] to-[#050505]"
        aria-labelledby="bat-hero-heading"
      >
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <Calendar className="w-12 h-12 text-[#7A8B66] mx-auto mb-6" aria-hidden="true" />
          <h1
            id="bat-hero-heading"
            className="font-oswald text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[1] mb-6 text-white drop-shadow-2xl"
          >
            Board &amp; Train Programs in Jacksonville, FL –{' '}
            <span className="text-[#7A8B66]">Real Results That Last</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed">
            Your dog stays with us, lives inside a structured system around the clock, and
            comes home a fundamentally different dog — as long as you maintain the work.
          </p>
        </div>
      </section>

      {/* ── What to Expect ────────────────────────────── */}
      <section
        className="py-24 bg-[#050505] border-b border-[#1A2030]"
        aria-labelledby="bat-expect-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="bat-expect-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-6"
          >
            What to Expect from Board &amp; Train
          </h2>
          <p className="text-[#C5C6C7] text-lg leading-relaxed">
            Immersive daily structure, focused behavior work, and a required owner handoff so
            results transfer home — not just hold while your dog is with us. We specialize in
            reactive, aggressive, and high-drive dogs that need more than weekly lessons.
          </p>
        </div>
      </section>

      {/* ── Who It's For / Not For ────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="bat-fit-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="bat-fit-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center"
          >
            Is Board &amp; Train Right for Reactive Dogs?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1A2030] p-10 border-l-4 border-[#7A8B66]">
              <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-6">
                Board &amp; Train Works Well If…
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
                <Link href="/services/in-home-dog-training" className="underline hover:text-[#FF5E00]">
                  See if In-Home Training fits better.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────── */}
      <section
        className="py-24 bg-[#050505] border-b border-[#1A2030]"
        aria-labelledby="bat-process-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              id="bat-process-heading"
              className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4"
            >
              Our Proven Process &amp; Owner Handover
            </h2>
            <p className="text-[#C5C6C7] text-lg leading-relaxed">
              Immersion is not a vacation. It is a deliberate, structured process — and owner
              participation at the end is what makes the results last.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="bg-[#0B0C10] border border-[#1A2030] p-8 flex gap-6">
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

      {/* ── Safety ────────────────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="bat-safety-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-10">
            <ShieldCheck className="w-10 h-10 text-[#7A8B66] flex-shrink-0 mt-1" aria-hidden="true" />
            <h2
              id="bat-safety-heading"
              className="font-oswald text-3xl font-bold uppercase tracking-widest text-[#7A8B66]"
            >
              Safety &amp; Transparency
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

      {/* ── FAQ ───────────────────────────────────────── */}
      <section
        className="py-24 bg-[#050505] border-b border-[#1A2030]"
        aria-labelledby="bat-faq-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="bat-faq-heading"
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
        aria-labelledby="bat-cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="bat-cta-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]"
          >
            Ready to Reset?
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-10">
            Start the intake and we&apos;ll evaluate your dog&apos;s situation to confirm
            board &amp; train is the right fit before any commitment is made.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <OpenModalButton
              className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center justify-center gap-3"
              ariaLabel="Start your free board and train intake"
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
