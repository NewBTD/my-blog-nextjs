import Link from 'next/link'
import React from 'react'
import { ThemeButton } from './ThemeButton'

const NavBar = () => {
  return (
    <nav className='container mx-auto flex gap-4 justify-between items-center p-4 drop-shadow-lg'>
        <div>MyLogo</div>
        <ul className='flex items-center gap-4'>
            <Link href='/'>Home</Link>
            <Link href='/About'>About</Link>
            <Link href='/Blogs'>Blogs</Link>
            <ThemeButton></ThemeButton>
        </ul>
    </nav>
  )
}

export default NavBar