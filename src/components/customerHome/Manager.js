import React from 'react';
import NavLink from '../navs/NavLink';
import Sidebar from '../navs/Sidebar';
import NavbarCustomer from '../navs/Navbar';
import ManagerDashboard from '../ManagerHome/ManagerDashboard';
import HmsIntegration from '../navs/DashboardContext';


export default function Manager(){  

    return(
        <>
            <NavbarCustomer/>
              <NavLink>
                <ManagerDashboard/>
            </NavLink>
            <Sidebar roleValue={"Customer"}/>
        </>
    );
}