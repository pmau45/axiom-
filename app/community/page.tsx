import type { Metadata } from 'next';
import { Heart, Shield, ArrowRight } from 'lucide-react';
import OpenModalButton from '../components/forms/OpenModalButton';
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer';
import JsonLd from '../components/seo/JsonLd';
import {
  buildBreadcrumbList,
  buildSchemaGraph,
  buildServiceSchema,
} from '../lib/schema';

export const metadata: Metadata = {
  title: 'Axiom Cares — Free Rescue & Adoption Support',
  description:
    'Free rescue & adoption adjustment visits in Jacksonville, FL. Axiom Cares helps newly adopted dogs settle in safely — no judgment, no pressure, no bill.',
  alternates: {
    canonical: '/community',
  },
};

const communityJsonLd = buildSchemaGraph(
  buildServiceSchema({
    name: 'Axiom Cares — Free Rescue & Adoption Support',
    description:
      'Free in-home visits for rescue and adoption adjustments in Jacksonville, FL. No judgment, no pressure, no bill.',
    path: '/community',
    serviceType: 'Rescue Dog Training Support',
    areaServed: ['Jacksonville', 'Ponte Vedra Beach', 'Nocatee', 'St. Augustine'],
    price: '0',
  }),
  buildBreadcrumbList([
    { name: 'Home', path: '/' },
    { name: 'Axiom Cares', path: '/community' },
  ])
);

export default function CommunityPage() {
  return (
    <div className="page-enter">
      <JsonLd data={communityJsonLd} />
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden bg-gradient-to-br from-[#5B8FA8]/10 via-[#050505] to-[#050505]"
        aria-labelledby="community-hero-heading"
      >
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <h1
            id="community-hero-heading"
            className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[1] mb-6 text-white drop-shadow-2xl"
          >
            No Dog Should Lose{' '}
            <span className="text-[#5B8FA8]">Their Home.</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed">
            Some problems just need the right guidance. Axiom Cares exists for the owners who need
            help the most — no judgment, no pressure, no bill.
          </p>
        </div>
      </section>

      {/* ── Programs ──────────────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030] relative"
        aria-labelledby="programs-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="programs-heading" className="sr-only">
            Axiom Cares Programs
          </h2>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <StaggerItem>
              <div className="bg-[#1A2030] p-10 border-t-4 border-[#5B8FA8] shadow-lg h-full">
                <Heart className="w-12 h-12 text-[#5B8FA8] mb-6" aria-hidden="true" />
                <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-4">
                  Rescue Ready
                </h3>
                <p className="text-[#C5C6C7] leading-relaxed mb-6">
                  If you&apos;re adopting or have recently rescued a dog, we&apos;ll come to you.
                  Free. No strings attached.
                </p>
                <p className="text-[#E8D5B7] text-sm font-bold uppercase tracking-widest">
                  Free In-Home Visit · Jacksonville Area
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#1A2030] p-10 border-t-4 border-[#FF5E00] shadow-lg h-full">
                <Shield className="w-12 h-12 text-[#FF5E00] mb-6" aria-hidden="true" />
                <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-4">
                  Before You Let Go
                </h3>
                <p className="text-[#C5C6C7] leading-relaxed mb-6">
                  If you&apos;re considering rehoming or surrendering, reach out. We&apos;ll give you
                  a real, honest plan — at our expense.
                </p>
                <p className="text-[#E8D5B7] text-sm font-bold uppercase tracking-widest">
                  Free Assessment · All Options On The Table
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section
        className="py-24 bg-[#050505] relative border-t border-[#1A2030]"
        aria-labelledby="community-cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="community-cta-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#E8D5B7]"
          >
            Reach Out. No Judgment.
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-10">
            We&apos;ll figure it out together. Fill out the form or call us directly.
          </p>
          <OpenModalButton
            className="btn-rugged btn-rugged-trust bg-[#5B8FA8] text-white font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center gap-3"
            ariaLabel="Send Axiom Cares a message"
          >
            Send Us a Message{' '}
            <ArrowRight className="w-6 h-6" aria-hidden="true" />
          </OpenModalButton>
        </div>
      </section>
    </div>
  );
}
