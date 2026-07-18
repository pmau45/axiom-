import LocationPage from '@/app/components/locations/LocationPage';
import { buildLocationMetadata, getLocation } from '@/app/data/locations';

const data = getLocation('nocatee');

export const metadata = buildLocationMetadata(data);

export default function NocateePage() {
  return <LocationPage data={data} />;
}
