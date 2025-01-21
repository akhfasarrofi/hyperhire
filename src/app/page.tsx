import { LandingPage } from '@/components/templates/LandingPage';

export const dynamic = 'force-dynamic'

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/talents`);
  const talents = await res.json();
  
  return <LandingPage talents={talents} />;
}
