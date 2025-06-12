import React, { useEffect, useState } from 'react'
import PropertyNav from '../components/main/PropertyNav'
import { FaBed, FaBath } from "react-icons/fa";
import './PropertyPage.css'
import Pagination from '../components/main/Pagination';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const PropertyPage = () => {
  const [allProperty, setAllProperty] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(8)

  const lastPostIndex = currentPage * postPerPage;
  const firsPostIndex = lastPostIndex - postPerPage;
  const currentPost = allProperty.slice(firsPostIndex, lastPostIndex)
  

  useEffect(()=>{
    const fetchAllProperty = async() =>{
      try {
        const res = await fetch('http://localhost:5000/properties')
        if(!res.ok){
          throw error
        }
        const data = await res.json()
        setAllProperty(data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchAllProperty();
  },[])


  return (
    <div className='propertypage'>
      <PropertyNav/>
      <div className='propertyConWrap'>
        <div className="propertyWrapper">
          <div className='propertyContainer'>
            {currentPost.map((property)=>(
              <div key={property.id} className='currentItem'>
                <p className='propType'>{property.status}</p>
                <div className='propImage'>
                  <img src={property.images[0]} alt={property.title} />
                </div>
                <div className="propbody">
                  <h2>&#x20A6; {property.price.toLocaleString()}</h2>
                  <div className='propMin'>
                    <p><span><FaBed className='icon'/></span> {property.bedrooms}</p>
                    <p><span><FaBath className='icon'/></span> {property.bathrooms}</p>
                    <p>{property.area.toLocaleString()} sqft</p>
                    <p>{property.status}</p>
                  </div>
                  <p className='protitle'>{property.title} {property.location.city}</p>
                </div>
              </div>
            ))}
          </div>
          <Pagination 
            totalPosts={allProperty.length } 
            postPerPage={postPerPage} 
            setCurrentPage={setCurrentPage} 
            currentPage={currentPage}
          />
        </div>
      <div className='propertyMapCon'>
        <MapContainer center={[9.0579, 7.4951]} zoom={13} style={{ height: "500px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {currentPost.map((prop) => (
            <Marker key={prop.id} position={[prop.location.latitude, prop.location.longitude]}>
              <Popup>
                <strong>{prop.title}</strong><br />
                Price: {prop.price}<br />
                <img src={prop.image} alt={prop.title} width="100" /><br />
                <a href={prop.link}>View Details</a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      </div>
    </div>
  )
}

export default PropertyPage
