import React, { useState, useEffect } from 'react'
import { truncate } from 'lodash';
import img1 from '../customerHome/CustomerDashboardImages/Rectangle_21.png';
import img2 from '../customerHome/CustomerDashboardImages/Rectangle_22.png';
import img3 from '../customerHome/CustomerDashboardImages/Rectangle_23.png';
import prevImg from '../customerHome/CustomerDashboardImages/prevvector.svg';
import nextImg from '../customerHome/CustomerDashboardImages/nextvector.svg';
import lagoselipse from '../customerHome/CustomerDashboardImages/lagoselipse.png';
import abujaelipse from '../customerHome/CustomerDashboardImages/abujaelipse.png';
import elipseLarge from '../customerHome/CustomerDashboardImages/EllipseLarge.png';
import elipseSmall from '../customerHome/CustomerDashboardImages/EllipseSmall.png';
import graph from '../customerHome/CustomerDashboardImages/graph.png';
import calender from '../customerHome/CustomerDashboardImages/calender.png';
import '../customerHome/CustomerDashboard/CustomerDashboardCss.css';


import moment from 'moment'
//import { Line } from 'react-chartjs-2';
import { useContext } from 'react';
// import { DashboardContext } from '../navs/navContext';
import {HmsContext} from '../navs/DashboardContext';



const Dashboard = () => {
   // use state for the top layer of customer dashboard
    // const [customer, setCutomerer] = useState(0);
    // const [hotels, setHotels] = useState(0);
    // const [transactions, setTransactions] = useState(0);
    // const level = useContext(DashboardContext);
    const {customer, manager} = useContext(HmsContext);
    
  
   // useEffect(async () => {       
        //Fetch data from API here
      //    const response = await fetch(`https://localhost:7255/api/Customers/${Id}`);
      //     await response.json();
            // console.log('i fire once');
            
          
          //   setCutomerer(response.customer);
          //   setHotels(response.hotels);
          //   setTransactions(response.transactions);    
      //}, []);

    //use state for image slider
    const [currentIndex, setCurrentIndex] = useState(0);
    const hotelImages = [
        {
            name: 'Hotel 1',
            location: 'Location 1',
            image: img1
        },
        {
            name: 'Hotel 2',
            location: 'Location 2',
            image: img2
        },
        {
            name: 'Hotel 3',
            location: 'Location 3',
            image: img3
        },
        {
            name: 'Hotel 4',
            location: 'Location 4',
            image: img1
        },
        {
            name: 'Hotel 5',
            location: 'Location 5',
            image: img2
        },
        {
            name: 'Hotel 6',
            location: 'Location 5',
            image: img3
        }
    ];

    const handlePrevClick = () => {
        setCurrentIndex(currentIndex === 0 ? hotelImages.length - 1 : currentIndex - 1);
    };

    const handleNextClick = () => {
        setCurrentIndex(currentIndex === hotelImages.length - 1 ? 0 : currentIndex + 1);
    };
    
  return (
    <div className='customer-dashboard-container'>
        <div className='rect-container'>
            <div className='rectangle' id='rect-1'>
                <h2>Gender</h2>
                <p className='data'>{manager.gender}</p>
            </div>
            <div className='rectangle' id='rect-2'>
                <h2>Username</h2>
                <p className='data'>{manager.userName}</p>
            </div>
            <div className='rectangle' id='rect-3'>
                <h2>Email</h2>
                <p className='data'>{manager.email}</p>
            </div>
        </div>
        <div className="hotel-slider-container">
             <div className="title">Top Hotels</div>
                <div className="hotel-slider">
                    {hotelImages
                    .slice(currentIndex, currentIndex + 3)
                    .map((hotelImages, i) => (
                    <div key={i} className="hotel-slider-item">
                        <img src={hotelImages.image} alt={hotelImages.name} />
                        <div className="hotel-slider-caption">
                            <h3>{hotelImages.name}</h3>
                            <p>{hotelImages.location}</p>                       
                    </div>
                </div>
                ))}
            <img src={prevImg} alt="prev" className="prev" onClick={handlePrevClick}/>
            <img src={nextImg} alt="next" className="next" onClick={handleNextClick}/>
            </div>
        </div>
        <div className='graph-container'>
            <div className="trx">Transactions</div>
            <div className='graph'><img src={graph} alt="graph" id="sing" /></div>
        </div>
        <div className='bottom'>
            <div className='calender'><img src={calender} alt="calender" id="calen" /></div>
            <div className='chart-container'>
            <h3>Hotels By Location</h3>
            <img src={abujaelipse} alt="abujaimg" id="abujaimg"/>
            <img src={lagoselipse} alt="lagosimg" id="lagosimg"/>
            <img src={elipseLarge} alt="elipse" id="elipselarge"/>
            <img src={elipseSmall} alt="elipse" id="elipsesmall"/>
            <p id='abj'>Abuja</p>
            <p id='lag'>Lagos</p>
            </div>
        </div>
    </div>
  )
}

export default Dashboard