import React from 'react'
import Card from './Card'
import './style.css'

function Experience() {
  return (
    <main className='main'>
      <div className='card-container'>
          <Card link='https://igorsantos13.github.io/tomodoro/' codeLink='https://github.com/igorsantos13/tomodoro' name='Tomodoro' description='Productivity app, aligning your tasks with your time.'/>
          <Card link='https://www.forkcommitmerge.io/' codeLink='https://github.com/fork-commit-merge/fork-commit-merge' name='Fork Commit Merge' description=''/>
          <Card link='https://blog-mockup-nine.vercel.app/' codeLink='https://github.com/igorsantos13/codelandia-blog' name='Blog Mockup' description='Mockup website for a blog'/>
          <Card link='https://jordan-shoes-jet.vercel.app/' codeLink='https://github.com/igorsantos13/codelandia-jordan' name='Jordan Shoes' description='Front-End website for a shoes store'/>
      </div>

    </main>
  )
}

export default Experience