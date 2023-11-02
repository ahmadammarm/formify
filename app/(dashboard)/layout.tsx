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
        <nav></nav>
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