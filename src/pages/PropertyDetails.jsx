import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../pages_styles/PropertyDetails.css'

const PropertyDetails = () => {
  const {id} = useParams();
  const [details, setDetails] = useState()
  useEffect(()=>{
      const properDetail = async() =>{
        try {
          const res = await fetch(`http://localhost:5000/properties/${id}`)
          if(!res.ok){
            throw new Error('failed to fetch property')
          }
          const data = await res.json()
          setDetails(data)
        } catch (error) {
          console.log(error.message)
        }
      }
      properDetail();
    },[id]);
  return (
    <div>
      {details &&(
        <div>
          <div className='imgGrid'>
            {details?.images?.map((img, index)=>(
              <div key={index} className='imgGridItem'>
                
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default PropertyDetails
