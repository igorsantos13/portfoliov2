import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import './style.css'

function Footer() {
  return (
    <footer className='footer'>
        <ul className='footer-links'>
            <li>igorsantos9513@outlook.com</li>
            <li>+55 (11) 9 9314-3058</li>
            <div className='footer-div'>
              <li className='footer-icons'><a href="https://www.linkedin.com/in/igorsantosdev/" target='_blank'><AiFillLinkedin/></a></li>
              <li className='footer-icons'><a href="https://github.com/igorsantos13" target='_blank'><AiFillGithub/></a></li>

            </div>
        </ul>
    </footer>
  )
}

export default Footer