import React from 'react'
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center border-b border-gray-500 h-[60px] px-4 py-2">
        <Logo />
        <div className='
            flex
            items-center
            justify-center
            w-full
            max-w-md
            px-2
            py-2
            rounded-md
            shadow-md
            md:ml-6
            md:justify-end
            md:w-1/2
            lg:w-1/3
            xl:w-1/4
        '>
            <Link href={'/about'}
            className='
                flex
                font-bold
                items-center
                justify-center
                w-full
                px-2
                py-2
                text-base
                text-center
                text-teal-500
                transition
                duration-150
                ease-in-out
                border border-transparent
                rounded-md
                hover:bg-gray-100
                focus:outline-none
                focus:border-gray-300
                focus:shadow-outline-gray
                md:ml-4
                md:px-4
                md:py-2
                md:text-sm
                md:rounded-md
            '
            >
                About
            </Link>
            <Link href={'/about'}
            className='
                flex
                items-center
                justify-center
                w-full
                px-2
                py-2
                text-base
                font-medium
                text-center
                text-teal-500
                transition
                duration-150
                ease-in-out
                border border-transparent
                rounded-md
                hover:bg-gray-100
                focus:outline-none
                focus:border-gray-300
                focus:shadow-outline-gray
                md:ml-4
                md:px-4
                md:py-2
                md:text-sm
                md:rounded-md
            '
            >
                About
            </Link>
            <Link href={'/about'}
            className='
                flex
                items-center
                justify-center
                w-full
                px-2
                py-2
                text-base
                font-medium
                text-center
                text-teal-500
                transition
                duration-150
                ease-in-out
                border border-transparent
                rounded-md
                hover:bg-gray-100
                focus:outline-none
                focus:border-gray-300
                focus:shadow-outline-gray
                md:ml-4
                md:px-4
                md:py-2
                md:text-sm
                md:rounded-md
            '
            >
                About
            </Link>
        </div>
        <div className="flex gap-4 items-center">
          <ThemeSwitcher />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
  )
}

export default Navbar
