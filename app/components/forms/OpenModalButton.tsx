'use client';

import { useEffect, useState } from 'react';
import { openIntakeModal, type IntakeServiceValue } from '@/app/lib/intake';

interface OpenModalButtonProps {
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
  /** Prefills the intake service. When omitted, the current page path is used. */
  service?: IntakeServiceValue;
}

/**
 * Button that opens the global intake modal.
 * Communicates with SiteLayout via a custom event.
 */
export default function OpenModalButton({
  className = '',
  children,
  ariaLabel,
  service,
}: OpenModalButtonProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    openIntakeModal(service);
  };

  if (!mounted) {
    // SSR placeholder to avoid hydration mismatch
    return (
      <button className={className} aria-label={ariaLabel} disabled>
        {children}
      </button>
    );
  }

  return (
    <button className={className} onClick={handleClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
