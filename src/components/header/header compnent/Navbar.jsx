import React, { useState } from 'react' 
import { Link } from 'react-router-dom'
import UserNav from './UserNav'
import '../header styles/Navbar.css'

const pages = [
  {name: 'home', path: '/', id: '1',  },
  {name: 'property', path: '/properties', id: '2'},
  {name: 'explore', path: '/explore', id: '3'},
]

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const toggleMenu = ()=>{
    setHamburger(prev => !prev);
  }
  return (
    <div className='navbar'>
      <div className='navWrapper'>
        <div className='container'>
          <div className='logo'><img src="/logo2.png" alt="logo" /></div>
          <div className={`nav ${hamburger ? 'active' : ''}`}>
            <div className='homeLinkCon'>
              {pages.map((page)=>(
                <Link to={page.path} key={page.id}>
                  <h1>{page.name}</h1>
                </Link>
              ))}
            </div>
            <UserNav/>
          </div>
          <div className={`hamburger ${hamburger ? 'active' : ''}`} 
           onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar
