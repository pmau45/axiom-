'use client';

import { useEffect } from 'react';
import { trackEmailClick, trackPhoneCallClick } from '@/app/lib/analytics';

/**
 * Site-wide delegated click tracking for tel: and mailto: links.
 */
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href')?.trim();
      if (!href) return;

      const protocol = href.split(':')[0]?.toLowerCase();
      if (protocol === 'tel') {
        trackPhoneCallClick(href);
      } else if (protocol === 'mailto') {
        trackEmailClick(href);
      }
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
