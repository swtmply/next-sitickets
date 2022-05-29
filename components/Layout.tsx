import { ReactFCWithChildren } from 'lib/types';
import Link from 'next/link';
import Logo from './Logo';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Navigation } from './Navbars/Navigation';
import { MobileNavigation } from './Navbars/MobileNavigation';

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
