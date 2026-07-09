import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Home, Calendar, Users, AlertTriangle, Compass } from 'lucide-react';
import OpenModalButton from '../components/forms/OpenModalButton';

export const metadata: Metadata = {
  title:
    'Dog Training Services Jacksonville FL | In-Home, Board & Train, Group Classes | Axiom Canine',
  description:
    "Axiom Canine offers in-home dog training, board & train, and group classes in Jacksonville, FL. Find the right program for your dog's behavior and your lifestyle.",
  alternates: {
    canonical: '/services',
  },
};

const programs = [
  {
    Icon: Home,
    title: 'In-Home Dog Training',
    href: '/services/in-home-dog-training',
    color: '#FF5E00',
    best: ['Behavior issues in the home environment', 'Owners who want to be hands-on', 'Dogs that do better in familiar surroundings'],
    body: 'We come to you. Training happens in the environment where problems actually occur — your home, your yard, your neighborhood.',
  },
  {
    Icon: Calendar,
    title: 'Board & Train',
    href: '/services/board-and-train',
    color: '#7A8B66',
    best: ['Busy owners who need fast results', 'Severe behavior issues requiring full immersion', 'Dogs that need constant structure to reset'],
    body: 'Your dog stays with us for a structured training block. We build the foundation; you learn the handoff.',
  },
  {
    Icon: Users,
    title: 'Group Classes',
    href: '/services/group-classes',
    color: '#5B8FA8',
    best: ['Socialization around controlled distractions', 'Owners who benefit from coached repetition', 'Dogs that have basic foundations in place'],
    body: 'Practice in a structured group environment with guided coaching. Real distractions, real progress.',
  },
];

const trainingIssues = [
  {
    title: 'Puppy Training',
    href: '/services/puppy-training',
    desc: 'Foundations, manners, and leash skills before bad habits lock in.',
  },
  {
    title: 'Reactive Dog',
    href: '/training-issues/reactive-dog',
    desc: 'Lunging, barking, and fixating on other dogs or people.',
  },
  {
    title: 'Leash Pulling',
    href: '/training-issues/leash-pulling',
    desc: 'Walks that feel like being dragged — every single time.',
  },
  {
    title: 'Aggression',
    href: '/training-issues/aggression',
    desc: 'Growling, snapping, or biting that puts people or animals at risk.',
  },
  {
    title: 'Separation Anxiety',
    href: '/training-issues/separation-anxiety',
    desc: 'Panic, destruction, or nonstop barking when left alone.',
  },
  {
    title: 'Resource Guarding',
    href: '/training-issues/resource-guarding',
    desc: 'Growling or snapping over food, toys, space, or people.',
  },
  {
    title: 'Behavior Modification',
    href: '/services/behavior-modification',
    desc: 'Deeper behavioral patterns that require a structured rehabilitation approach.',
  },
  {
    title: 'Advanced Obedience',
    href: '/services/advanced-obedience',
    desc: 'Off-leash reliability, bulletproof recall, and public neutrality.',
  },
];

export default function ServicesPage() {
  return (
    <div className="page-enter">
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden bg-gradient-to-b from-[#1A2030]/20 to-[#050505]"
        aria-labelledby="services-hero-heading"
      >
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <p className="text-[#C5C6C7] font-bold tracking-[0.2em] uppercase text-sm border border-[#1A2030] px-4 py-1 bg-[#050505]/80 shadow-md inline-block mb-8">
            Jacksonville, FL
          </p>
          <h1
            id="services-hero-heading"
            className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[1] mb-6 text-white drop-shadow-2xl"
          >
            The Right Program{' '}
            <span className="text-[#FF5E00]">For Your Dog.</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed">
            Three training formats. One system. We match the program to the dog, the behavior,
            and your lifestyle — so results actually stick.
          </p>
        </div>
      </section>

      {/* ── Program Selector ──────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="programs-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              id="programs-heading"
              className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4"
            >
              Choose Your Path
            </h2>
            <p className="text-[#C5C6C7] text-lg leading-relaxed">
              Not sure which program fits? Start an intake and we&apos;ll recommend the right
              format based on your dog&apos;s behavior profile and your schedule.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map(({ Icon, title, href, color, best, body }) => (
              <Link
                key={href}
                href={href}
                className="group bg-[#1A2030] border border-[#1A2030] hover:border-[#FF5E00] transition-colors duration-300 p-10 flex flex-col shadow-lg"
                aria-label={`Learn more about ${title}`}
              >
                <Icon
                  className="w-10 h-10 mb-6 flex-shrink-0"
                  style={{ color }}
                  aria-hidden="true"
                />
                <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-4">
                  {title}
                </h3>
                <p className="text-[#C5C6C7] leading-relaxed mb-6 flex-grow">{body}</p>
                <div className="mb-6">
                  <p className="font-oswald text-xs uppercase tracking-widest text-[#C5C6C7]/60 mb-2">
                    Best for
                  </p>
                  <ul className="space-y-1">
                    {best.map((b) => (
                      <li key={b} className="text-sm text-[#C5C6C7] flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 mt-1 flex-shrink-0 text-[#FF5E00]" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="font-oswald text-sm uppercase tracking-widest text-[#FF5E00] border-b border-[#FF5E00] pb-1 self-start group-hover:text-white group-hover:border-white transition-colors">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Training Issues ───────────────────────────── */}
      <section
        className="py-24 bg-[#050505] border-b border-[#1A2030]"
        aria-labelledby="issues-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AlertTriangle className="w-12 h-12 text-[#FF5E00] mx-auto mb-4" aria-hidden="true" />
            <h2
              id="issues-heading"
              className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4"
            >
              Common Training Issues
            </h2>
            <p className="text-[#C5C6C7] text-lg leading-relaxed">
              Every problem behavior has a root cause. Click below to learn how we approach
              specific issues — and which program fits best.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingIssues.map(({ title, href, desc }) => (
              <Link
                key={href}
                href={href}
                className="group bg-[#0B0C10] border border-[#1A2030] hover:border-[#FF5E00] p-8 transition-colors duration-300 flex flex-col"
              >
                <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3 group-hover:text-[#FF5E00] transition-colors">
                  {title}
                </h3>
                <p className="text-[#C5C6C7] text-sm leading-relaxed flex-grow">{desc}</p>
                <span className="mt-4 font-oswald text-sm uppercase tracking-widest text-[#FF5E00]/60 group-hover:text-[#FF5E00] transition-colors">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Affects Cost ─────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="cost-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Compass className="w-10 h-10 text-[#7A8B66] flex-shrink-0" aria-hidden="true" />
            <h2
              id="cost-heading"
              className="font-oswald text-3xl font-bold uppercase tracking-widest text-[#7A8B66]"
            >
              What Affects the Investment
            </h2>
          </div>
          <p className="text-[#C5C6C7] text-lg leading-relaxed mb-8">
            We don&apos;t publish one-size-fits-all pricing because training plans are tailored to
            each dog. Factors that influence the scope of work include:
          </p>
          <ul className="space-y-4">
            {[
              'Severity and duration of the behavior issue',
              'Number of behaviors being addressed',
              'Training format — in-home, board & train, or group',
              'Dog age, breed, and prior training history',
              'Owner consistency and availability for follow-through sessions',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#C5C6C7]">
                <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-[#FF5E00]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[#C5C6C7] text-lg leading-relaxed">
            The best next step is a free intake assessment. We&apos;ll evaluate the situation and
            recommend the right plan before any commitment is made.
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section
        className="py-24 bg-[#050505] border-t border-[#1A2030]"
        aria-labelledby="services-cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="services-cta-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]"
          >
            Not Sure Where to Start?
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-4">
            Start an intake. We&apos;ll ask the right questions, evaluate the behavior, and
            recommend the program that actually fits.
          </p>
          <p className="text-[#C5C6C7]/60 text-sm mb-10">
            Serving Jacksonville, Ponte Vedra, Nocatee, St. Augustine, and Nassau County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <OpenModalButton
              className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center justify-center gap-3"
              ariaLabel="Start your free intake assessment"
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
