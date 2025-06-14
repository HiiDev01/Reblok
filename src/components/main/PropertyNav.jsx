import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../header/header compnent/Navbar'
import './PropertyNav.css'



const PropertyNav = ({filters, setFilters}) => {
  const [showPrice, setShowPrice] = useState(false)

  const divRef = useRef(null);
  const handleShowPriceCon = ()=>{
    setShowPrice(prev => !prev);

  }
  useEffect(()=>{
    const handleClickOutside = (event)=>{
      if(divRef.current && !divRef.current.contains(event.target)){
        setShowPrice(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return ()=>{
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, []);

  const handleChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };




  return (
    <div className='propertyNav'>
      <Navbar/>
      <div className='searchCon'>
        <div className="searchDiv">
          <input 
            type="text" 
            id="" placeholder='enter your location or area'
            value={filters.location}
            onChange={(e) => handleChange('location', e.target.value)}
            />
        </div>
        <select value={filters.type} onChange={(e) => handleChange('type', e.target.value)}>
          <option value="sell">sell</option>
          <option value="rent">rent</option>
          <option value="all">all</option>
        </select>
        <select id="" value={filters.houseType}  onChange={(e) => handleChange('houseType', e.target.value)}>
          <option value="all">home type</option>
          <option value="Full Detached">Full Detached</option>
          <option value="Semi Detached">Semi Detached</option>
          <option value="Terrace">Terrace</option>
          <option value="Land">Land</option>
        </select>
        <select id="" value={filters.bed} onChange={(e) => handleChange('bed', e.target.value)}>
          <option value="All">beds & bath</option>
          <option value="All">All</option>
          <option value="3">3 bed</option>
          <option value="4">4 bed</option>
          <option value="5">5+ bed</option>
        </select>
        <div className='priceCon'>
          <button className='priceBtn' onClick={handleShowPriceCon}>
            price
          </button>
          {showPrice && (<div className='hiddenPriceCon' ref={divRef}>
            <div className='hiddenPriceWrap'>
              <div>
                <label htmlFor="">min price</label>
                <select  id="">
                  <option value="">20,000,000</option>
                  <option value="">50,000,000</option>
                  <option value="">70,000,000</option>
                  <option value="">90,000,000</option>
                </select>
              </div>
              <div>
                <label htmlFor="">max price</label>
                <select  id="">
                  <option value="">100,000,000</option>
                  <option value="">150,000,000</option>
                  <option value="">250,000,000</option>
                  <option value="">500,000,000</option>
                </select>
              </div>
            </div>
            <button className='priceApplyBtn'>apply price</button>
          </div>
          )}
        </div>
        <button className='searchProBtn'>search</button>
      </div>
    </div>
  )
}

export default PropertyNav
