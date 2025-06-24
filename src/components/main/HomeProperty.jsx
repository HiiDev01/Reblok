import React, { useEffect, useState } from 'react'
import '../main/HomeProperty.css'
import { FaBed, FaBath } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import undrawImg1 from '/src/assets/undrawIcon1.png';
import undrawImg2 from '/src/assets/undrawIcon2.png';
import undrawImg3 from '/src/assets/undrawIcon3.png';

const services = [
  {
    head: "Buy Dream home", 
    body: "Discover your perfect home with immersive photos and the largest selection of listings—including exclusive options you won’t find anywhere else.", 
    image: undrawImg1,
    id: 1,
    link: "/properties",
    title: "buy now"
  },
  {
    head: "Sell your home", 
    body: "No matter how you choose to sell your home, we're here to guide you on every step of the way toward a successful and secure sale by expertise.", 
    image: undrawImg2,
    id: 2,
    link: "/properties",
    title: "sell home"
  },
  {
    head: "Rent Dream home", 
    body: "We're building a seamless online experience from browsing the largest rental network, to applying with ease, to securely paying rent all in one place.", 
    image: undrawImg3,
    id: 3,
    link: "/properties",
    title: "rent home"
  },
]
const HomeProperty = () => {
  const [properties, setProperties] = useState([]);
  const [rentProperties, setRentProperties] = useState([]);

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  useEffect(()=>{
    const fetchProperty = async () =>{
      try {
        const res = await fetch('https://reblok-json-sever.onrender.com/properties')
        if(!res.ok){
          throw error
        }
        const data = await res.json()
        setProperties(data.slice(0, 10))
        console.log(properties)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchProperty();
  }, []);


  useEffect(()=>{
    const fetchRentProperty = async () =>{
      try {
        const res = await fetch(`https://reblok-json-sever.onrender.com/properties?type=rent`)
        if(!res.ok){
          throw error
        }
        const data = await res.json()
        setRentProperties(data.slice(0, 10))
        console.log(properties)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchRentProperty();
  }, [])
  return (
    <div className='homeProperty'>
      <div className='head'>
        <h3 className='headH3'>explore beautiful and home of your dream</h3>
        <p className='headP'>Current listed houses for sale in desirable neighborhoods with modern amenities.</p>
      </div>

      <div className='currentGrid'>
         <Slider {...settings}>
        {properties.map((property) => (
          <Link  to={`/properties/${property.id}`}>
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
          </Link>
        ))}
        </Slider>
      </div>

      <div className="rentCon">
        <div className="rentHead">
          <h3>Comfortable Living Spaces Tailored to Your Needs</h3>
          <p>Explore a wide selection of rental properties in prime locations, offering flexible lease options, modern features, and affordable comfort.</p>
        </div>
        <div className="rentGrid">
          <Slider {...settings}>
          {rentProperties.map((proper) => (
            <Link to={`/properties/${proper.id}`}>
              <div key={proper.id} className='currentItem'>
                <p className='propType'>{proper.status}</p>
                <div className='propImage'>
                  <img src={proper.images[0]} alt={proper.title} />
                </div>
                <div className="propbody">
                  <h2>&#x20A6; {proper.price.toLocaleString()}</h2>
                  <div className='propMin'>
                    <p><span><FaBed className='icon'/></span> {proper.bedrooms}</p>
                    <p><span><FaBath className='icon'/></span> {proper.bathrooms}</p>
                    <p>{proper.area.toLocaleString()} sqft</p>
                    <p>{proper.status}</p>
                  </div>
                  <p className='protitle'>{proper.title} {proper.location.city}</p>
                </div>
              </div>
            </Link>
          ))}
          </Slider>
        </div>
      </div>
      <div className="service">
        {services.map((service) => (
          <div key={service.id} className='serviceItems'>
            <div className='serviceImgCon'><img src={service.image} alt={service.head} /></div>
            <h2>{service.head}</h2>
            <p>{service.body}</p>
            <Link to='/properties'>{service.title}</Link>
          </div>
        ))}
      </div>
      <div className='homeAbout'>
        <h2>About Our Recommendations</h2>
        <p>
          Our rental picks are tailored to you based on 
          your location, saved homes, and search filters so 
          you never miss a great match. Browse over a million 
          listings in every style, from apartments to 
          townhomes.
        </p>
      </div>
    </div>
  )
}

export default HomeProperty
