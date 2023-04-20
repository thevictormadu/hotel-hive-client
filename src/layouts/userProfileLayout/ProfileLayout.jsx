import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import DashboardIcon from '../../assets/dashboard-solid-24 1.svg'
import ManagerIcon from '../../assets/dashboard-manager 24 3.svg'
import Solid from '../../assets/Hotels-Hotels-24 2.svg'
import TransactionIcon from '../../assets/dashboard-Transactions24 5.svg'
import logoutIcon from '../../assets/dashboard-logout- 24 4.svg'
import "./ProfileLayout.css"
import penVector from '../../assets/penVector.svg'
import imageEllipse from '../../assets/imageEllipse 5.svg'
import Navbar from '../../components/navs/Navbar'
import Sidebar from '../../components/navs/Sidebar'
import NavLink from '../../components/navs/NavLink'

export const ProfileLayout = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
      };

  return (
          <>
              <Navbar/>
              <Sidebar roleValue={"Customer"}/>
                <NavLink>
                    <div className = 'pl_mainContainer'>
                      <div className='pl_container'>        
                          {/* <div className="sideBar_wrapper"> 
                            <Sidebar/> 
                              <div className='pl_sideBar' >
                                  <div className='pl_iconGroup'>
                                  <Link to="/ dashboard" >
                                      <div className='pl_iconContainer'>
                                          <img src={DashboardIcon} alt='DashboardIcon' className="pl_Icons"/>
                                          <span>Dashboard</span>
                                      </div>
                                  </Link>

                                  <Link to="" >
                                      <div className='pl_iconContainer'>
                                          <img alt='Hotels' src={Solid} className="pl_Icons"/>
                                          <span>Hotels</span>
                                      </div>
                                  </Link>

                                  <Link to="/profile" className={isActive ? 'active' : ''} onClick={handleClick}>
                                      <div className='pl_iconContainer'>
                                          <img alt='ManagerIcon' src={ManagerIcon} className="pl_Icons"/>
                                          <span className={isActive ? 'active' : ''}>Profile</span>
                                      </div>
                                  </Link>

                                  <Link to="" >
                                      <div className='pl_iconContainer'>
                                          <img alt='TransactionIcon' src={TransactionIcon} className="pl_Icons"/>
                                          <span>Transaction</span>
                                      </div>
                                  </Link>

                                      
                                  </div>

                                  <div className='pl_iconContainer'>
                                      <img alt='logoutIcon' src={logoutIcon} className="pl_Icons"/>
                                      <span>Logout</span>
                                  </div>
                              
                              </div>
                          </div> */}



                          <div className='pl_formContainer'>
                              
                              <form className='pl_form'>
                                  <div className='pl_h1'>

                                      <img alt='imageEllipse' src={imageEllipse} className="pl_Icons profileImage"/>

                                      <div className="pl_titleContainer"> 
                                              <h1>User</h1>
                                              <h2>Profile </h2>
                                      </div>

                                  </div>

                                  <div className='pl_formNestedDiv'>
                                      <div className='pl_formInputContainer'><input type="text" placeholder='Full Name' className='pl_formInput'/><span className='pen_ctner'><img alt='' src={penVector} className="pl_penImg"/></span></div>
                                      <div className='pl_formInputContainer'><input type="text" placeholder='Date of Birth' className='pl_formInput'/><span className='pen_ctner'><img alt='' src={penVector} className="pl_penImg"/></span></div>
                                      <div className='pl_formInputContainer'><input type="text" placeholder='Phone Number' className='pl_formInput'/><span className='pen_ctner'><img alt='' src={penVector} className="pl_penImg"/></span></div>
                                      <div className='pl_formInputContainer'><input type="text" placeholder='Email Address' className='pl_formInput'/><span className='pen_ctner'><img alt='' src={penVector} className="pl_penImg"/></span></div>
                                      <div className='pl_formInputContainer'><input type="text" placeholder='Hotel Name' className='pl_formInput'/><span className='pen_ctner'><img alt='' src={penVector} className="pl_penImg"/></span></div>
                                      <div className='pl_formInputContainer'><input type="text" placeholder='Hotel Primary Address' className='pl_formInput'/><span className='pen_ctner'><img alt='' src={penVector} className="pl_penImg"/></span></div>
                                      <div className='pl_formInputContainer'><input type="text" placeholder='Hotel Contact Phone' className='pl_formInput'/><span className='pen_ctner'><img alt='' src={penVector} className="pl_penImg"/></span></div>
                                  </div>
                              </form>
                          </div>        
                      
                      </div>
                </div>
      </NavLink>         
          </>
    )
}
