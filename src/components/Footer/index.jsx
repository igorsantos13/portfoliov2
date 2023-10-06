"use client"
import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillFileText } from 'react-icons/ai'
import './style.css'

function Footer() {

  const onButtonClick = () => { 
    // using Java Script method to get PDF file 
    fetch('igorsantos.pdf').then(response => { 
        response.blob().then(blob => { 
            // Creating new object of PDF file 
            const fileURL = window.URL.createObjectURL(blob); 
            // Setting various property values 
            let alink = document.createElement('a'); 
            alink.href = fileURL; 
            alink.download = 'igorsantos.pdf'; 
            alink.click(); 
        }) 
    }) 
} 

  return (
    <div className='footer-div'>
    <footer className='footer'>
        <ul className='footer-links'>
            <li>igorsantos9513@outlook.com</li>
            <li>+55 (11) 9 9314-3058</li>
            <div className='footer-div-icon'>
              <li className='footer-icons'><a href="https://www.linkedin.com/in/igorsantosdev/" target='_blank'><AiFillLinkedin/></a></li>
              <li className='footer-icons'><a href="https://github.com/igorsantos13" target='_blank'><AiFillGithub/></a></li>
              <li className='footer-icons'><a onClick={onButtonClick}><AiFillFileText/></a> </li>

            </div>
        </ul>
    </footer>
    </div>
  )
}

export default Footer