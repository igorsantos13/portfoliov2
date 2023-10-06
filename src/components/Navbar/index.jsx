"use client"
import React, { useState } from 'react'
import './style.css'
import Link from 'next/link'

function Navbar() {
  // ao clicar no link deve trocar o estilo do link
  const [isActive, setIsActive] = useState("/");

  const handleLinkClick = (link) => {
    setIsActive(link);
  }

  return (
    <nav>
        <ul className='nav-ul'>
            <Link href="/" onClick={()=>handleLinkClick("/")} className={isActive === "/" ? 'link-style' : ''}><li>/Me</li></Link>
            <Link href="/experience" onClick={()=>handleLinkClick("/experience")} className={isActive === "/experience" ? 'link-style' : ''}><li>/Experience</li></Link>
            <Link href="/contact" onClick={()=>handleLinkClick("/contact")} className={isActive === "/contact" ? 'link-style' : ''}><li>/Let's Talk!</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar