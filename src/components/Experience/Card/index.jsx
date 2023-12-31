import React from 'react'
import './style.css'

function Card(props) {
  return (
    <div className='all'>
        <div className='card-main'>
          <a href={props.link} target='_blank'>
            <h2 className='card-title'>{props.name}</h2>
          </a>
          
            <span className='card-span'>{props.description}</span>
            <br />
            <a href={props.codeLink} target='_blank'>
              <span className='card-cLink'>Check code!</span>
            </a>
        </div>
    </div>
  )
}

export default Card