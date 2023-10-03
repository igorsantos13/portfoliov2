import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import './style.css'

function Footer() {
  return (
    <footer className='footer'>
        <ul className='footer-links'>
            <li>igorsantos9513@outlook.com</li>
            <li>+55 (11) 9 9314-3058</li>
            <li className='footer-icons'><a href=""><AiFillLinkedin/></a></li>
            <li className='footer-icons'><a href=""><AiFillGithub/></a></li>
        </ul>
    </footer>
  )
}

export default Footer