import Link from 'next/link';
import React from 'react';

// This is the navbar component that will be used in the app

function Navbar() {
  return (
    <nav className="flex flex-col">
      <ul>
        <li>
          {' '}
          <Link href="/home">Home</Link>
        </li>
        <li>
          {' '}
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          {' '}
          <Link href="/quests">Quests</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
