import './viewMore.css'
import viewMoreLogo from "../../assets/viewMoreLogo.jpeg"
import RoomLogo from "../../assets/RoomLogo.jpeg"
import locationIcon from '../../assets/locationIcon.svg'
import Bell from '../../assets/Bell.svg'
import React, {useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { HmsContext } from '../navs/DashboardContext'
import { useContext } from 'react'
import nairalogo from "../../assets/nairalogo.svg"
import Greenchecker from "../../assets/Greenchecker.svg"
import handBell from "../../assets/handBell.svg"
import fitnessN from "../../assets/fitnessN.svg"



const ViewMore = () => {
const {customerId} = useContext(HmsContext);

const navigate = useNavigate();
const [hotel, setHotel] = useState([])
const { id } = useParams()


useEffect(() =>{
    const fetchData = async () => {

        const result = await fetch(`https://localhost:7255/api/Hotel/${id}`)
        const jsonResult = await result.json()

        setHotel(jsonResult.data)

    }

    fetchData()
    

}, [])

    return (
        <section className="main-section-container">
            <div className="landingSection">
                <div className="leftSection">
                    <div className="header-div">
                        <div className="head-div">
                        <h2>{hotel.name}</h2>
                        <div id="rating-div">
                            <p id="rating-p">8.5 <span>^</span></p>
                        </div>
                        </div>
                        <div className="address-div">
                            <img className="icon" src={locationIcon} />
                            <p>{hotel.address}</p>
                        </div>
                    </div>

                        <div className="img-div">
                            <div className="main-img-div">
                                <img src={ viewMoreLogo } alt='Hotel'/>
                            </div>
                            <div className="slider">
                                <span className="icon left-icon">L</span>
                                <div className="slider-content">
                                    <div className="main-img-slider-div">
                                        <Link to='/hotel-review'>
                                        <img src={ RoomLogo } alt='Room'/>
                                        </Link>
                                    </div>
                                    <div className="main-img-slider-div">
                                    <Link to='/hotel-review'>
                                        <img src={ RoomLogo } alt='Room'/>
                                        </Link>
                                    </div>
                                    <div className="main-img-slider-div">
                                    <Link to='/hotel-review'>
                                        <img src={ RoomLogo } alt='Room'/>
                                        </Link>
                                    </div>
                                </div>
                                <span className="icon right-icon">R</span>

                            </div>
                        </div>
                        <p id="description">
                            {hotel.description}
                        </p> 

                        <div className="bottom-div">
                            <p>Date Created</p>
                        </div>
                </div>

                <div className="rightSection">
                    <div className="btnDiv">
                        <div className="buttonFlexDiv">
                            <img className="icon small-icon" src={nairalogo} width="50" height="50" />
                            <hr/>
                            <p>200,000</p> 
                            <p>per Night</p>
                        </div>

                        <div className="buttonFlexDiv">
                            <img className="icon small-icon" src={Greenchecker} width="50" height="50" />
                            <hr/>
                            <p>AVAILABLE</p>
                        </div>

                        <div className="buttonFlexDiv">
                            <img className="icon small-icon" src={handBell} width="50" height="50"  />
                            <hr/>
                            <p>ROOM SERVICE 24H</p>
                        </div>

                        <div className="buttonFlexDiv">
                            <img className="icon small-icon" src={fitnessN} width="50" height="50" />
                            <hr/>
                            <p>FITNESS CENTER</p>
                        </div>
                    </div>
                    
                    <div>
                            <Link to={{pathname: `/booking/${id}/${customerId}` }}>
                            <button className="btn-nav">Book Room</button>
                            </Link>

                            <Link to={'..'}>
                            <button className="btn-nav" onClick={(e) => {e.preventDefault(); navigate(-1);}}>  Back
                            </button>
                            </Link>
                    </div>             
                                  
                </div>
            </div>
        </section>
    )
}

export default ViewMore