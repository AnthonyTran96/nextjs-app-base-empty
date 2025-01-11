// project import
import GuestGuard from 'utils/route-guard/GuestGuard';

export default function HomePage() {
  return <GuestGuard />;
}
