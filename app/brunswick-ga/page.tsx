import LocationPage from '@/app/components/locations/LocationPage';
import { buildLocationMetadata, getLocation } from '@/app/data/locations';

const data = getLocation('brunswick-ga');

export const metadata = buildLocationMetadata(data);

export default function BrunswickGaPage() {
  return <LocationPage data={data} />;
}
