import { LandingPage } from '@/components/templates/LandingPage';

export const dynamic = 'force-dynamic'

export default async function Page() {
  const res = await fetch('http://localhost:3000/api/talents');
  const talents = await res.json();
  
  return <LandingPage talents={talents} />;
}
