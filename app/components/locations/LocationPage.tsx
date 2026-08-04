import type { ReactNode } from 'react';
import Link from 'next/link';
import {
  Anchor,
  ArrowRight,
  Bike,
  Camera,
  Car,
  Dog,
  Droplets,
  Heart,
  Home,
  Landmark,
  MapPin,
  Palmtree,
  Phone,
  Sailboat,
  Shell,
  Shield,
  Sun,
  TreePine,
  Trees,
  Users,
  Waves,
  type LucideIcon,
} from 'lucide-react';
import OpenModalButton from '@/app/components/forms/OpenModalButton';
import { StaggerContainer, StaggerItem } from '@/app/components/animations/StaggerContainer';
import AnimatedSection from '@/app/components/animations/AnimatedSection';
import { FAQSection } from '@/app/components/ui/FAQSection';
import JsonLd from '@/app/components/seo/JsonLd';
import {
  buildBreadcrumbList,
  buildFaqPageSchema,
  buildLocationServiceSchema,
  buildSchemaGraph,
} from '@/app/lib/schema';
import { PHONE_DISPLAY, PHONE_TEL } from '@/app/lib/contact';
import type {
  LocationAccent,
  LocationIconName,
  LocationIntroPart,
  LocationPageData,
} from '@/app/data/locations/types';

const ICON_MAP: Record<LocationIconName, LucideIcon> = {
  Anchor,
  ArrowRight,
  Bike,
  Camera,
  Car,
  Dog,
  Droplets,
  Heart,
  Home,
  Landmark,
  Palmtree,
  Sailboat,
  Shell,
  Shield,
  Sun,
  TreePine,
  Trees,
  Users,
  Waves,
};

const ACCENT_HEX: Record<LocationAccent, string> = {
  orange: '#FF5E00',
  olive: '#7A8B66',
};

function renderIntro(parts: LocationIntroPart[]) {
  return parts.map((part, index) =>
    part.href ? (
      <Link
        key={`${part.text}-${index}`}
        href={part.href}
        className="text-[#FF5E00] hover:text-white transition-colors"
      >
        {part.text}
      </Link>
    ) : (
      <span key={`${part.text}-${index}`}>{part.text}</span>
    )
  );
}

function highlightText(
  text: string,
  highlights?: Array<{ match: string; className: string }>
) {
  if (!highlights?.length) return text;

  const nodes: ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    let earliest = -1;
    let hit: { match: string; className: string } | null = null;

    for (const h of highlights) {
      const idx = remaining.indexOf(h.match);
      if (idx !== -1 && (earliest === -1 || idx < earliest)) {
        earliest = idx;
        hit = h;
      }
    }

    if (!hit || earliest === -1) {
      nodes.push(remaining);
      break;
    }

    if (earliest > 0) {
      nodes.push(remaining.slice(0, earliest));
    }
    nodes.push(
      <span key={key++} className={hit.className}>
        {hit.match}
      </span>
    );
    remaining = remaining.slice(earliest + hit.match.length);
  }

  return nodes;
}

export default function LocationPage({ data }: { data: LocationPageData }) {
  const pageJsonLd = buildSchemaGraph(
    buildLocationServiceSchema(data.schemaName, `/${data.slug}`, data.schemaDescription),
    buildBreadcrumbList([
      { name: 'Home', path: '/' },
      { name: data.breadcrumbLabel, path: `/${data.slug}` },
    ]),
    buildFaqPageSchema(data.faqs)
  );

  const badgeBorder =
    data.badge.accent === 'olive' ? 'border-[#7A8B66]/30' : 'border-[#FF5E00]/30';
  const badgeIconColor =
    data.badge.accent === 'olive' ? 'text-[#7A8B66]' : 'text-[#FF5E00]';
  const headingAccentColor =
    data.badge.accent === 'olive' ? 'text-[#7A8B66]' : 'text-[#FF5E00]';
  const heroMinH = data.hero.size === 'large' ? 'min-h-[85vh]' : 'min-h-[75vh]';
  const heroHeadingSize =
    data.hero.size === 'large'
      ? 'text-5xl sm:text-6xl md:text-8xl'
      : 'text-4xl md:text-6xl lg:text-7xl';
  const ctaButtonLabel = data.cta.buttonLabel ?? 'Schedule Consultation';

  return (
    <div className="page-enter">
      <JsonLd data={pageJsonLd} />

      {/* ── Hero ──────────────────────────────────────── */}
      <section
        className={`relative ${heroMinH} flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden`}
        aria-labelledby={data.hero.headingId}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C10] via-[#050505] to-[#1A2030]" />
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />

        <div
          className={`mx-auto px-4 relative z-10 text-center ${
            data.hero.size === 'large' ? 'max-w-6xl' : 'max-w-5xl'
          }`}
        >
          <div
            className={`inline-flex items-center gap-2 mb-6 border ${badgeBorder} px-4 py-2 bg-[#050505]/60 backdrop-blur-sm`}
          >
            <MapPin className={`w-4 h-4 ${badgeIconColor}`} aria-hidden="true" />
            <span className="text-[#C5C6C7] font-bold tracking-[0.2em] uppercase text-sm">
              {data.badge.label}
            </span>
          </div>

          <h1
            id={data.hero.headingId}
            className={`font-oswald ${heroHeadingSize} font-bold uppercase tracking-tight leading-[0.9] mb-6 text-white`}
          >
            {data.hero.headingBefore}
            <span className={headingAccentColor}>{data.hero.headingAccent}</span>
            {data.hero.headingAfter}
          </h1>

          <p
            className={`font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed ${
              data.hero.subtext ? 'mb-6 text-lg md:text-2xl max-w-3xl' : 'mb-10 text-lg md:text-xl'
            }`}
          >
            {highlightText(data.hero.subtitle, data.hero.subtitleHighlights)}
          </p>

          {data.hero.subtext && (
            <p className="text-base md:text-lg font-light max-w-2xl mx-auto mb-12 text-[#7A8B66] leading-relaxed italic">
              {data.hero.subtext}
            </p>
          )}

          <div className="flex gap-4 justify-center flex-wrap">
            <OpenModalButton
              className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-lg md:text-xl font-bold uppercase tracking-widest px-8 md:px-10 py-4 md:py-5 inline-flex items-center gap-2 md:gap-3"
              ariaLabel="Request a free consultation"
            >
              Free Consultation <ArrowRight className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
            </OpenModalButton>
            <a
              href={PHONE_TEL}
              className="btn-rugged border-2 border-[#1A2030] text-[#C5C6C7] font-oswald text-lg md:text-xl font-bold uppercase tracking-widest px-8 md:px-10 py-4 md:py-5 inline-flex items-center gap-2 md:gap-3 hover:border-[#FF5E00] hover:text-white transition-colors"
            >
              {data.hero.showPhoneIcon && <Phone className="w-5 h-5" aria-hidden="true" />}
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ── Mission (hub) ─────────────────────────────── */}
      {data.mission && (
        <section
          className="py-24 bg-[#0B0C10] border-b border-[#1A2030] relative overflow-hidden"
          aria-labelledby="mission-heading"
        >
          <div
            className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#FF5E00]/5 to-transparent pointer-events-none"
            aria-hidden="true"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-12 bg-[#FF5E00]" aria-hidden="true" />
                  <span className="text-[#FF5E00] font-bold tracking-[0.2em] uppercase text-sm">
                    {data.mission.eyebrow}
                  </span>
                </div>
                <h2
                  id="mission-heading"
                  className="font-oswald text-5xl md:text-6xl font-bold uppercase tracking-tight leading-none text-white"
                >
                  {data.mission.headingBefore}{' '}
                  <span className="text-[#7A8B66]">{data.mission.headingAccent}</span>
                </h2>
              </div>
              <div className="lg:col-span-7">
                <div className="bg-[#1A2030] p-8 md:p-12 border border-white/5 relative shadow-2xl shadow-black/50">
                  <Heart
                    className="absolute top-6 right-6 w-10 h-10 text-[#FF5E00]/20"
                    aria-hidden="true"
                  />
                  {data.mission.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className={
                        i === 0
                          ? 'text-xl text-white font-light leading-relaxed mb-6'
                          : i === data.mission!.paragraphs.length - 1
                            ? 'text-[#C5C6C7] leading-relaxed'
                            : 'text-[#C5C6C7] leading-relaxed mb-6'
                      }
                    >
                      {highlightText(p.text, p.highlights)}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Neighborhoods (hub) ───────────────────────── */}
      {data.neighborhoods && (
        <section className="py-24 bg-[#050505] relative" aria-labelledby="areas-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12 bg-[#7A8B66]" aria-hidden="true" />
                <span className="text-[#7A8B66] font-bold tracking-[0.2em] uppercase text-sm">
                  {data.neighborhoods.eyebrow}
                </span>
                <div className="h-px w-12 bg-[#7A8B66]" aria-hidden="true" />
              </div>
              <h2
                id="areas-heading"
                className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4"
              >
                {data.neighborhoods.headingBefore}{' '}
                <span className="text-[#FF5E00]">{data.neighborhoods.headingAccent}</span>
              </h2>
              <p className="text-[#C5C6C7] text-lg max-w-2xl mx-auto">
                {data.neighborhoods.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {data.neighborhoods.areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 bg-[#1A2030]/50 border border-[#1A2030] px-4 py-3 hover:border-[#7A8B66]/50 transition-colors"
                >
                  <MapPin className="w-3 h-3 text-[#7A8B66] flex-shrink-0" aria-hidden="true" />
                  <span className="text-[#C5C6C7] text-sm">{area}</span>
                </div>
              ))}
            </div>

            {data.relatedLocations && data.relatedLocations.length > 0 && (
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.relatedLocations.map(({ href, title, description }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex items-center justify-between bg-[#1A2030] border border-[#1A2030] hover:border-[#FF5E00] p-6 transition-colors"
                  >
                    <div>
                      <h3 className="font-oswald text-lg uppercase tracking-widest text-white group-hover:text-[#FF5E00] transition-colors">
                        {title}
                      </h3>
                      <p className="text-[#C5C6C7] text-sm">{description}</p>
                    </div>
                    <ArrowRight
                      className="w-5 h-5 text-[#FF5E00] group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── Local context (satellite pages) ───────────── */}
      {data.local && (
        <section
          className="py-24 bg-[#0B0C10] border-b border-[#1A2030]"
          aria-labelledby={data.local.headingId}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id={data.local.headingId}
                className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4"
              >
                {data.local.headingBefore}{' '}
                <span className="text-white">{data.local.headingAccent}</span>
              </h2>
              <p className="text-[#C5C6C7] text-lg max-w-2xl mx-auto">{data.local.description}</p>
            </div>

            <StaggerContainer>
              <div className="grid md:grid-cols-3 gap-8">
                {data.local.features.map((feature) => {
                  const Icon = ICON_MAP[feature.icon];
                  const color = ACCENT_HEX[feature.accent];
                  return (
                    <AnimatedSection key={feature.title}>
                      <div
                        className="bg-[#1A2030] p-8 border-l-4 h-full"
                        style={{ borderLeftColor: color }}
                      >
                        <Icon className="w-8 h-8 mb-4" style={{ color }} aria-hidden="true" />
                        <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-[#C5C6C7] leading-relaxed">{feature.body}</p>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* ── About (expanded local content) ────────────── */}
      {data.about && (
        <section
          className="py-24 bg-[#050505] border-b border-[#1A2030]"
          aria-labelledby={data.about.headingId}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id={data.about.headingId}
              className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-10 text-center"
            >
              {data.about.headingBefore}{' '}
              <span className="text-white">{data.about.headingAccent}</span>
            </h2>
            <div className="space-y-6">
              {data.about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-[#C5C6C7] text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Service area + map ────────────────────────── */}
      {data.serviceArea && (
        <section
          className="py-24 bg-[#0B0C10] border-b border-[#1A2030]"
          aria-labelledby={data.serviceArea.headingId}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                id={data.serviceArea.headingId}
                className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-4"
              >
                {data.serviceArea.headingBefore}{' '}
                <span className="text-white">{data.serviceArea.headingAccent}</span>
              </h2>
              <p className="text-[#C5C6C7] text-lg max-w-2xl mx-auto">
                {data.serviceArea.description}
              </p>
            </div>

            <div
              className={`grid gap-10 items-start ${
                data.serviceArea.mapEmbedUrl ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 max-w-3xl mx-auto'
              }`}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {data.serviceArea.areas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 bg-[#1A2030]/50 border border-[#1A2030] px-4 py-3"
                  >
                    <MapPin className="w-3 h-3 text-[#FF5E00] flex-shrink-0" aria-hidden="true" />
                    <span className="text-[#C5C6C7] text-sm">{area}</span>
                  </div>
                ))}
              </div>

              {data.serviceArea.mapEmbedUrl && (
                <div className="border border-[#1A2030] bg-[#050505] overflow-hidden aspect-[4/3] min-h-[280px]">
                  <iframe
                    title={data.serviceArea.mapTitle ?? `Map of ${data.schemaName}`}
                    src={data.serviceArea.mapEmbedUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Services ──────────────────────────────────── */}
      <section
        className={`py-24 border-t border-[#1A2030] relative overflow-hidden ${
          data.services.style === 'featured' ? 'bg-[#0B0C10]' : 'bg-[#050505]'
        }`}
        aria-labelledby={data.services.headingId}
      >
        {data.services.style === 'featured' && (
          <div
            className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-[#7A8B66]/5 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {data.services.style === 'featured' ? (
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12 bg-[#FF5E00]" aria-hidden="true" />
                <span className="text-[#FF5E00] font-bold tracking-[0.2em] uppercase text-sm">
                  Programs
                </span>
                <div className="h-px w-12 bg-[#FF5E00]" aria-hidden="true" />
              </div>
              <h2
                id={data.services.headingId}
                className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6"
              >
                {data.services.heading}
                {data.services.headingAccent && (
                  <span className="text-[#7A8B66]"> {data.services.headingAccent}</span>
                )}
              </h2>
              {data.services.intro && (
                <p className="text-[#C5C6C7] text-lg leading-relaxed">
                  {renderIntro(data.services.intro)}
                </p>
              )}
            </div>
          ) : (
            <>
              <h2
                id={data.services.headingId}
                className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-12 text-center"
              >
                {data.services.heading}
              </h2>
              {data.services.intro && (
                <p className="text-[#C5C6C7] text-lg leading-relaxed text-center max-w-4xl mx-auto mb-12">
                  {renderIntro(data.services.intro)}
                </p>
              )}
            </>
          )}

          {data.services.style === 'featured' ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.services.links.map((link) => {
                const Icon = link.icon ? ICON_MAP[link.icon] : ArrowRight;
                const accent = ACCENT_HEX[link.hover];
                return (
                  <StaggerItem key={link.href}>
                    <Link
                      href={link.href}
                      className="group bg-[#1A2030] border border-[#1A2030] transition-all duration-300 p-10 flex flex-col h-full shadow-lg hover:border-[color:var(--hover)]"
                      style={{ ['--hover' as string]: accent }}
                    >
                      <Icon className="w-10 h-10 mb-6" style={{ color: accent }} aria-hidden="true" />
                      <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-4">
                        {link.title}
                      </h3>
                      <p className="text-[#C5C6C7] leading-relaxed mb-8 flex-grow">
                        {link.description}
                      </p>
                      <span
                        className="font-oswald text-sm uppercase tracking-widest border-b pb-1 self-start group-hover:text-white group-hover:border-white transition-colors"
                        style={{ color: accent, borderColor: accent }}
                      >
                        {link.ctaLabel ?? 'Learn More →'}
                      </span>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {data.services.links.map((link) => {
                const hoverText =
                  link.hover === 'olive'
                    ? 'group-hover:text-[#7A8B66]'
                    : 'group-hover:text-[#FF5E00]';
                const hoverBorder =
                  link.hover === 'olive' ? 'hover:border-[#7A8B66]' : 'hover:border-[#FF5E00]';
                const ctaColor = link.hover === 'olive' ? 'text-[#7A8B66]' : 'text-[#FF5E00]';
                return (
                  <Link
                    key={link.href + link.title}
                    href={link.href}
                    className={`bg-[#1A2030] p-8 border border-[#1A2030] ${hoverBorder} transition-colors group`}
                  >
                    <h3
                      className={`font-oswald text-xl uppercase tracking-widest text-white mb-3 ${hoverText} transition-colors`}
                    >
                      {link.title}
                    </h3>
                    <p className="text-[#C5C6C7] leading-relaxed mb-4">{link.description}</p>
                    <span className={`${ctaColor} font-semibold`}>
                      {link.ctaLabel ?? 'Learn more →'}
                    </span>
                  </Link>
                );
              })}
            </div>
          )}

          {data.services.showAllServicesLink && (
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="font-oswald text-lg font-bold uppercase tracking-widest px-8 py-4 inline-flex items-center gap-3 border border-[#1A2030] text-[#C5C6C7] hover:border-[#FF5E00] hover:text-white transition-colors"
              >
                View All Services &amp; Programs
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── Why choose (hub) ──────────────────────────── */}
      {data.whyChoose && (
        <section className="py-24 bg-[#050505] relative" aria-labelledby="why-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="why-heading"
                className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4"
              >
                {data.whyChoose.headingBefore}{' '}
                <span className="text-[#7A8B66]">{data.whyChoose.headingAccent}</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.whyChoose.items.map((item) => (
                <AnimatedSection key={item.title}>
                  <div className="bg-[#1A2030] p-8 border-t-4 border-[#1A2030] hover:border-[#FF5E00] transition-colors h-full">
                    <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-[#C5C6C7] leading-relaxed text-sm">{item.body}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 bg-[#0B0C10] border-t border-[#1A2030]">
        <div className="max-w-4xl mx-auto px-4">
          <FAQSection items={data.faqs} title={data.faqTitle} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section
        className="py-24 bg-[#050505] border-t border-[#1A2030] relative overflow-hidden"
        aria-labelledby={data.cta.headingId}
      >
        {data.hero.size === 'large' && (
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#FF5E00]/5 via-transparent to-[#7A8B66]/5 pointer-events-none"
            aria-hidden="true"
          />
        )}
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2
            id={data.cta.headingId}
            className={`font-oswald font-bold uppercase tracking-widest mb-4 ${
              data.cta.headingAccent
                ? 'text-4xl md:text-5xl tracking-tight text-white'
                : 'text-4xl text-[#7A8B66]'
            }`}
          >
            {data.cta.headingBefore}
            {data.cta.headingAccent && (
              <span className="text-[#FF5E00]">{data.cta.headingAccent}</span>
            )}
          </h2>
          <p
            className={`text-[#C5C6C7] text-lg ${data.cta.note ? 'mb-6 max-w-2xl mx-auto' : 'mb-10'}`}
          >
            {data.cta.description}
          </p>
          {data.cta.note && (
            <p className="text-[#7A8B66] text-sm mb-10 tracking-wide uppercase">{data.cta.note}</p>
          )}
          <OpenModalButton
            className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center gap-3"
            ariaLabel="Open free assessment form"
          >
            {ctaButtonLabel} <ArrowRight className="w-6 h-6" aria-hidden="true" />
          </OpenModalButton>
        </div>
      </section>
    </div>
  );
}
