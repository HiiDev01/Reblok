import React, { useEffect, useState } from 'react'
import PropertyNav from '../components/main/PropertyNav'
import { FaBed, FaBath } from "react-icons/fa";
import '../pages_styles/PropertyPage.css'
import Pagination from '../components/main/Pagination';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { Link } from 'react-router-dom';

let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const PropertyPage = () => {
  const [allProperty, setAllProperty] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(4)
  const [filters, setFilters] = useState({
    location: '',
    type: 'all',
    houseType: 'all',
    bed: 'All',
  });///////////////////////////this is to be use for the filter in PropertyNav pass as props


    //////storing all the filtered properties in one single variable
  const filteredProperties = allProperty.filter(property => {
    const matchLocation = filters.location === '' || property.location.city.toLowerCase().includes(filters.location.toLowerCase())
    const matchType = filters.type === 'all' || property.type.toLowerCase().includes(filters.type.toLowerCase())
    const matchesHouseType = filters.houseType === 'all' || property.types === filters.houseType;
    const matchesBed = filters.bed === 'All' || property.bedrooms === parseInt(filters.bed);
    return matchLocation && matchType && matchesHouseType && matchesBed;
  })


  const lastPostIndex = currentPage * postPerPage;
  const firsPostIndex = lastPostIndex - postPerPage;
  const currentPost = filteredProperties.slice(firsPostIndex, lastPostIndex)
  

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
  },[]);





  return (
    <div className='propertypage'>
      <PropertyNav filters={filters} setFilters={setFilters}/>
      <div className='propertyConWrap'>
        <div className="propertyWrapper">
          <div className='propertyContainer'>
            {currentPost.map((property)=>(
              <Link to={`/properties/${property.id}`} key={property.id}>
                <div className='currentItem'>
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
              </Link>
            ))}
          </div>
          <Pagination 
            totalPosts={filteredProperties.length } 
            postPerPage={postPerPage} 
            setCurrentPage={setCurrentPage} 
            currentPage={currentPage}
          />
        </div>

        <div className='propertyMapCon' style={{ height: "500px", width: "100%" }}>
          <MapContainer
            center={[6.5244, 3.3792]} // default to Lagos, Nigeria
            zoom={10}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        
            {filteredProperties.map((property) => (
              <Marker
                key={property.id}
                position={[property.location.latitude, property.location.longitude]}
              >
                <Popup>
                  <a 
                  href={`/properties/${property.id}`}
                  style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                    <div className='mapPopupCon'>
                      <strong>{property.title}</strong><br />
                      ₦{property.price.toLocaleString()}<br />
                      {property.status}<br />
                      {property.location.city}
                      <div className='mapPopupImgCon'>
                        <img src={property.images[0]} alt="image" />
                      </div>
                    </div>
                  </a>
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
