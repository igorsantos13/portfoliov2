"use client"
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './style.css'

function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [emailSent, setEmailSent] = useState(false)
    const [error, setError] = useState(false)
    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault()

        if(name === '' || email === '' || message === ''){
            alert('Please, fill all fields before submit.')
            return
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send('service_oim28se', 'template_8s6ne2r', templateParams, 'dCgN3Q1_bZhiL_Zwl')
            .then((response) => {
                console.log("FOI CARAIO!", response.status, response.text)

                if(response.status === 200){
                    setEmailSent(true)
                }

                setName('')
                setEmail('')
                setMessage('')
            }, (err) =>{
                setError(err)
                console.log("Erro: ", err)
            })
    }
  return (
    <div className='form-container'>

        <form className='form' onSubmit={sendEmail}>
            <h2 className='form-title'>Contact</h2>
            <div className='form-divider'>

            <label htmlFor="inputName" className='form-label'>Name</label>
            <input 
            className="form-input"
            type="text"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
            </div>
            
            <div className='form-divider'>

            <label htmlFor="inputEmail" className='form-label'>Email</label>
            <input 
            className="form-input"
            type="email"
            placeholder="Insert your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
            </div>

            <textarea 
            className="form-textarea"
            placeholder="Your message here..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            />

            <input className="form-button" type="submit" value="Send Email" />
        </form>
    </div>
  )
}

export default Form