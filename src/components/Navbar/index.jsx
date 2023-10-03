import React from 'react'
import './style.css'

function Navbar() {
  return (
    <nav>
        <ul className='nav-ul'>
            <a href="#"><li>Me</li></a>
            <a href="#"><li>Experience</li></a>
            <a href="#"><li>Let's Talk!</li></a>
        </ul>
    </nav>
  )
}

export default Navbar