import React from 'react'
import Card from './Card'
import './style.css'

function Experience() {
  return (
    <main className='main'>
      <div className='card-container'>
          <Card link='https://igorsantos13.github.io/tomodoro/' name='Tomodoro' description='Productivity app, aligning your tasks with your time.'/>
          <Card link='https://igorsantos13.github.io/pokedex/' name='Pokédex' description='A fun app built with PokeAPI. Get to know your favorite pokemon better!'/>
          <Card link='https://blog-mockup-nine.vercel.app/' name='Blog Mockup' description='Mockup website for a blog'/>
          <Card link='https://jordan-shoes-store-238szoxfq-igorsantos13.vercel.app/' name='JordanShoes' description='Front-End website for a shoes store'/>
      </div>

    </main>
  )
}

export default Experience