'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileStickyCTA from './MobileStickyCTA';
import IntakeModal from '../forms/IntakeModal';
import {
  INTAKE_MODAL_EVENT,
  resolveIntakeService,
  type IntakeServiceValue,
  type OpenIntakeModalDetail,
} from '@/app/lib/intake';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialService, setInitialService] = useState<IntakeServiceValue | ''>('');

  const openModal = useCallback(
    (explicitService?: unknown) => {
      setInitialService(resolveIntakeService(explicitService, pathname ?? ''));
      setIsModalOpen(true);
    },
    [pathname]
  );

  useEffect(() => {
    const handleOpenModal = (event: Event) => {
      const detail = (event as CustomEvent<OpenIntakeModalDetail>).detail;
      openModal(detail?.service);
    };
    window.addEventListener(INTAKE_MODAL_EVENT, handleOpenModal);
    return () => window.removeEventListener(INTAKE_MODAL_EVENT, handleOpenModal);
  }, [openModal]);

  return (
    <>
      <Navbar onOpenModal={() => openModal()} />
      <main className="pt-20 min-h-screen" id="main-content">
        {children}
      </main>
      <Footer onOpenModal={() => openModal()} />
      <MobileStickyCTA onOpenModal={() => openModal()} />
      <IntakeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={initialService}
      />
    </>
  );
}
