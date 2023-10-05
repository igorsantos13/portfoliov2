import React from 'react'
import './style.css'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
        <ul className='nav-ul'>
            <Link href="/"><li>/Me</li></Link>
            <Link href="/experience"><li>/Experience</li></Link>
            <Link href="/contact"><li>/Let's Talk!</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar