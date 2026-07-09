import type { Metadata } from 'next';
import { Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import OpenModalButton from '../components/forms/OpenModalButton';

export const metadata: Metadata = {
  title: 'Contact Axiom Canine | Dog Training Jacksonville, FL',
  description:
    'Get in touch with Axiom Canine. We offer in-home dog training, board & train, and group classes across Jacksonville, Ponte Vedra, Nocatee, and St. Augustine, FL.',
  alternates: {
    canonical: '/contact',
  },
};

const serviceAreas = [
  'Jacksonville, FL',
  'Jacksonville Beach, FL',
  'Ponte Vedra Beach, FL',
  'Nocatee, FL',
  'Orange Park, FL',
  'St. Augustine, FL',
  'Fernandina Beach, FL',
  'Palm Coast, FL',
  'Brunswick, GA',
  'Nassau County, FL',
];

const intakeSteps = [
  {
    step: '01',
    title: 'Submit the Intake Form',
    desc: 'Tell us about your dog, the behavior you\'re seeing, and what program interests you. Takes about two minutes.',
  },
  {
    step: '02',
    title: 'We Reach Out Within 24 Hours',
    desc: 'A real person from our team will call or text to ask follow-up questions and discuss options — no automated sales funnel.',
  },
  {
    step: '03',
    title: 'Assessment & Recommendation',
    desc: 'We evaluate your dog\'s behavior profile and recommend the right program. No obligation, no pressure.',
  },
  {
    step: '04',
    title: 'We Build Your Plan',
    desc: 'Once we agree on a path forward, we create a structured plan with clear milestones and owner education built in.',
  },
];

const faqs = [
  {
    q: 'How quickly will you respond after I submit the form?',
    a: 'We respond within 24 hours on business days. If your situation is urgent, call us directly at (904) 458-7561.',
  },
  {
    q: 'Do I have to commit to a full program before talking to you?',
    a: 'No. The intake process is free and carries no obligation. We want to make sure we\'re the right fit before either of us commits.',
  },
  {
    q: 'Do you serve areas outside Jacksonville?',
    a: 'We serve Jacksonville and surrounding areas including Ponte Vedra, Nocatee, St. Augustine, and Nassau County. Contact us if you\'re outside those areas and we\'ll let you know.',
  },
  {
    q: 'What if I\'m not sure which service is right for my dog?',
    a: 'That\'s exactly what the intake is for. Describe what\'s going on and we\'ll recommend the most appropriate program based on the behavior and your lifestyle.',
  },
  {
    q: 'I have an aggressive dog — will you still take my call?',
    a: 'Yes. Aggression is one of the issues we specifically address. Please describe the behavior honestly in the intake so we can assess the situation properly and discuss the right approach.',
  },
];

export default function ContactPage() {
  return (
    <div className="page-enter">
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden bg-gradient-to-b from-[#1A2030]/20 to-[#050505]"
        aria-labelledby="contact-hero-heading"
      >
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <h1
            id="contact-hero-heading"
            className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[1] mb-6 text-white drop-shadow-2xl"
          >
            Let&apos;s Talk About{' '}
            <span className="text-[#FF5E00]">Your Dog.</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed">
            We&apos;ll respond within 24 hours. No automated responses, no sales pressure —
            just a real conversation about what your dog needs.
          </p>
        </div>
      </section>

      {/* ── Contact Info + CTA ────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="contact-info-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: info */}
            <div>
              <h2
                id="contact-info-heading"
                className="font-oswald text-3xl font-bold uppercase tracking-widest text-[#7A8B66] mb-10"
              >
                Get in Touch
              </h2>
              <div className="space-y-8">
                <address className="not-italic">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#FF5E00] flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-oswald uppercase tracking-widest text-sm text-[#C5C6C7]/60 mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:9044587561"
                        className="text-white text-xl font-bold hover:text-[#FF5E00] transition-colors"
                        aria-label="Call Axiom Canine at (904) 458-7561"
                      >
                        (904) 458-7561
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mt-6">
                    <MapPin className="w-6 h-6 text-[#FF5E00] flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-oswald uppercase tracking-widest text-sm text-[#C5C6C7]/60 mb-1">
                        Service Area
                      </p>
                      <ul className="space-y-1">
                        {serviceAreas.map((area) => (
                          <li key={area} className="text-white font-bold">
                            {area}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mt-6">
                    <Clock className="w-6 h-6 text-[#FF5E00] flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-oswald uppercase tracking-widest text-sm text-[#C5C6C7]/60 mb-1">
                        Response Time
                      </p>
                      <p className="text-white font-bold">Within 24 hours on business days</p>
                    </div>
                  </div>
                </address>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="bg-[#1A2030] border border-[#1A2030] p-10">
              <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-4">
                Start the Intake
              </h3>
              <p className="text-[#C5C6C7] leading-relaxed mb-8">
                The fastest way to get started is to fill out the intake form. It takes
                two minutes and gives us everything we need to reach out with real answers —
                not a generic price list.
              </p>
              <OpenModalButton
                className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 w-full inline-flex items-center justify-center gap-3"
                ariaLabel="Start your free intake assessment"
              >
                Start Free Intake{' '}
                <ArrowRight className="w-6 h-6" aria-hidden="true" />
              </OpenModalButton>
              <p className="text-[#C5C6C7]/60 text-xs text-center mt-4">
                No obligation. We&apos;ll recommend the right program before any commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Happens Next ─────────────────────────── */}
      <section
        className="py-24 bg-[#050505] border-b border-[#1A2030]"
        aria-labelledby="next-steps-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <CheckCircle2 className="w-12 h-12 text-[#7A8B66] mx-auto mb-4" aria-hidden="true" />
            <h2
              id="next-steps-heading"
              className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4"
            >
              What Happens After You Submit
            </h2>
            <p className="text-[#C5C6C7] text-lg leading-relaxed">
              We believe in transparency. Here&apos;s exactly what to expect after you reach out.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {intakeSteps.map(({ step, title, desc }) => (
              <div key={step} className="bg-[#0B0C10] border border-[#1A2030] p-8 flex gap-6">
                <span
                  className="font-oswald text-4xl font-bold text-[#FF5E00]/30 flex-shrink-0 leading-none"
                  aria-hidden="true"
                >
                  {step}
                </span>
                <div>
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">
                    {title}
                  </h3>
                  <p className="text-[#C5C6C7] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030]"
        aria-labelledby="contact-faq-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="contact-faq-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center"
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {faqs.map(({ q, a }) => (
              <ContactFaqItem key={q} question={q} answer={a} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactFaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-[#050505] border border-[#1A2030] open:border-[#FF5E00] transition-colors">
      <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none select-none font-oswald text-lg uppercase tracking-widest text-white hover:text-[#FF5E00] transition-colors">
        <span>{question}</span>
        <span
          className="text-[#FF5E00] font-bold text-2xl leading-none group-open:rotate-45 transition-transform flex-shrink-0"
          aria-hidden="true"
        >
          +
        </span>
      </summary>
      <div className="px-6 pb-6 text-[#C5C6C7] leading-relaxed border-t border-[#1A2030] pt-4">
        {answer}
      </div>
    </details>
  );
}
