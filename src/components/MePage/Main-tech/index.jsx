import React from 'react'
import { FaReact } from 'react-icons/fa/'
import { TbBrandNextjs } from 'react-icons/tb'
import { BiLogoTailwindCss, BiLogoCss3, BiLogoJavascript } from 'react-icons/bi'
import { AiFillHtml5 } from 'react-icons/ai'

import './style.css'

function Tech() {
  return (
    <div className='tech-icon'>
        <ul className='tech-ul'>
            <li className='tech-li'>
                <FaReact />
            </li>
            <li>
                <TbBrandNextjs />
            </li>
            <li className='tech-li'>
                <BiLogoTailwindCss />
            </li>
            <li>
                <AiFillHtml5 />
            </li>
            <li className='tech-li'>
                <BiLogoCss3 />
            </li>
            <li className='tech-li'>
                <BiLogoJavascript />
            </li>

        </ul>
    </div>
  )
}

export default Tech