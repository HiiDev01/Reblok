import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../pages_styles/PropertyDetails.css'
import Navbar from '../components/header/headerCompnent/Navbar'

const PropertyDetails = () => {
  const {id} = useParams();
  const [details, setDetails] = useState();
  const [hideContact, setHideContact] = useState(false);
  const contactRef = useRef(null);


  const handleToggleContact = ()=>{
    setHideContact(prev => !prev)
  }
  const handleHideContact = (event) =>{
    if(contactRef.current && !contactRef.current.contains(event.target)){
      setHideContact(false)
    }
  }

  useEffect(()=>{
    if(hideContact){
      document.addEventListener('mousedown', handleHideContact)
    }else{
      document.removeEventListener('mousedown', handleHideContact)
    }

    return () =>{
      document.removeEventListener('mousedown', handleHideContact)
    }
  }, [hideContact])


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
            <button className='agentBtn' onClick={handleToggleContact}>request a tour</button>
            <button className='agentBtn'>phone agent</button>
            <p>
              Your dream apartment is waiting
              One new unit was recently added to this listing.
            </p>
          </div>
        </div>

        {hideContact &&(
          <div className='popupform' >
            <div ref={contactRef}>
              <h2>contact agent </h2>
              <form action="" className='contactForm'>
                <label htmlFor="">enter  email</label>
                <input type="text"  id=''/>
                <label htmlFor="">enter message</label>
                <textarea rows={8} id="">

                </textarea>
                <button type="submit">send message</button>
              </form>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default PropertyDetails
