import React, { useEffect, useState } from 'react'
import '../headerStyles/searchbar.css'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const navigation = useNavigate()
  const [typeBtn, setTypeBtn] = useState('sell')
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('All');
  const [propertyBed, setPropertyBed] = useState('All');

  const handleChangeTypeBtn = (name) => {
    setTypeBtn (prev => (prev === name ? null : name))
  }
  const handleSearch = (e) => {
    e.preventDefault()
    const filter = new URLSearchParams({
      type: typeBtn,
      location,
      propertyType,
      propertyBed
    }).toString();

    navigation(`/search?${filter}`)
  }



  return (
    <div className='searchBar'>
      <div className='tyBtnCon'>
        <button 
          className={`tyBtn ${typeBtn === 'sell' ? "active" : ""}`}
          onClick={() => handleChangeTypeBtn("sell")}
          >buy
        </button>
        <button 
          className={`tyBtn ${typeBtn === 'rent' ? "active" : ""}`}
          onClick={() => handleChangeTypeBtn('rent')}
        >rent
        </button>
      </div>
      <div className='formCon'>
        <form className='searchForm'>
          <div className='searchFormWrap'>
            <div className='locationInputWrap'>
              <label htmlFor="location">location</label>
              <input 
                type="text" 
                id='location' 
                placeholder='enter keywords.... e.g Lekki, ikoyi'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className='TypeInputWrap'>
              <label htmlFor="type">property Type</label>
              <select 
                id='type'
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}>
                <option value="All">All</option>
                <option value="Full Detached">Full Detached</option>
                <option value="Semi Detached">Semi Detached</option>
                <option value="Terrace">Terrace</option>
                <option value="Land">Land</option>
              </select>
            </div>
  
            <div className='bedInputWrap'>
              <label htmlFor="bed">Max bed</label>
              <select 
                id='bed'
                value={propertyBed}
                onChange={(e) => setPropertyBed(e.target.value)}
              >
                <option value="All">All</option>
                <option value="3">3 bed</option>
                <option value="4">4 bed</option>
                <option value="5">5 bed</option>
              </select>
            </div>
          </div>

          <button type="submit" onClick={handleSearch}>search</button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
