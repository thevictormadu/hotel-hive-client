import './ViewMore.css'
import viewMoreLogo from "../../../assets/viewMoreLogo.jpeg"
import RoomLogo from "../../../assets/RoomLogo.jpeg"
import locationIcon from '../../../assets/locationIcon.svg'
import Bell from '../../../assets/Bell.svg'
import React, {useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'




const ViewMore = () => {
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
            <div className="landing-section">
                <div className="left-landing-section">
                    <div className="header-div">
                        <div className="head-div">
                        <h2>{hotel.name}</h2>
                        <div id="rating-div">
                            <p id="rating-p">8.5 <span>^</span></p>
                        </div>
                        </div>
                        <div className="address-div">
                            <img className="icon small-icon" src={locationIcon} />
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

                <div className="right-landing-section">
                    <div className="btn-div">
                        <div className="button-flex-div">
                            <img className="icon small-icon" src={Bell} />
                            <hr/>
                            <p>200,000 per Night</p>
                        </div>

                        <div className="button-flex-div">
                            <img className="icon small-icon" src={Bell} />
                            <hr/>
                            <p>AVAILABLE</p>
                        </div>

                        <div className="button-flex-div">
                            <img className="icon small-icon" src={Bell} />
                            <hr/>
                            <p>ROOM SERVICE 24H</p>
                        </div>

                        <div className="button-flex-div">
                            <img className="icon small-icon" src={Bell} />
                            <hr/>
                            <p>FITNESS CENTER</p>
                        </div>
                    </div>
                    
                    <div>
                            <Link to={{pathname:`/addroom/${hotel.name}`}}>
                            <button className="btn-nav">Add Rooms</button>
                            </Link>

                            <Link to={'..'} onClick={(e) => { e.preventDefault(); navigate(-1);}}>
                            <button className="btn-nav">Back</button>
                            </Link>
                    </div>
                    
                   
                </div>
            </div>
        </section>
    )
}

export default ViewMore