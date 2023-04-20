import React from 'react';
import '../../style/Sidebar.css';
import Dashboard from '../../../src/assets/Dashboard.svg';
import Hotel from '../../../src/assets/Hotel.svg';
import Manager from '../../../src/assets/Manager.svg';
import Transaction from '../../../src/assets/Transaction.svg';
import Logout from '../../../src/assets/Logout.svg';
import {Link, NavLink} from 'react-router-dom';


export default function Sidebar({roleValue}){

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }
    
    let dashboard;
    let hotel;
    let plug;
    let transaction;

    if(roleValue === "Customer"){
        dashboard = "customer-dashboard";
        hotel = "customer-hotels";
        plug = "customer-amenities";
        transaction = "customer-transaction";

    }else if(roleValue === "Admin"){
        dashboard = "admin-dashboard";
        hotel = "admin-hotels";
        plug = "admin-bookings";
        transaction = "admin-transaction";

    }else if(roleValue === "Manager"){
        dashboard = "manager-dashboard";
        hotel = "manager-hotels"
        plug = "manager-bookings"
        transaction = "manager-transaction";
    }else{
        dashboard = "";
        hotel = "";
        plug = "";
        transaction = "";
    }

    

    return(
        <> 
            <div id="mySidenav" className="sidenav">
                <div>
                    {/* <Link to="" className="closebtn" onClick={closeNav}>&times;</Link> */}
                     <a href="javascript:void(0)" id="" className="closebtn" onClick={closeNav}>&times;</a>
                </div>

                <div  id="dashboard">
                    <NavLink to={"/" + dashboard} className="tab" ><img src={Dashboard} alt="Your SVG"  />
                        <div >Dashboard</div>
                    </NavLink>
                </div>
               <div  id="HotelTab">
                    <NavLink to={"/" + hotel}  className="tab" ><img src={Hotel} alt="Your SVG" /> 
                   <div >Hotels</div> 
                    </NavLink>
                </div>
                <div id="plugTab">
                    <NavLink to={"/" +plug}  className="tab" ><img src={Manager} alt="Your SVG" /> 
                        <div >{roleValue === "Customer"  ? "Amenities" : roleValue === "manager"? "Booking" :  "Bookings"}</div>
                    </NavLink>
                </div>
                <div id="TransactionTab" >
                    <NavLink to={"/" + transaction}  className="tab"><img src={Transaction} alt="Your SVG"/>
                        <div >Transactions</div>
                    </NavLink>
                </div>
                <div className="logout"> 
                    <div>
                        <Link to="/login"><img src={Logout} alt="Your SVG"/> Logout  </Link>
                    </div>                 
                 </div>                
            </div>         
        </>
    );
}
