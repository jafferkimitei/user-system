

import Link from 'next/link';

export default function Header({ user }) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/login" legacyBehavior>
              <a>Login</a>
            </Link>
          </li>
          <li>
            <Link href="/signup" legacyBehavior>
              <a>Signup</a>
            </Link>
          </li>
          {user ? (
            <li>
              <Link href="/profile" legacyBehavior>
                <a>Profile</a>
              </Link>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
}
