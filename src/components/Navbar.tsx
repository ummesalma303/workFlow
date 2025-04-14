import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-11/12 mx-auto py-4'>
        <div className="text-bold text-2xl font-semibold">
            <h2>Heath House</h2>
        </div>
        <div className='flex items-center space-x-4'>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar