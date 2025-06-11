import React from 'react'
import '../pages_styles/UserSignup.css'
import { Link } from 'react-router-dom'
import '../pages_styles/UserSignup.css'

const UserSignup = () => {
  return (
    <div className='usersignup'>
      <div className="usersignupwrap">
        <div className="logo">
          <span><img src="/logo2.png" alt="logo" /></span>
          <h4>welcome to reblok</h4>
        </div>
        <h2>sign up</h2>
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
          <p className='belowp'>already have account? <Link to="/signin">Log in</Link></p>
      </div>
    </div>
  )
}

export default UserSignup
