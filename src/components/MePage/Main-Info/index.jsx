import React from 'react'
import Tech from '../Main-tech'
import './style.css'

import { BsCodeSlash, BsCodeSquare } from 'react-icons/bs'

function Main() {
  return (
    <div className='main-info'>
        <h1 className='main-name'><span className='main-span'>Hello, I'm</span> <a href="https://github.com/igorsantos13" target='_blank'>Igor</a>
        <span className='main-span'>. <br /> My goal is help people achieve their goals through <BsCodeSquare className='icon'/></span>
        </h1>
        
        
        <Tech />
    </div>
  )
}

export default Main