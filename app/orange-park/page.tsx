import LocationPage from '@/app/components/locations/LocationPage';
import { buildLocationMetadata, getLocation } from '@/app/data/locations';

const data = getLocation('orange-park');

export const metadata = buildLocationMetadata(data);

export default function OrangeParkPage() {
  return <LocationPage data={data} />;
}
