import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { IoChatboxEllipsesOutline, IoNotifications } from "react-icons/io5";
import '../header styles/UserNav.css'

const UserNav = () => {
  
  
  return (
    <div className='usernav'>
      <Link to={"/"} className='userIcon'>
        <IoChatboxEllipsesOutline size={25}/>
      </Link>
      <Link to={"/"} className='userIcon'>
        <IoNotifications size={25}/>
      </Link>
      <Link to={"/signin"} className='Auth'>
        Sign In / Sign up
      </Link>
    </div>
  )
}

export default UserNav
