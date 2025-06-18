import React, { useEffect, useState } from 'react'
import '../pages_styles/SignIn.css'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
  const [users, setUsers] = useState({userEmail: '', password: ''})
  const navigate = useNavigate()

  const handleChange =(e)=>{
    setUsers({...users, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) =>{  
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/user?email=${users.email}&password=${users.password}`)
    const userData = await res.json();

    if(userData.length > 0){
      alert('login successful');
      localStorage.setItem('user', JSON.stringify(userData[0]))
      navigate('/')
    }else{
      alert('invalid login credentials')
    }
  }
  return (
    <div className='signIn'>
      <div className='signInFormCon'>
        <div className='signInformWrap'>
          <div className="logo">
            <span><img src="/logo2.png" alt="logo" /></span>
            <h4>welcome to reblok</h4>
          </div>
          <h2>sign in</h2>
          <form action="" className='signInForm'onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">enter email</label>
              <input 
                type="email" 
                name='email'  
                id="email" placeholder='use example123@gmail.com'
                onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="password">enter password</label>
              <input 
               type="password"  
               id="password" 
               placeholder='use 12345'
               name='password'
               onChange={handleChange}/>
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
