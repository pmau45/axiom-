import LocationPage from '@/app/components/locations/LocationPage';
import { buildLocationMetadata, getLocation } from '@/app/data/locations';

const data = getLocation('ponte-vedra');

export const metadata = buildLocationMetadata(data);

export default function PonteVedraPage() {
  return <LocationPage data={data} />;
}
