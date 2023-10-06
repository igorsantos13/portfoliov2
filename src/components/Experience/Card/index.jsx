import React from 'react'
import './style.css'

function Card(props) {
  return (
    <div className=''>
        <div className='card-main'>
          <a href={props.link} target='_blank'>
            <h2 className='card-title'>{props.name}</h2>
          </a>
          
            <span className='card-span'>{props.description}</span>
        </div>
    </div>
  )
}

export default Card