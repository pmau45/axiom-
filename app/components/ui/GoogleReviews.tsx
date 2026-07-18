'use client';

import Script from 'next/script';

const ELFSIGHT_APP_CLASS = 'elfsight-app-a75955aa-d445-4f7b-8357-b40838156c72';

/**
 * Elfsight Google Reviews embed.
 * Loads platform.js lazily; the widget initializes when scrolled into view.
 */
export default function GoogleReviews() {
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <div className={ELFSIGHT_APP_CLASS} data-elfsight-app-lazy />
    </>
  );
}
