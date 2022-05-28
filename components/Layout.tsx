import { ReactFCWithChildren } from 'lib/types';
import Link from 'next/link';
import Logo from './Logo';
import { Burger, Menu, Divider } from '@mantine/core';
import { useEffect, useState } from 'react';
import {
  LoginIcon,
  SearchIcon,
  StarIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline';
import classNames from 'classnames';

function MobileNavigation() {
  const [opened, setOpened] = useState(false);

  return (
    <Menu
      onClose={() => setOpened((open) => !open)}
      className="md:hidden"
      control={
        <Burger
          classNames={{
            burger: 'bg-white after:bg-white before:bg-white',
          }}
          opened={opened}
          onClick={() => setOpened((open) => !open)}
        />
      }
    >
      <Menu.Label>Menu</Menu.Label>
      <Menu.Item icon={<Logo className="w-6 h-6" />}>
        <Link href="/" passHref>
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item icon={<VideoCameraIcon className="w-6 h-6" />}>
        <Link href="/movies" passHref>
          <a>Movies</a>
        </Link>
      </Menu.Item>
      <Menu.Item icon={<StarIcon className="w-6 h-6" />}>
        <Link href="/movies/featured" passHref>
          <a>Featured</a>
        </Link>
      </Menu.Item>

      <Menu.Item icon={<SearchIcon className="w-6 h-6" />}>Search</Menu.Item>

      <Divider />

      <Menu.Label>Account</Menu.Label>
      {/* <Menu.Item icon={<TicketIcon className="w-6 h-6" />}>
     Tickets
    </Menu.Item>
    <Menu.Item icon={<CogIcon className="w-6 h-6" />}>
     Settings
    </Menu.Item> */}
      <Menu.Item icon={<LoginIcon className="w-6 h-6" />}>Login</Menu.Item>
    </Menu>
  );
}

function Navigation() {
  return (
    <div className="hidden md:flex gap-2 items-center">
      <div className="flex gap-2">
        <Link href="/" passHref>
          <a className="py-2 px-5">Home</a>
        </Link>
        <Link href="/movies" passHref>
          <a className="py-2 px-5">Movies</a>
        </Link>
        <Link href="/movies/featured" passHref>
          <a className="py-2 px-5">Featured</a>
        </Link>
      </div>
      <div className="h-5 w-[2px] bg-grey-200 mr-5" />
      <div>
        <button className="px-7 py-1 bg-crimson-200 hover:bg-crimson-300 rounded-sm uppercase text-sm font-semibold">
          Login
        </button>
      </div>
    </div>
  );
}

const Layout: ReactFCWithChildren = ({ children }) => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);
  }, []);

  const changeNavbar = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div
        className={classNames(
          'h-20 fixed top-0 z-50 w-full duration-300',
          navbar ? 'bg-royal-300' : 'bg-transparent'
        )}
      >
        <nav className="h-full flex justify-between items-center px-4">
          <Link href="/" passHref className="cursor-pointer">
            <div className="flex items-center">
              <Logo className="w-12 h-12" />
              <h1 className="font-semibold text-lg">SI Tickets</h1>
            </div>
          </Link>
          <MobileNavigation />

          <Navigation />
        </nav>
      </div>

      {children}
      {/* Footer */}
    </div>
  );
};

export default Layout;
