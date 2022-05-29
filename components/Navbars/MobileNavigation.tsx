import Link from 'next/link';
import Logo from '../Logo';
import { Burger, Divider, Drawer } from '@mantine/core';
import { useState } from 'react';
import {
  LoginIcon,
  SearchIcon,
  StarIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline';
import React from 'react';

export function MobileNavigation() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="md:hidden">
      <Drawer
        classNames={{
          drawer: 'bg-royal-300 text-white',
          closeButton: 'text-crimson-200',
        }}
        opened={opened}
        onClose={() => setOpened((open) => !open)}
        size="xs"
        overlayOpacity={0.55}
        padding="sm"
      >
        <p className="text-sm text-neutral-400 font-semibold mb-2">Menu</p>

        <div className="flex flex-col gap-2">
          <Link href="/" passHref>
            <a className="py-2 flex gap-2">
              <Logo className="w-6 h-6" /> Home
            </a>
          </Link>
          <Link href="/movies" passHref>
            <a className="py-2 flex gap-2">
              <VideoCameraIcon className="w-6 h-6" />
              Movies
            </a>
          </Link>
          <Link href="/movies/featured" passHref>
            <a className="py-2 flex gap-2">
              <StarIcon className="w-6 h-6" />
              Featured
            </a>
          </Link>
        </div>

        <Divider className="my-4" />

        <p className="text-sm text-neutral-400 font-semibold mb-2">Account</p>

        <Link href="/movies/featured" passHref>
          <a className="py-2 flex gap-2">
            <LoginIcon className="w-6 h-6" />
            Login
          </a>
        </Link>
      </Drawer>
      <Burger
        classNames={{
          burger: 'bg-white after:bg-white before:bg-white',
        }}
        opened={opened}
        onClick={() => setOpened((open) => !open)}
      />
    </div>
  );
}
