'use client';

import Link from 'next/link';
import { ShieldCheck, Phone } from 'lucide-react';
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  PHONE_ARIA,
  PRIMARY_CTA_LABEL,
  PRIMARY_CTA_ARIA,
} from '@/app/lib/contact';

interface FooterProps {
  onOpenModal: () => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#030304] py-16 border-t border-[#1A2030] pb-28 md:pb-16"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-[#7A8B66] w-6 h-6" aria-hidden="true" />
            <span className="font-oswald text-xl font-bold tracking-widest text-[#C5C6C7] uppercase">
              Axiom Canine
            </span>
          </div>
          <p className="text-[#949596] text-xs tracking-wider max-w-xs">
            Clear communication. Mutual respect.
          </p>
        </div>

        {/* Nav Links */}
        <nav aria-label="Footer navigation" className="flex flex-col gap-3 min-w-[160px]">
          <p className="font-oswald uppercase text-xs tracking-widest text-[#949596] mb-1">
            Services
          </p>
          <Link href="/services" className="text-[#C5C6C7] hover:text-[#FF5E00] transition-colors text-sm uppercase tracking-widest font-bold">
            All Services
          </Link>
          <Link href="/services/puppy-training" className="text-[#C5C6C7] hover:text-[#FF5E00] transition-colors text-sm uppercase tracking-widest font-bold">
            Puppy Training
          </Link>
          <Link href="/services/in-home-dog-training" className="text-[#C5C6C7] hover:text-[#FF5E00] transition-colors text-sm uppercase tracking-widest font-bold">
            In-Home Training
          </Link>
          <Link href="/services/board-and-train" className="text-[#C5C6C7] hover:text-[#FF5E00] transition-colors text-sm uppercase tracking-widest font-bold">
            Board &amp; Train
          </Link>
          <Link href="/training-issues/separation-anxiety" className="text-[#C5C6C7] hover:text-[#FF5E00] transition-colors text-sm uppercase tracking-widest font-bold">
            Separation Anxiety
          </Link>
        </nav>

        {/* Contact & CTA */}
        <div className="text-left w-full md:w-auto md:min-w-[240px]">
          <p className="font-oswald uppercase text-xs tracking-widest text-[#949596] mb-3">
            Get In Touch
          </p>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-3 text-[#FF5E00] hover:text-white transition-colors font-oswald text-2xl font-bold uppercase tracking-widest mb-4"
            aria-label={PHONE_ARIA}
          >
            <Phone className="w-6 h-6 shrink-0" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <address className="not-italic mb-6">
            <p className="text-[#C5C6C7] text-sm uppercase tracking-widest font-bold">
              Jacksonville · Jax Beach · Ponte Vedra · Nocatee · Orange Park · Fernandina · St. Augustine · Palm Coast · Brunswick, GA
            </p>
          </address>
          <button
            type="button"
            onClick={onOpenModal}
            className="w-full sm:w-auto text-sm font-bold uppercase tracking-widest text-[#050505] bg-[#FF5E00] px-6 py-3 hover:bg-orange-500 transition-colors border border-[#FF5E00] shadow-[0_0_15px_rgba(255,94,0,0.2)]"
            aria-label={PRIMARY_CTA_ARIA}
          >
            {PRIMARY_CTA_LABEL}
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center border-t border-[#1A2030] pt-8">
        <p className="text-[#949596] text-xs tracking-widest uppercase">
          &copy; {currentYear} Axiom Canine. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
