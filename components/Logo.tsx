import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href={'/'} className='
        font-bold
        text-4xl
        bg-gradient-to-r
        from-teal-700
        to-cyan-600
        text-transparent
        bg-clip-text
        hover:from-teal-500 
        hover:to-cyan-400
    '>
        Formify
    </Link>
  )
}

export default Logo