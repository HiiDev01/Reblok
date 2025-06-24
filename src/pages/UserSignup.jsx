import React, { useEffect, useState } from 'react'
import '../pages_styles/UserSignup.css'
import { Link, useNavigate } from 'react-router-dom'
import '../pages_styles/UserSignup.css'

const UserSignup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({email: "", password: ""});
  const [error, setError] = useState('')

  const handleChange = (e)=>{
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    if(!user.email || !user.password){
      setError('pls enter your email and password')
    }
    const res = await fetch('https://reblok-json-sever.onrender.com/user', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    });
    if(res.ok){
      alert('registration successful');
      navigate('/signin');
    }
  }
  return (
    <div className='usersignup'>
      <div className="usersignupwrap">
        <div className="logo">
          <span><img src="/logo2.png" alt="logo" /></span>
          <h4>welcome to reblok</h4>
        </div>
        <h2>sign up</h2>
        <form action="" className='signInForm' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">enter email</label>
              <input 
                type="email"  
                name='email' 
                id="email" placeholder='Enter your email'
                onChange={handleChange}
                required/>
            </div>
            <div>
              <label htmlFor="password">enter password</label>
              <input 
                type="password" 
                name='password' 
                id="password" 
                placeholder='Enter your password'
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit">sign in</button>
          </form>
          <p className='belowp'>already have account? <Link to="/signin">Log in</Link></p>
      </div>
    </div>
  )
}

export default UserSignup
