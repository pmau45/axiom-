import type { Metadata } from 'next';
import { TrainingPhilosophyDashboard } from '@/app/components/dashboard/TrainingPhilosophyDashboard';
import { buildPageMetadata } from '@/app/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Dog Training Philosophy',
  description:
    "Axiom Canine's dog training philosophy in Jacksonville: balanced methods, owner education, and real-world reliability for high-drive and rehab cases.",
  path: '/philosophy',
  keywords: [
    'dog training philosophy',
    'behavioral rehabilitation',
    'canine training methods',
    'operant conditioning',
    'off-leash training',
  ],
});

export default function TrainingPhilosophyPage() {
  return <TrainingPhilosophyDashboard />;
}
