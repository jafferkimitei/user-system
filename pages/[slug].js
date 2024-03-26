

import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Page: {slug}</h1>
    </div>
  );
}
