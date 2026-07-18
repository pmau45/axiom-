import type { LocationPageData } from './types';
import { brunswickGa } from './brunswick-ga';
import { fernandinaBeach } from './fernandina-beach';
import { jacksonville } from './jacksonville';
import { jacksonvilleBeach } from './jacksonville-beach';
import { nocatee } from './nocatee';
import { orangePark } from './orange-park';
import { palmCoast } from './palm-coast';
import { ponteVedra } from './ponte-vedra';
import { stAugustine } from './st-augustine';

export type { LocationPageData } from './types';
export { buildLocationMetadata } from './types';

export const locations = {
  jacksonville,
  'jacksonville-beach': jacksonvilleBeach,
  'ponte-vedra': ponteVedra,
  nocatee,
  'orange-park': orangePark,
  'st-augustine': stAugustine,
  'fernandina-beach': fernandinaBeach,
  'palm-coast': palmCoast,
  'brunswick-ga': brunswickGa,
} as const satisfies Record<string, LocationPageData>;

export type LocationKey = keyof typeof locations;

export function getLocation(slug: LocationKey): LocationPageData {
  return locations[slug];
}

export const locationSlugs = Object.keys(locations) as LocationKey[];
