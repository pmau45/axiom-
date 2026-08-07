import Script from 'next/script';

const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Google tag (gtag.js) — loads once and configs Ads and/or GA4 when set.
 * Ads ID example: AW-18020403242
 */
export default function GoogleTag() {
  const primaryId = ADS_ID || GA_ID;
  if (!primaryId) return null;

  const configCalls = [ADS_ID, GA_ID]
    .filter((id): id is string => Boolean(id))
    .map((id) => `gtag('config', '${id}');`)
    .join('\n');

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${configCalls}
        `.trim()}
      </Script>
    </>
  );
}
