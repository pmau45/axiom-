import LocationPage from '@/app/components/locations/LocationPage';
import { buildLocationMetadata, getLocation } from '@/app/data/locations';

const data = getLocation('fernandina-beach');

export const metadata = buildLocationMetadata(data);

export default function FernandinaBeachPage() {
  return <LocationPage data={data} />;
}
