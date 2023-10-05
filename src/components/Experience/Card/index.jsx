import React from 'react'
import './style.css'

function Card(props) {
  return (
    <div className=''>
        <div className='card-main'>
            <h2 className='card-title'>{props.name}</h2>
            <span className='card-span'>{props.description}</span>
        </div>
    </div>
  )
}

export default Card