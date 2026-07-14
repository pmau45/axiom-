'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, Phone, Menu, X, ChevronDown } from 'lucide-react';
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  PHONE_ARIA,
  PRIMARY_CTA_LABEL,
  PRIMARY_CTA_ARIA,
} from '@/app/lib/contact';

interface NavbarProps {
  onOpenModal: () => void;
}

interface NavLink {
  href?: string;
  label: string;
  submenu?: NavLink[];
  accent?: 'blue';
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    {
      label: 'Training',
      submenu: [
        { href: '/services', label: 'All Services' },
        { href: '/services/puppy-training', label: 'Puppy Training' },
        { href: '/services/behavior-modification', label: 'Behavior Modification' },
        { href: '/services/advanced-obedience', label: 'Advanced Obedience' },
        { href: '/philosophy', label: 'Our Philosophy' },
      ],
    },
    {
      label: 'Issues',
      submenu: [
        { href: '/training-issues/aggression', label: 'Aggression' },
        { href: '/training-issues/reactive-dog', label: 'Reactive Dogs' },
        { href: '/training-issues/leash-pulling', label: 'Leash Pulling' },
        { href: '/training-issues/separation-anxiety', label: 'Separation Anxiety' },
        { href: '/training-issues/resource-guarding', label: 'Resource Guarding' },
      ],
    },
    {
      label: 'Areas',
      submenu: [
        { href: '/jacksonville', label: 'Jacksonville' },
        { href: '/jacksonville-beach', label: 'Jax Beach' },
        { href: '/ponte-vedra', label: 'Ponte Vedra' },
        { href: '/nocatee', label: 'Nocatee' },
        { href: '/orange-park', label: 'Orange Park' },
        { href: '/st-augustine', label: 'St. Augustine' },
        { href: '/fernandina-beach', label: 'Fernandina Beach' },
        { href: '/palm-coast', label: 'Palm Coast' },
        { href: '/brunswick-ga', label: 'Brunswick, GA' },
      ],
    },
    { href: '/community', label: 'Axiom Cares', accent: 'blue' as const },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className="fixed w-full top-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-[#1A2030] transition-all duration-300"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 focus-visible:outline-[#FF5E00] shrink-0 min-w-0"
          aria-label="Axiom Canine — Home"
        >
          <ShieldCheck className="text-[#7A8B66] w-7 h-7 sm:w-8 sm:h-8 shrink-0" aria-hidden="true" />
          <span className="font-oswald text-xl sm:text-2xl font-bold tracking-widest text-white uppercase mt-1 truncate">
            Axiom <span className="text-[#FF5E00]">Canine</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1 items-center mt-1" aria-label="Main navigation">
          {navLinks.map(({ href, label, accent, submenu }) => {
            const active = href ? isActive(href) : false;
            if (submenu) {
              return (
                <div key={label} className="relative group">
                  <button className={`text-sm font-bold uppercase tracking-widest pb-1 px-2 py-2 transition-colors border-b-2 flex items-center gap-1 ${
                    accent === 'blue'
                      ? active
                        ? 'text-[#5B8FA8] border-[#5B8FA8]'
                        : 'text-[#C5C6C7] border-transparent group-hover:text-[#5B8FA8] group-hover:border-[#5B8FA8]'
                      : active
                        ? 'text-[#FF5E00] border-[#FF5E00]'
                        : 'text-[#C5C6C7] border-transparent group-hover:text-[#FF5E00] group-hover:border-[#FF5E00]'
                  }`}>
                    {label}
                    <ChevronDown className="w-3 h-3" aria-hidden="true" />
                  </button>
                  <div className="absolute left-0 hidden group-hover:block bg-[#0B0C10] border border-[#FF5E00] rounded-lg shadow-2xl mt-0 min-w-56 z-50">
                    {submenu.map(({ href: subHref, label: subLabel }) => (
                      <Link
                        key={subHref}
                        href={subHref!}
                        className={`block px-4 py-3 text-sm font-semibold tracking-wide transition-colors first:rounded-t-lg last:rounded-b-lg ${
                          pathname === subHref
                            ? 'text-[#FF5E00] bg-[#1A2030]'
                            : 'text-[#C5C6C7] hover:text-[#FF5E00] hover:bg-[#1A2030]'
                        }`}
                      >
                        {subLabel}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-bold uppercase tracking-widest pb-1 px-2 py-2 transition-colors border-b-2 ${
                  accent === 'blue'
                    ? active
                      ? 'text-[#5B8FA8] border-[#5B8FA8]'
                      : 'text-[#C5C6C7] border-transparent hover:text-[#5B8FA8] hover:border-[#5B8FA8]'
                    : active
                      ? 'text-[#FF5E00] border-[#FF5E00]'
                      : 'text-[#C5C6C7] border-transparent hover:text-[#FF5E00] hover:border-[#FF5E00]'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                {label}
              </Link>
            );
          })}

          <a
            href={PHONE_TEL}
            className="ml-2 text-sm font-bold uppercase tracking-widest text-[#FF5E00] border border-[#FF5E00] px-5 py-2 hover:bg-[#FF5E00] hover:text-[#050505] transition-colors flex items-center gap-2"
            aria-label={PHONE_ARIA}
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <button
            onClick={onOpenModal}
            className="ml-6 text-sm font-bold uppercase tracking-widest text-[#050505] bg-[#FF5E00] px-5 py-2 hover:bg-orange-500 transition-colors border border-[#FF5E00] shadow-[0_0_15px_rgba(255,94,0,0.2)]"
            aria-label={PRIMARY_CTA_ARIA}
          >
            {PRIMARY_CTA_LABEL}
          </button>
        </nav>

        {/* Mobile: prominent phone + menu toggle */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          <a
            href={PHONE_TEL}
            className="flex items-center gap-1.5 text-[#FF5E00] border border-[#FF5E00] px-2.5 py-1.5 hover:bg-[#FF5E00] hover:text-[#050505] transition-colors"
            aria-label={PHONE_ARIA}
          >
            <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="font-oswald text-xs font-bold uppercase tracking-wider">
              Call
            </span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#C5C6C7] hover:text-[#FF5E00] transition-colors p-2"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="w-8 h-8" aria-hidden="true" />
            ) : (
              <Menu className="w-8 h-8" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#0B0C10] border-b-2 border-[#FF5E00] absolute w-full left-0 flex flex-col shadow-2xl max-h-[calc(100dvh-5rem)] overflow-y-auto"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ href, label, accent, submenu }) => {
            const active = href ? isActive(href) : false;
            const accentClass = accent === 'blue'
              ? active ? 'text-[#5B8FA8] bg-[#1A2030] border-l-[#5B8FA8]' : 'border-l-transparent'
              : active ? 'text-[#FF5E00] bg-[#1A2030] border-l-[#FF5E00]' : 'border-l-transparent';

            if (submenu) {
              const isSubOpen = openSubmenu === label;
              return (
                <div key={label}>
                  <button
                    onClick={() => setOpenSubmenu(isSubOpen ? null : label)}
                    className={`w-full p-5 text-center font-oswald text-xl uppercase tracking-widest border-b border-[#050505] transition-colors text-[#C5C6C7] border-l-4 flex items-center justify-between ${
                      accentClass
                    }`}
                    aria-expanded={isSubOpen}
                  >
                    {label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isSubOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isSubOpen && (
                    <div className="bg-[#050505]">
                      {submenu.map(({ href: subHref, label: subLabel }) => (
                        <Link
                          key={subHref}
                          href={subHref!}
                          onClick={closeMenu}
                          className={`block p-5 pl-8 text-left font-oswald uppercase tracking-widest border-b border-[#1A2030] transition-colors ${
                            pathname === subHref
                              ? 'text-[#FF5E00] bg-[#1A2030]'
                              : 'text-[#C5C6C7] hover:text-[#FF5E00] hover:bg-[#1A2030]'
                          }`}
                        >
                          {subLabel}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={href}
                href={href!}
                onClick={closeMenu}
                className={`p-5 text-center font-oswald text-xl uppercase tracking-widest border-b border-[#050505] transition-colors text-[#C5C6C7] border-l-4 ${accentClass}`}
                aria-current={active ? 'page' : undefined}
              >
                {label}
              </Link>
            );
          })}
          <a
            href={PHONE_TEL}
            className="p-5 text-center font-oswald text-xl uppercase tracking-widest border-b border-[#050505] text-[#FF5E00] flex items-center justify-center gap-3"
            onClick={closeMenu}
            aria-label={PHONE_ARIA}
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <button
            onClick={() => { onOpenModal(); closeMenu(); }}
            className="p-5 text-center font-oswald text-xl uppercase tracking-widest text-[#050505] bg-[#FF5E00]"
            aria-label={PRIMARY_CTA_ARIA}
          >
            Free Assessment
          </button>
        </div>
      )}
    </header>
  );
}
