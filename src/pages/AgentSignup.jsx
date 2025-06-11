import React from 'react'
import '../pages_styles/AgentSignup.css'
import { Link } from 'react-router-dom'

const AgentSignup = () => {
  return (
    <div className='agentsignup'>
      <div className='agentsignupwrap'>
        <div className="logo">
          <span><img src="/logo2.png" alt="logo" /></span>
          <h4>welcome to reblok</h4>
        </div>
        <h2>sign up</h2>
        <p className='ptitle'>continue singing up as an agent</p>
        <form action="" className='agentSignupForm'>
          <div className='names'>
            <div className='namesItem'>
              <label htmlFor="firtName">first name</label>
              <input type="text"  id="firtName" placeholder='enter first name'/>
            </div>
            <div className='namesItem'>
              <label htmlFor="lastName">last name</label>
              <input type="text"  id="lastName" placeholder='enter last name' />
            </div>
          </div>
          <div className='emailItem'>
            <label htmlFor="email">enter email</label>
            <input type="email" id="email" placeholder='enter your email'/>
          </div>
          <div className='phoneItem'>
            <label htmlFor="phonenumber">enter phone no</label>
            <input type="tel"  id="phonenumber"  placeholder='enter phone no'/>
          </div>
          <div className='addressItem'>
            <label htmlFor="address">enter address</label>
            <input type="text" id="address" placeholder='enter address (e.g office address)'/>
          </div>
          <button type="submit">sign up</button>
        </form>
        <p className='agfa'>already have an account? <a href="/signin">log in</a></p>
      </div>
    </div>
  )
}

export default AgentSignup
