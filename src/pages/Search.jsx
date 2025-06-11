import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const useQuery = () => new URLSearchParams(useLocation.search)

const Search = () => {
  const filter = useQuery();
  const [property, setProperty] = useState([])

  useEffect(()=>{
    setTimeout(()=>{
      const fetchProperty = async () =>{
        const typeBtn = filter.get('type')
        const location = filter.get('location')
        const propertyType = filter.get('propertyType')
        const propertyBed = filter.get('propertyBed')
        try {
          const res = await fetch('url')
          if(!res.ok){
            throw error
          }
          const data = res.json();
          setProperty(data)
        } catch (error) {
          console.log(error.message)
        }
      }
      fetchProperty();
    }, 1000)
  }, [])
  return (
    <div>
    </div>
  )
}

export default Search
