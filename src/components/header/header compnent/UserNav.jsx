import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom'
import { IoChatboxEllipsesOutline, IoNotifications } from "react-icons/io5";
import '../header styles/UserNav.css'


const UserNav = () => {
  const [user, setUser] = useState('')

  useEffect(()=>{
    const storedUser = JSON.parse(localStorage.getItem('user'))
    setUser(storedUser)
  }, [])
  
  return (
    <div className='usernav'>
      <Link to={"/"} className='userIcon'>
        <IoChatboxEllipsesOutline size={25}/>
      </Link>
      <Link to={"/"} className='userIcon'>
        <IoNotifications size={25}/>
      </Link>
      {!user ? (<Link to={"/signin"} className='Auth'>
        Sign In / Sign up
      </Link>
      ):(
        <div>welcome {user.email}</div>
      )}
    </div>
  )
}

export default UserNav
