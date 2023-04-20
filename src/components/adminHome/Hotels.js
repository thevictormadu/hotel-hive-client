import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';
import Hotelview from '../../pages/customer/Hotelview';

export default function Hotels() {
    return(
        <>
            <Navbar/>
            <NavLink>
                <Hotelview/>
            </NavLink> 
            <Sidebar roleValue={"Admin"}/>
        </>
        
    )
}