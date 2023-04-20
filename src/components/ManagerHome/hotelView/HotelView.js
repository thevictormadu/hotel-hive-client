import React, { useState, useEffect } from 'react'
import HotelStyle from '../../../style/Hotelview.module.css'
import starrating from "../../../assets/starrate.png";
import chroniche from '../../../assets/chroniche.png';
import fraser from '../../../assets/fraser.png'
import presken from '../../../assets/presken.png'
import preskenAnnex from '../../../assets/preskenAnnex.png'
import radisson from '../../../assets/radisson.png'
import arrowdown from '../../../assets/arrowdown.png'
import {MdKeyboardArrowDown} from 'react-icons/md'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Hotelview = () => {
    const [hotel, setHotel] = useState([])
    const [description, setDescription] = useState([])
    const [filtered, setFiltered] = useState([])
    const [input, setInput] = useState('')

    const handleSearch = async(e) => {
        setInput(e.target.value)
       setFiltered(hotel.filter((item) =>
       item.name.toLowerCase().includes(input.toLowerCase())
     ))
    }

    useEffect(()=>{
        axios.get("https://localhost:7255/api/Hotel")
        .then(function (response) {
            setHotel([...response.data.data])
            setInput(response.data.message)
            setDescription(response.data.description)
        })

   
    },[])

   
  return (
  // <>
  
  //   Hotel Views
  // </>
    <div className={HotelStyle.body}>

        <div className={HotelStyle.listSection}>
            <h3>Listings</h3>
            <div className={HotelStyle.sortSection}>
                <h4>Sort by</h4>
                <form> 
                    <input type="text"  onChange={(e) =>handleSearch(e)} /> 
                    <MdKeyboardArrowDown />
                </form>
            </div>
        </div>

        <nav className={HotelStyle.nav}>
            <div className={HotelStyle.categories}>
                <h4 className={HotelStyle.active}>All</h4> 
                <h4>Hotel</h4>
                <h4 className={HotelStyle.house}>House/Apartments</h4>
            </div>
            <div className={HotelStyle.filter}>
                 <h4 className={HotelStyle.active2}>Top Picks</h4>
                <h4 className={HotelStyle.starHighest}>Stars(highest first)</h4>
                <h4 className={HotelStyle.starLowest}>Stars(lowest first)</h4>
            </div>
        </nav>
        
        {filtered.length > 0 ? filtered.map( (elem,id) => (
        <div className={HotelStyle.hotelContainer}>
            <div className={HotelStyle.hotelImgContainer}>
                <img src={chroniche} alt="chroniche hotels" />
            </div>

            <div className={HotelStyle.hotelTextContainer}>
                <div>
                    <h4>{elem.name}</h4>
                    <p>{elem.price}</p>
                </div>

                <p className={HotelStyle.hotelp2}> 
                   {elem.discount}
                </p>

                <div>
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                </div>

            </div>
            </div>)) : hotel.map((elem) => (
                 <div className={HotelStyle.hotelContainer}>
                 <div className={HotelStyle.hotelImgContainer}>
                     <img src={chroniche} alt="chroniche hotels" />
                 </div>
     
                 <div className={HotelStyle.hotelTextContainer}>
                     <div>
                         <h4>{elem.name}</h4>
                         <p>{elem.price}</p>
                         <p>{elem.description}</p>
                     </div>
     
                     <p className={HotelStyle.hotelp2}> 
                        {elem.discount}
                     </p>

                     <Link to={{pathname: `/manager-view-more/${elem.id}` }} > <button className={HotelStyle.viewMoreButton}>View more</button> </Link>

                     <Link to={{pathname: `/create-amenity/${elem.id}` }} > <button className={HotelStyle.AddAmenityButton}>Add Amenity</button> </Link>

                     <div>
                         <img src={starrating} alt="" />
                         <img src={starrating} alt="" />
                         <img src={starrating} alt="" />
                         <img src={starrating} alt="" />
                         <img src={starrating} alt="" />
                     </div>
                 </div>
                 </div>
            ))}
{/* 
            <div>
                <p>Good 208 reviews</p>
                <p>7.5</p>
            </div>

        </div>
        <div className={HotelStyle.hotelContainer}>
            <div className={HotelStyle.hotelImgContainer}>
                <img src={chroniche} alt="chroniche hotels" />
            </div>

            <div className={HotelStyle.hotelTextContainer}>
                <div>
                    <h4>The Croniche Hotel Bistro</h4>
                    <p>Lekki Phase 1, Lagos</p>
                </div>

                <p className={HotelStyle.hotelp2}> 
                    Offering an outdoor pool and a restaurant, Sheraton Lagos Hotel is located in Lagos. Free WiFi access is available. Each room here will provide you with a TV, air conditioning and a seating area.
                </p>

                <div>
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                </div>

            </div>

            <div>
                <p>Good 208 reviews</p>
                <p>7.5</p>
            </div>

        </div>
        <div className={HotelStyle.hotelContainer}>
            <div className={HotelStyle.hotelImgContainer}>
                <img src={chroniche} alt="chroniche hotels" />
            </div>

            <div className={HotelStyle.hotelTextContainer}>
                <div>
                    <h4>The Croniche Hotel Bistro</h4>
                    <p>Lekki Phase 1, Lagos</p>
                </div>

                <p className={HotelStyle.hotelp2}> 
                    Offering an outdoor pool and a restaurant, Sheraton Lagos Hotel is located in Lagos. Free WiFi access is available. Each room here will provide you with a TV, air conditioning and a seating area.
                </p>

                <div>
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                </div>

            </div>

            <div>
                <p>Good 208 reviews</p>
                <p>7.5</p>
            </div>

        </div>

        <div className={HotelStyle.hotelContainer}>
            <div className={HotelStyle.hotelImgContainer}>
                <img src={chroniche} alt="chroniche hotels" />
            </div>

            <div className={HotelStyle.hotelTextContainer}>
                <div>
                    <h4>The Croniche Hotel Bistro</h4>
                    <p>Lekki Phase 1, Lagos</p>
                </div>

                <p className={HotelStyle.hotelp2}> 
                    Offering an outdoor pool and a restaurant, Sheraton Lagos Hotel is located in Lagos. Free WiFi access is available. Each room here will provide you with a TV, air conditioning and a seating area.
                </p>

                <div>
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                </div>

            </div>

            <div>
                <p>Good 208 reviews</p>
                <p>7.5</p>
            </div>

        </div>

        <div className={HotelStyle.hotelContainer}>
            <div className={HotelStyle.hotelImgContainer}>
                <img src={chroniche} alt="chroniche hotels" />
            </div>

            <div className={HotelStyle.hotelTextContainer}>
                <div>
                    <h4>The Croniche Hotel Bistro</h4>
                    <p>Lekki Phase 1, Lagos</p>
                </div>

                <p className={HotelStyle.hotelp2}> 
                    Offering an outdoor pool and a restaurant, Sheraton Lagos Hotel is located in Lagos. Free WiFi access is available. Each room here will provide you with a TV, air conditioning and a seating area.
                </p>

                <div>
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                </div>

            </div>

            <div>
                <p>Good 208 reviews</p>
                <p>7.5</p>
            </div>

        </div>

        <div className={HotelStyle.hotelContainer}>
            <div className={HotelStyle.hotelImgContainer}>
                <img src={chroniche} alt="chroniche hotels" />
            </div>

            <div className={HotelStyle.hotelTextContainer}>
                <div>
                    <h4>The Croniche Hotel Bistro</h4>
                    <p>Lekki Phase 1, Lagos</p>
                </div>

                <p className={HotelStyle.hotelp2}> 
                    Offering an outdoor pool and a restaurant, Sheraton Lagos Hotel is located in Lagos. Free WiFi access is available. Each room here will provide you with a TV, air conditioning and a seating area.
                </p>

                <div>
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                    <img src={starrating} alt="" />
                </div>

            </div>

            <div>
                <p>Good 208 reviews</p>
                <p>7.5</p>
            </div>

        </div> */}

    </div>
  )
}

export default Hotelview


