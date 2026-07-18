'use client';

import { useEffect, useRef, useState } from 'react';

const ELFSIGHT_APP_CLASS = 'elfsight-app-a75955aa-d445-4f7b-8357-b40838156c72';
const PLATFORM_SRC = 'https://elfsightcdn.com/platform.js';
const PLATFORM_ATTR = 'data-elfsight-platform';

/**
 * Elfsight Google Reviews embed.
 * Defers platform.js (and the heavy googleReviews.js it pulls) until the
 * section is near the viewport — keeps unused JS off the LCP critical path.
 */
export default function GoogleReviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      // Start loading slightly before the widget enters view
      { rootMargin: '200px 0px', threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    if (document.querySelector(`script[${PLATFORM_ATTR}]`)) return;

    const script = document.createElement('script');
    script.src = PLATFORM_SRC;
    script.async = true;
    script.setAttribute(PLATFORM_ATTR, 'true');
    document.body.appendChild(script);
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="min-h-[240px]">
      <div className={ELFSIGHT_APP_CLASS} data-elfsight-app-lazy />
    </div>
  );
}
