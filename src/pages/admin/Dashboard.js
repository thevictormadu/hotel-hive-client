import React from "react";
import './Dashboard.css';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { Line} from "react-chartjs-2";
import ellipse from "../../assets/Capture.1.PNG";
import img1 from '../../assets/Rectangle21.jpg';
import img2 from '../../assets/Rectangle 22.jpg';
import img3 from '../../assets/Rectangle 23.jpg';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';

import { HmsContext } from "../../components/navs/DashboardContext";
import { useContext } from "react";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
);


const AdminDashboard=()=>{   

    const {manager} = useContext(HmsContext)
    
    const data={
    labels :['Jan','Feb','Mar','April','May','June','July','Aug'],
    datasets:[{
        data :[0.4,1.6,0.5,3,0.75,1.5,2.7,0.93],
        backgroundColor:"#2067A1",
        borderColor:'#2067A1',
        pointBorderColor: 'yellow',
        pointBorderWidth :1,
        tension :0.5

    }]
    };
    const options={

        plugins : {
            legend : false
        },
        scales : {
         x: {
           grid :{
            display : false
           }
         },
         y:{
            min : 0,
            max :3,
            ticks : {
                stepSize :1.5,
                callback :(value)=> value
            },
            grid :{
                borderDash: [1]
            }
         }
        }
    };
    return(

    <div className="wrapperone">
        <div className="firstN">
            <div className="managers">
                <div className="sub">
                    <h2>Username</h2>
                    <span className="bolddot">...</span>
                </div>
                <div>
                    <h3 className="hh">{manager.userName}</h3>
                </div>
            </div>
            <div className="managers">
                <div className="sub">
                    <h2>Gender</h2>
                    <span className="bolddot">...</span>
                </div>
                <div>
                    <h3  className="hh">{manager.gender}</h3>
                </div>
            </div>
            <div className="managers">
                <div className="sub">
                    <h2>Transactions</h2>
                    <span className="bolddot">...</span>
                </div>
                <div className="num1">
                    <h3 className="hh">#458,000</h3>
                    <h2 className="hhh">+ 1% <i style={{fontSize:'19px',color:'#2067A1'}} className='fas'>&#xf062;</i></h2>
                </div>
            </div>
        </div>
        <div className="tops">
        <i className='fas rgt'>&#xf105;</i>
        <i class='fas lft'>&#xf104;</i>
            <h1 className="tops_sub">Top Hotels</h1>
            <div className="photosss">
                <div>
                    <img  className="img-img"  src={img1} alt="ff" />
                <div className="content">
                    <p>The Croniche <br/>Bistro</p>
                    <span className="content_sub">Lekke Phase 1, Lagos</span>
                    </div>
                    
                </div>
                <div >
                    <img  className="img-img"  src={img2} alt="ffff" />
                    <div className="content">
                    <p>George Town Hotel</p>
                    <span className="content_sub">Ikeja, Lagos</span>
                    </div>
                </div>
                <div>
                    <img className="img-img"  src={img3} alt="ffd" />
                   <div className="content">
                   <p>Ibom Hotel and <br/>Golf Resort</p>
                    <span className="content_sub">Uyo, Akwa Ibom</span>
                   </div>
                </div>
            </div>
        </div>
        <div className="graph1">
            <div className="graph1_sub">
                <h4 className="trans_sub">Transactions</h4>
                <div className="date1">
                <h3>Jan-Aug 2021</h3>
                <i style={{color:'#3A236A'}}  className='fas sp'>&#xf107;</i>
                 <input value={true} type={'checkbox'} checked/>
                 <span className="totalc">Total</span>
                </div>
            </div>   
            <Line  className="chartlin2" data={data} options={options}></Line>
        </div>
        <div className="acccc ccccc">
            <div className="calender">
                 <Calendar className="calenderborder" />
                 <div className="btn1">
                 <button className="btncan">Cancel</button>
                 <button className="btncan btn2">Done</button>
                 </div>    
            </div>
            <div className="pie1">
            <h3 className="hol">Hotels By Location</h3>
             <img className="image2" src={ellipse} alt='dd' />
            </div>
        </div>
    </div>
    )
}

export default AdminDashboard;