import React from 'react';
import NavLink from '../navs/NavLink';
import Sidebar from '../navs/Sidebar';
import NavbarCustomer from '../navs/Navbar';
import Hotelview from '../../pages/customer/Hotelview';


export default function Hotel(){  
    
    return(
        <>
             <NavbarCustomer/>
              <NavLink>
                <Hotelview/>
            </NavLink>
            <Sidebar roleValue={"Customer"}/>
        </>
    );
}