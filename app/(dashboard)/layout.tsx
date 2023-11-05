import Logo from '@/components/Logo'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className='
        flex
        flex-col
        min-h-screen
        min-w-full
        b-background
        max-h-screen
    '>
        <nav className='
          flex
          justify-between
          border-b
          border-gray-500
          h-[60px]
          px-4
          py-2
          items-center
        '>
          <Logo />
          <div className='flex gap-4 items-center'>
          <ThemeSwitcher />
          <UserButton afterSignOutUrl="/sign-in/" />
          </div>
          

        </nav>
        <main className="
            flex
            w-full
            flex-grow
        ">
            {children}
        </main>
    </div>
  )
}

export default Layout