import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../images/logo.png';

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && 'bg-white backdrop-blur-sm shadow-lg'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 mr-4">
            <Link
              to="/"
              className="block"
              aria-label="Cruip"
            >
              <img
                src={Logo}
                alt=""
                className="w-[50px]"
              />
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="https://github.com/T31K/docktopus-release/raw/master/Docktopus-1.0.0-beta.1.dmg"
                  target="_blank"
                  className="btn-sm text-gray-200 px-7 rounded-xl font-bold bg-gray-900 hover:bg-gray-800 ml-3"
                >
                  <span>Download</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
