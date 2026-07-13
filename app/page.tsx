import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Quote,
  LayoutTemplate,
  Repeat,
  Target,
  AlertTriangle,
  Compass,
} from 'lucide-react';
import OpenModalButton from './components/forms/OpenModalButton';
import { StaggerContainer, StaggerItem } from './components/animations/StaggerContainer';

export const metadata: Metadata = {
  title: {
    absolute: 'Professional Dog Training in Jacksonville, FL | Axiom Canine',
  },
  description:
    'Expert dog training in Jacksonville, FL. Specializing in reactivity, aggression, board & train, and owner education. Real-world results with high-drive breeds and off-leash proof. Free consultation available.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <div className="page-enter">
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden bg-gradient-to-b from-[#1A2030]/20 to-[#050505]"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 bg-texture opacity-40 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex flex-col items-center justify-center mb-8">
            <p className="text-[#C5C6C7] font-bold tracking-[0.2em] uppercase text-sm border border-[#1A2030] px-4 py-1 bg-[#050505]/80 shadow-md">
              Jacksonville, FL
            </p>
          </div>
          <h1
            id="hero-heading"
            className="font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[0.95] mb-8 text-white drop-shadow-2xl"
          >
            Expert Dog Training &amp; Behavior Modification in{' '}
            <span className="text-[#7A8B66]">Jacksonville, Florida</span>
          </h1>
          <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto mb-12 text-[#C5C6C7] leading-relaxed">
            If you&apos;re frustrated by your dog&apos;s behavior, you aren&apos;t alone. We help
            dog owners build real-world obedience through clear communication and mutual respect.
          </p>
          <OpenModalButton
            className="btn-rugged inline-flex items-center justify-center gap-3 bg-[#1A2030] text-white font-oswald text-xl uppercase tracking-widest px-10 py-5 border-2 border-[#FF5E00] shadow-2xl"
            ariaLabel="Open free assessment form"
          >
            Let&apos;s Get To Work{' '}
            <ArrowRight className="w-6 h-6 text-[#FF5E00]" aria-hidden="true" />
          </OpenModalButton>
        </div>
      </section>

      {/* ── Philosophy ────────────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030] relative"
        aria-labelledby="philosophy-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#FF5E00] shadow-[0_0_15px_rgba(255,94,0,0.3)]" aria-hidden="true" />
              <h2
                id="philosophy-heading"
                className="font-oswald text-5xl md:text-6xl font-bold uppercase tracking-tight leading-none text-[#7A8B66] pl-6"
              >
                We don&apos;t just train the dog.
                <br />
                <span className="text-[#FF5E00] mt-2 block">We teach the owner.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 bg-[#1A2030] p-8 md:p-12 border border-white/5 relative shadow-xl">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#0B0C10]" aria-hidden="true" />
              <h3 className="font-oswald text-2xl uppercase tracking-widest text-[#C5C6C7] mb-6">
                The Cycle of Frustration
              </h3>
              <p className="text-xl text-white font-light leading-relaxed mb-6">
                Without a clear structure, your dog makes their own rules. Without consistency, they
                never learn what&apos;s expected. And without proper follow-through, you never see
                lasting results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pillars ───────────────────────────────────── */}
      <section
        className="py-24 bg-[#050505] relative overflow-hidden"
        aria-labelledby="pillars-heading"
      >
        <div className="absolute right-0 top-0 w-1/3 h-full bg-texture opacity-10 pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20 max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#FF5E00]" aria-hidden="true" />
              <h2
                id="pillars-heading"
                className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66]"
              >
                An <span className="text-white">Axiom</span> is a foundational truth.
              </h2>
            </div>
            <p className="text-white text-xl md:text-2xl font-light leading-relaxed mb-6">
              Real transformation doesn&apos;t come from tricks or quick fixes. It comes from
              establishing a foundation built on three essential pillars.
            </p>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                Icon: LayoutTemplate,
                title: 'Structure',
                body: 'Structure gives your dog clarity. When they know exactly what to expect, the guesswork disappears, anxiety drops, and learning finally begins.',
              },
              {
                Icon: Repeat,
                title: 'Consistency',
                body: 'Consistency builds deep understanding. It proves to your dog that your boundaries are reliable, safe, and not up for negotiation.',
              },
              {
                Icon: Target,
                title: 'Results',
                body: 'Results speak for themselves. We work alongside you until clarity is restored and obedience becomes second nature for your dog.',
              },
            ].map(({ Icon, title, body }) => (
              <StaggerItem key={title}>
                <article
                  className="bg-[#0B0C10] p-10 border-t-4 border-[#1A2030] hover:border-[#7A8B66] transition-colors duration-300 shadow-lg h-full"
                >
                  <Icon className="text-[#7A8B66] w-10 h-10 mb-6" aria-hidden="true" />
                  <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-4">
                    {title}
                  </h3>
                  <p className="text-[#C5C6C7] leading-relaxed">{body}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030] relative"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              id="services-heading"
              className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-6"
            >
              Our Services
            </h2>
            <p className="text-[#C5C6C7] text-lg leading-relaxed">
              Every dog is different. Every problem has a root. We offer three programs
              designed to address what&apos;s actually going on — matched to the dog, the
              behavior, and your lifestyle.
            </p>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StaggerItem>
              <Link
                href="/services/behavior-modification"
                className="group bg-[#1A2030] border border-[#1A2030] hover:border-[#FF5E00] transition-colors duration-300 p-10 flex flex-col shadow-lg h-full"
                aria-label="Learn more about Behavior Modification"
              >
                <div className="flex items-center gap-4 mb-6">
                  <AlertTriangle className="text-[#FF5E00] w-10 h-10 flex-shrink-0" aria-hidden="true" />
                  <h3 className="font-oswald text-2xl uppercase tracking-widest text-white">
                    Behavior Modification
                  </h3>
                </div>
                <p className="text-[#C5C6C7] leading-relaxed mb-8 flex-grow">
                  Reactivity, aggression, and resource guarding don&apos;t fix themselves. We
                  rehabilitate the dogs other trainers turn away by addressing the root cause.
                </p>
                <span className="font-oswald text-sm uppercase tracking-widest text-[#FF5E00] border-b border-[#FF5E00] pb-1 self-start group-hover:text-white group-hover:border-white transition-colors">
                  Learn More →
                </span>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link
                href="/services/advanced-obedience"
                className="group bg-[#1A2030] border border-[#1A2030] hover:border-[#7A8B66] transition-colors duration-300 p-10 flex flex-col shadow-lg h-full"
                aria-label="Learn more about Advanced Obedience"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Compass className="text-[#7A8B66] w-10 h-10 flex-shrink-0" aria-hidden="true" />
                  <h3 className="font-oswald text-2xl uppercase tracking-widest text-white">
                    Advanced Obedience
                  </h3>
                </div>
                <p className="text-[#C5C6C7] leading-relaxed mb-8 flex-grow">
                  A dog that only listens at home isn&apos;t trained. We build bulletproof recall,
                  public neutrality, and off-leash reliability that holds up in the real world.
                </p>
                <span className="font-oswald text-sm uppercase tracking-widest text-[#7A8B66] border-b border-[#7A8B66] pb-1 self-start group-hover:text-white group-hover:border-white transition-colors">
                  Learn More →
                </span>
              </Link>
            </StaggerItem>
          </StaggerContainer>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="font-oswald text-lg font-bold uppercase tracking-widest px-8 py-4 inline-flex items-center gap-3 border border-[#1A2030] text-[#C5C6C7] hover:border-[#FF5E00] hover:text-white transition-colors"
            >
              View All Services &amp; Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
