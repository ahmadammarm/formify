"use client";

import React, { useState } from 'react';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';
import { UserButton } from '@clerk/nextjs';

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
    
        <div className="flex gap-4 items-center">
          <ThemeSwitcher />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
