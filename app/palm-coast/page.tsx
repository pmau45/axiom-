import LocationPage from '@/app/components/locations/LocationPage';
import { buildLocationMetadata, getLocation } from '@/app/data/locations';

const data = getLocation('palm-coast');

export const metadata = buildLocationMetadata(data);

export default function PalmCoastPage() {
  return <LocationPage data={data} />;
}
