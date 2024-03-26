

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, [router]);

  return (
    <div>
      <Header />
    </div>
  );
}
