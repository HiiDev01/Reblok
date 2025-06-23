import React, { useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import '../headerStyles/HomeDetails.css'




const HomeDetails = () => {

  return (
    <div className='homedetails'>
      <div className="details">
        <div className='title_con'>
          <h2>
            <span className='firstSpan'> Welcome </span> 
              To 
            <span className='seconSpan'> Reblok </span>
          </h2>
        </div>
        <h1>Find Your Dream  <br></br><span> Home </span> 
          & Trusted Properties
        </h1>
        <SearchBar/>



      </div>


    </div>
  )
}

export default HomeDetails
