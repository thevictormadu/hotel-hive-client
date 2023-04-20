import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';
import AdminDashboard from '../../pages/admin/Dashboard'

export default function Dashboard() {
    return(
        <>
            <Navbar/>
            <NavLink>
                <AdminDashboard/>
            </NavLink> 
            <Sidebar roleValue={"Admin"}/>
        </>
        
    )
}
