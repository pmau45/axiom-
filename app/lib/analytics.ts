export type TrackEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: TrackEventParams) => void;
  }
}

const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

function pageLocation(): string | undefined {
  if (typeof window === 'undefined') return undefined;
  return window.location.href;
}

/** Safe gtag event — no-ops on the server and when `window.gtag` is missing. */
export function trackEvent(name: string, params?: TrackEventParams): void {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}

function trackAdsConversion(label: string | undefined): void {
  if (!ADS_ID || !label) return;
  trackEvent('conversion', { send_to: `${ADS_ID}/${label}` });
}

export function trackGenerateLead(formName: string): void {
  trackEvent('generate_lead', {
    form_name: formName,
    page_location: pageLocation(),
  });
  trackAdsConversion(process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL);
}

export function trackPhoneCallClick(linkUrl: string): void {
  trackEvent('phone_call_click', {
    link_url: linkUrl,
    page_location: pageLocation(),
  });
  trackAdsConversion(process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL);
}

export function trackEmailClick(linkUrl: string): void {
  trackEvent('email_click', {
    link_url: linkUrl,
    page_location: pageLocation(),
  });
}
