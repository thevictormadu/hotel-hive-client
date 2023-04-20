import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';
import Booking from './booking/Booking';

export default function ManagerBookings() {
    return(
        <>
            <Navbar/>
            <NavLink>
                <Booking/>
            </NavLink> 
            <Sidebar roleValue={"Manager"}/>
        </>
    )
}