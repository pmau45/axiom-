import type { Metadata } from 'next';
import { Heart, Shield, ArrowRight } from 'lucide-react';
import OpenModalButton from '../components/forms/OpenModalButton';
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer';
import JsonLd from '../components/seo/JsonLd';
import { buildPageMetadata } from '../lib/seo';
import {
  buildBreadcrumbList,
  buildSchemaGraph,
  buildServiceSchema,
} from '../lib/schema';

export const metadata: Metadata = buildPageMetadata({
  title: 'Rescue Dog Support in Jacksonville',
  description:
    'Free rescue and adoption support in Jacksonville, FL. Axiom Cares helps newly adopted dogs settle in — no judgment, no pressure, no bill.',
  path: '/community',
});

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
            Free Rescue Dog Support in{' '}
            <span className="text-[#5B8FA8]">Jacksonville</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed">
            Some problems just need the right guidance. Axiom Cares exists for the owners who need
            help the most. No judgment, no pressure, no bill.
          </p>
        </div>
      </section>

      {/* ── First-person ──────────────────────────────── */}
      <section
        className="py-24 bg-[#050505] border-b border-[#1A2030]"
        aria-labelledby="cares-about-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="cares-about-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#5B8FA8] mb-10 text-center"
          >
            Why I Built Axiom Cares
          </h2>
          <div className="space-y-6 text-[#C5C6C7] text-lg leading-relaxed">
            <p>
              I started Axiom Cares because I kept meeting people at the worst moment. You just
              brought a rescue home and nothing looks like the adoption photos. Or you have lived
              with this dog for years and you are one bad week away from giving them up. I have
              heard both. I still want that call.
            </p>
            <p>
              Axiom Cares is the part of this work that does not come with a bill. Rescue Ready is
              a free in-home visit for newly adopted and rescue dogs. I come to your house in
              Jacksonville and across Northeast Florida. We look at the dog where the habits
              actually happen, not in a quiet lobby. I will tell you what I see, what I would do
              first, and what is going to take more time. There is no invoice for that visit. If
              you want a training program after, we can talk. If you do not, you still leave with a
              plan.
            </p>
            <p>
              If you are thinking about rehoming or surrender, ask for a Surrender Prevention
              assessment. Same terms. Free. Honest. I would rather work the problem than watch
              another dog lose its home over something we could have trained. Too many dogs get
              surrendered because nobody sat down and gave the owner a real next step. Before You
              Let Go is that conversation. I will look at the whole picture and tell you what is
              actually on the table.
            </p>
            <p>
              I work reactivity, aggression, and resource guarding. I work puppies. Off-leash
              reliability is something we build when the dog is ready, not a promise on day one. I
              take cases other trainers turn away. I will not tell you it will be easy. I will show
              up, look at the dog, and tell you the truth.
            </p>
            <p>
              A lot of the calls are the same feeling in different houses. The new rescue will not
              settle. Walks turned into a fight. The dog you have had for years started guarding
              food or space. Someone already told you no. That is still the work I take. I am not
              here to scold you for how you got here. I am here to look at the dog in your home and
              give you a plan you can use.
            </p>
            <p>
              If you are in Jacksonville, the Beaches, Ponte Vedra, Nocatee, St. Augustine, or the
              rest of our Northeast Florida service area, fill out the form or call. We will figure
              out whether Rescue Ready or a Surrender Prevention assessment is the right first
              visit. No judgment. No pressure. No bill on Axiom Cares visits.
            </p>
          </div>
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
                  If you are adopting or you just brought a rescue home, I will come to you. Free
                  in-home visit. No strings attached.
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
                  If you are considering rehoming or surrendering, reach out. I will give you a
                  real, honest plan at my expense.
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
            service="rescue"
          >
            Send Us a Message{' '}
            <ArrowRight className="w-6 h-6" aria-hidden="true" />
          </OpenModalButton>
        </div>
      </section>
    </div>
  );
}
