import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';
import HotelView from './hotelView/HotelView';

export default function Hotels() {
    return(
        <>
            <Navbar/>
            <NavLink>
                <HotelView/>
            </NavLink> 
            <Sidebar roleValue={"Manager"}/>
        </>
    )
}