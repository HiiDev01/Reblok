import React from 'react'
import '../pages_styles/SignIn.css'
import { useNavigate } from 'react-router-dom'
import '../pages_styles/SignupChoice.css'

const SignupChoice = () => {
  const navigate = useNavigate();

  const handleSelectedChoice = (type) =>{
    if(type === 'user'){
      navigate('/signup/user')
    }else if(type === 'agent'){
      navigate('/signup/agent')
    }
  }


  return (
    <div className='signup'>
      <div className="signUpWrap">
        <div className="logo">
          <span><img src="/logo2.png" alt="logo" /></span>
          <h4>welcome to reblok</h4>
        </div>
        <h2>sign up</h2>
        <p>Continue your registration</p>
        <div className='signupType'>
          <button onClick={() => handleSelectedChoice('user')}>As a user </button>
          <button onClick={()=> handleSelectedChoice('agent')}>As an agent</button>
        </div>
      </div>
    </div>
  )
}

export default SignupChoice
