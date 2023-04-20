import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import NavbarCustomer from '../navs/Navbar';
import CustomerDashboard from './CustomerDashboard/CustomerDashboard';
import HmsIntegration from '../navs/DashboardContext';

export default function Dashboard() {
            
    return(
        <>
             <NavbarCustomer/>            
                <NavLink>
                    <CustomerDashboard/>
                </NavLink>          
             <Sidebar roleValue={"Customer"}/>
        </>
    )
}
