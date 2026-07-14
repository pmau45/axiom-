'use client';

import { Phone } from 'lucide-react';
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  PHONE_ARIA,
  PRIMARY_CTA_LABEL,
  PRIMARY_CTA_ARIA,
} from '@/app/lib/contact';

interface MobileStickyCTAProps {
  onOpenModal: () => void;
}

/**
 * Fixed bottom bar on mobile: tap-to-call + primary assessment CTA.
 * Hidden from md breakpoint up (desktop uses header/footer CTAs).
 */
export default function MobileStickyCTA({ onOpenModal }: MobileStickyCTAProps) {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-[#050505]/95 backdrop-blur-md border-t-2 border-[#FF5E00] safe-area-pb"
      role="complementary"
      aria-label="Quick contact actions"
    >
      <div className="grid grid-cols-2 gap-0">
        <a
          href={PHONE_TEL}
          className="flex items-center justify-center gap-2 py-3.5 px-3 text-[#FF5E00] font-oswald text-sm font-bold uppercase tracking-widest border-r border-[#1A2030] active:bg-[#1A2030] transition-colors"
          aria-label={PHONE_ARIA}
        >
          <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span className="truncate">{PHONE_DISPLAY}</span>
        </a>
        <button
          type="button"
          onClick={onOpenModal}
          className="flex items-center justify-center py-3.5 px-3 text-[#050505] bg-[#FF5E00] font-oswald text-sm font-bold uppercase tracking-widest active:bg-orange-500 transition-colors shadow-[0_0_20px_rgba(255,94,0,0.25)]"
          aria-label={PRIMARY_CTA_ARIA}
        >
          {PRIMARY_CTA_LABEL}
        </button>
      </div>
    </div>
  );
}
