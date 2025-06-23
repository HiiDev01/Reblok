import React from 'react';
import Navbar from '../headerCompnent/Navbar'
import MinHeader from './MinHeader';
import HomeDetails from './HomeDetails';
import '../headerStyles/Header.css';

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
