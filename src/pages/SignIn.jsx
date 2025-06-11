import React, { useState } from 'react'
import '../pages_styles/SignIn.css'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='signIn'>
      <div className='signInFormCon'>
        <div className='signInformWrap'>
          <div className="logo">
            <span><img src="/logo2.png" alt="logo" /></span>
            <h4>welcome to reblok</h4>
          </div>
          <h2>sign in</h2>
          <form action="" className='signInForm'>
            <div>
              <label htmlFor="email">enter email</label>
              <input type="email"  id="email" placeholder='Enter your email'/>
            </div>
            <div>
              <label htmlFor="password">enter password</label>
              <input type="password"  id="password" placeholder='Enter your password'/>
            </div>
            <button type="submit">sign in</button>
          </form>
          <p>don't have account? <Link to="/signup">sign up</Link></p>
        </div>
      </div>
      <div className='imgCon'></div>
    </div>
  )
}

export default SignIn
