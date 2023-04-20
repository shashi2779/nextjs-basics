import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <>
    <header >
        <nav className='flex'>
            <div className="box1">
               <h1>pepCoding</h1>
            </div>
            <div className="box2 mx-2">
                <ul className='flex'>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/services'>Services</Link></li>
                    <li><Link href='/review'>Review</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>

                </ul>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header