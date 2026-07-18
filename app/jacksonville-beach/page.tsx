import LocationPage from '@/app/components/locations/LocationPage';
import { buildLocationMetadata, getLocation } from '@/app/data/locations';

const data = getLocation('jacksonville-beach');

export const metadata = buildLocationMetadata(data);

export default function JacksonvilleBeachPage() {
  return <LocationPage data={data} />;
}
