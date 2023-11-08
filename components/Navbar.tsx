"use client";

import React, { useState } from 'react';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center border-b border-gray-500 h-[60px] px-4 py-2">
      <Logo />
      <div className="flex items-center">
        <div className="md:hidden">
          <button
            className="mr-4 text-2xl text-gray-500 focus:outline-none"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center w-full max-w-md px-2 py-2 rounded-md shadow-md md:ml-6 md:justify-end md:w-1/2 lg:w-1/3 xl:w-1/4`}
        >
          <Link
            href="/"
            className="flex font-bold items-center justify-center w-full px-2 py-2 text-base text-center text-teal-500 transition duration-150 ease-in-out border border-transparent rounded-md hover:bg-gray-100 focus:outline-none focus:border-gray-300 focus:shadow-outline-gray md:ml-4 md:px-4 md:py-2 md:text-sm md:rounded-md"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="flex items-center justify-center w-full px-2 py-2 text-base font-medium text-center text-teal-500 transition duration-150 ease-in-out border border-transparent rounded-md hover:bg-gray-100 focus:outline-none focus:border-gray-300 focus:shadow-outline-gray md:ml-4 md:px-4 md:py-2 md:text-sm md:rounded-md"
          >
            About
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <ThemeSwitcher />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
