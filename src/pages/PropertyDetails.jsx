import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../pages_styles/PropertyDetails.css'
import Navbar from '../components/header/header compnent/Navbar'

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
    <div className='proDetCon'>
      <Navbar/>
      <div className='proDetWrap'>
        <div className='detWrap'>
          {details &&(
            <div className='wrapper' >

              <div className='imgGrid'>
                {details?.images?.map((img, index)=>(
                  <div key={index} className='imgGridItem'>
                    <img src={img} alt={`property img${index + 1}`} />
                  </div>
                ))}
              </div>
              <div className='singleProAbtCon'>
                <div className='minAbt'>
                  <div>
                    <h4>price</h4>
                    <p>{details.price.toLocaleString()}</p></div>
                  <div>
                    <h4> bedrooms</h4>
                    <p>{details.bedrooms} bds</p></div>
                  <div>
                    <h4>bathrooms</h4>
                    <p>{details.bathrooms} bths</p></div>
                  <div>
                    <h4>square feet</h4>
                    <p>{details.area} sq fts</p></div>
                </div>
                <h2>{details.title}</h2>
                <p>{details.description}</p>
                <p>{details.features}</p>
              </div>
            </div>
    
          )}
        </div>
        <div className='contactAgentCon'>
          <div className='AgentCon'>
            <button className='agentBtn'>request a tour</button>
            <button className='agentBtn'>request to apply</button>
            <p>
              Your dream apartment is waiting
              One new unit was recently added to this listing.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PropertyDetails
