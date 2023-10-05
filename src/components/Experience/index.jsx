import React from 'react'
import Card from './Card'
import './style.css'

function Experience() {
  return (
    <main className='main'>
      <div className='card-container'>
          <Card name='Tomodoro' description='Productivity app, aligning your tasks with your time.'/>
          <Card name='Pokédex' description='A fun app built with PokeAPI. Get to know your favorite pokemon better!'/>
      </div>

    </main>
  )
}

export default Experience