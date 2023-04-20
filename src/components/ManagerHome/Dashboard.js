import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';
import DashboardHome from './DashboardHome';

export default function Dashboard() {
       
    return(
        <>
        <>
            <Navbar/>
            <NavLink>
               <DashboardHome/>
            </NavLink> 
            <Sidebar roleValue={"Manager"}/>
        </>            
        </>         
    )
}
