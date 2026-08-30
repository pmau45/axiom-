/**
 * Intake form services and page-to-service mapping.
 * Keep Netlify static form options in sync: `app/layout.tsx` (mapped from this list)
 * and `public/netlify-form.html`.
 */

export const INTAKE_MODAL_EVENT = 'open-intake-modal';

export const INTAKE_SERVICES = [
  { value: 'puppy', label: 'Puppy Training' },
  { value: 'behavior', label: 'Behavior Modification' },
  { value: 'obedience', label: 'Advanced Obedience' },
  { value: 'in-home', label: 'In-Home Training' },
  { value: 'board-train', label: 'Board & Train' },
  { value: 'group', label: 'Group Classes' },
  { value: 'rescue', label: 'Rescue / Adoption Adjustment (Free)' },
] as const;

export type IntakeServiceValue = (typeof INTAKE_SERVICES)[number]['value'];

export interface OpenIntakeModalDetail {
  /** When omitted, the current pathname is used to preselect a service. */
  service?: IntakeServiceValue;
}

const PATH_SERVICE_MAP: Record<string, IntakeServiceValue> = {
  '/services/puppy-training': 'puppy',
  '/services/behavior-modification': 'behavior',
  '/services/advanced-obedience': 'obedience',
  '/services/in-home-dog-training': 'in-home',
  '/services/board-and-train': 'board-train',
  '/services/group-classes': 'group',
  '/community': 'rescue',
  '/training-issues/aggression': 'behavior',
  '/training-issues/reactive-dog': 'behavior',
  '/training-issues/resource-guarding': 'behavior',
  '/training-issues/leash-pulling': 'in-home',
  '/training-issues/separation-anxiety': 'in-home',
  '/blog/board-and-train-cost-florida': 'board-train',
  '/blog/reactive-vs-aggressive-dog-jacksonville': 'behavior',
  '/blog/separation-anxiety-dog-training-jacksonville': 'in-home',
  '/blog/rescue-dog-first-30-days-jacksonville': 'rescue',
  '/blog/how-to-stop-dog-pulling-on-leash-jacksonville': 'in-home',
  '/blog/leash-manners-jacksonville-beaches-nocatee': 'obedience',
  '/blog/beach-etiquette-ponte-vedra-jacksonville-beach-dogs': 'obedience',
};

const MESSAGE_PLACEHOLDERS: Record<IntakeServiceValue, string> = {
  puppy: 'Age, habits, and what you want to build in the first months...',
  behavior: 'What triggers the reactivity, aggression, or guarding — and how long it has been going on...',
  obedience: 'What you want reliable in the real world — recall, off-leash, public manners...',
  'in-home': 'What happens at home or on walks that you want to change...',
  'board-train': 'What you need built during the stay, and what life looks like when they come home...',
  group: 'What you want to practice around other dogs, and your dog\'s current foundation...',
  rescue: 'Adoption timeline, adjustment issues, and what support would help most...',
};

const DEFAULT_MESSAGE_PLACEHOLDER = 'Tell us about the behaviors...';

export function isIntakeServiceValue(value: unknown): value is IntakeServiceValue {
  return INTAKE_SERVICES.some((service) => service.value === value);
}

export function getIntakeServiceLabel(value: string): string | undefined {
  return INTAKE_SERVICES.find((service) => service.value === value)?.label;
}

export function serviceFromPathname(pathname: string): IntakeServiceValue | '' {
  const normalized = pathname.split('?')[0]?.replace(/\/$/, '') || '/';
  return PATH_SERVICE_MAP[normalized] ?? '';
}

export function resolveIntakeService(
  explicit: unknown,
  pathname: string
): IntakeServiceValue | '' {
  if (isIntakeServiceValue(explicit)) return explicit;
  return serviceFromPathname(pathname);
}

export function getIntakeMessagePlaceholder(service: string): string {
  if (isIntakeServiceValue(service)) return MESSAGE_PLACEHOLDERS[service];
  return DEFAULT_MESSAGE_PLACEHOLDER;
}

export function openIntakeModal(service?: IntakeServiceValue): void {
  window.dispatchEvent(
    new CustomEvent<OpenIntakeModalDetail>(INTAKE_MODAL_EVENT, {
      detail: service ? { service } : {},
    })
  );
}
