import React from 'react';
import Navbar from '../header compnent/Navbar'
import MinHeader from './MinHeader';
import HomeDetails from './HomeDetails';
import '../header styles/Header.css';

const Header = () => {
  return (
    <div className='header'>
      <MinHeader/>
      <Navbar/>
      <HomeDetails/>
    </div>
  )
}

export default Header
