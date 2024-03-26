// pages/profile.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { signOut } from '../utils/auth';

export default function Profile() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (!loggedInUser) {
      router.push('/login');
    } else {
      setUser(JSON.parse(loggedInUser));
    }
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut();
      localStorage.removeItem('user');
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <div>
      <h1>Welcome {user ? user.email : ''}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
