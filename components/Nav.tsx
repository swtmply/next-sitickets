import React from 'react';
import {
  CollectionIcon,
  HomeIcon,
  MenuIcon,
  SearchIcon,
  TicketIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="fixed bottom-0 h-16 w-full bg-neutral-900 flex justify-around items-center z-40">
      <Link href="/">
        <div className="flex flex-col items-center">
          <HomeIcon className="w-6 h-6" />
          <p className="text-xs">My List</p>
        </div>
      </Link>
      <Link href="/my-list">
        <div className="flex flex-col items-center">
          <CollectionIcon className="w-6 h-6" />
          <p className="text-xs">My List</p>
        </div>
      </Link>
      <div className="flex flex-col items-center">
        <SearchIcon className="w-6 h-6" />
        <p className="text-xs">Search</p>
      </div>
      <div className="flex flex-col items-center">
        <MenuIcon className="w-6 h-6" />
        <p className="text-xs">Menu</p>
      </div>
    </nav>
  );
}
