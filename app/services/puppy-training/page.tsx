import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, PawPrint } from 'lucide-react';
import OpenModalButton from '../../components/forms/OpenModalButton';

export const metadata: Metadata = {
  title: 'Puppy Training Jacksonville, FL | Axiom Canine',
  description:
    'Puppy training in Jacksonville, FL that builds manners, leash skills, and calm structure early. In-home and group options for puppies across Ponte Vedra, Nocatee, and St. Johns County.',
  keywords: [
    'puppy training Jacksonville FL',
    'puppy classes Jacksonville',
    'puppy trainer near me',
    'puppy obedience Jacksonville',
    'puppy training Ponte Vedra',
    'puppy training Nocatee',
  ],
  alternates: {
    canonical: '/services/puppy-training',
  },
};

const foundations = [
  'Name response, sit, down, place, and calm greetings',
  'Loose-leash walking before bad habits lock in',
  'Crate and alone-time structure that prevents separation issues',
  'Bite inhibition and household manners around kids and guests',
  'Public neutrality around dogs, bikes, and beach/trail distractions',
];

const windows = [
  {
    title: '8–16 Weeks',
    desc: 'Critical socialization window. We build confidence and clear rules without flooding the puppy.',
  },
  {
    title: '4–6 Months',
    desc: 'Adolescent energy arrives. Structure, leash skills, and impulse control become non-negotiable.',
  },
  {
    title: '6–12 Months',
    desc: 'Habits either stick or spiral. This is when most “cute puppy problems” become adult behavior cases.',
  },
];

const faqs = [
  {
    q: 'When should I start puppy training in Jacksonville?',
    a: 'As soon as your puppy is home and cleared for controlled outings. Early structure prevents leash pulling, jumping, and anxiety from becoming default behaviors.',
  },
  {
    q: 'Do you offer in-home puppy training?',
    a: 'Yes. Most puppy work starts in the home and neighborhood where the habits actually form — then we expand to parks, trails, and public spaces.',
  },
  {
    q: 'Is group class enough for a puppy?',
    a: 'Group class helps with distractions once basics exist. If your puppy already jumps, bites hard, or panics alone, private or in-home work is usually the better first step.',
  },
  {
    q: 'Which areas do you serve for puppy training?',
    a: 'Jacksonville, Ponte Vedra, Nocatee, St. Augustine, Orange Park, Jacksonville Beach, Fernandina Beach, Palm Coast, and Brunswick, GA.',
  },
];

export default function PuppyTrainingPage() {
  return (
    <div className="page-enter">
      <section
        className="relative min-h-[65vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden bg-gradient-to-br from-[#FF5E00]/10 via-[#050505] to-[#050505]"
        aria-labelledby="puppy-hero-heading"
      >
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <PawPrint className="w-12 h-12 text-[#FF5E00] mx-auto mb-6" aria-hidden="true" />
          <h1
            id="puppy-hero-heading"
            className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[1] mb-6 text-white drop-shadow-2xl"
          >
            Puppy Training in{' '}
            <span className="text-[#FF5E00]">Jacksonville, FL</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed mb-10">
            Build manners, leash skills, and calm structure before bad habits become adult problems.
            Clear communication. Consistent rules. Results that hold in real life.
          </p>
          <OpenModalButton
            className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-lg font-bold uppercase tracking-widest px-8 py-4 inline-flex items-center gap-2"
            ariaLabel="Start free puppy training assessment"
          >
            Free Puppy Assessment <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </OpenModalButton>
        </div>
      </section>

      <section className="py-24 bg-[#0B0C10] border-b border-[#1A2030]" aria-labelledby="puppy-foundations-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="puppy-foundations-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4">
            What We Build First
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-8 leading-relaxed">
            Puppy training is not entertainment. It is a foundation for obedience, public manners, and a calmer household.
          </p>
          <ul className="space-y-4">
            {foundations.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#C5C6C7]">
                <CheckCircle2 className="w-5 h-5 text-[#FF5E00] flex-shrink-0 mt-0.5" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 bg-[#050505] border-b border-[#1A2030]" aria-labelledby="puppy-windows-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="puppy-windows-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center">
            Train to the Age Window
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {windows.map(({ title, desc }) => (
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
            Related Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: '/services/in-home-dog-training', title: 'In-Home Training', desc: 'Start where habits form — your house and neighborhood.' },
              { href: '/services/group-classes', title: 'Group Classes', desc: 'Practice manners around controlled distractions.' },
              { href: '/training-issues/separation-anxiety', title: 'Separation Anxiety', desc: 'If alone-time panic is already showing up, address it early.' },
            ].map(({ href, title, desc }) => (
              <Link key={href} href={href} className="bg-[#050505] border border-[#1A2030] hover:border-[#FF5E00] p-8 transition-colors group">
                <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-2 group-hover:text-[#FF5E00] transition-colors">{title}</h3>
                <p className="text-[#C5C6C7] text-sm leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#050505] border-b border-[#1A2030]" aria-labelledby="puppy-faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="puppy-faq-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center">
            Puppy Training FAQs
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

      <section className="py-24 bg-[#0B0C10] border-t border-[#1A2030]" aria-labelledby="puppy-cta-heading">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 id="puppy-cta-heading" className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]">
            Start Before Habits Harden.
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-10">
            Free assessment for Jacksonville-area puppies. Call{' '}
            <a href="tel:9044587561" className="text-[#FF5E00] hover:text-white transition-colors">(904) 458-7561</a>.
          </p>
          <OpenModalButton
            className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center gap-3"
            ariaLabel="Open free puppy assessment form"
          >
            Start Free Intake <ArrowRight className="w-6 h-6" aria-hidden="true" />
          </OpenModalButton>
        </div>
      </section>
    </div>
  );
}
