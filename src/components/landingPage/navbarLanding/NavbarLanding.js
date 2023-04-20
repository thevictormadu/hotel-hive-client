import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../common/button-component/Button';
import './NavbarLanding.css';
import logo from '../../../assets/logo.png'

function NavbarLanding() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar-landing'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <img src={logo} alt='logo' className='logo'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/hotel-listing' className='nav-links' onClick={closeMobileMenu}>
                        Listing
                    </Link>
                </li><li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                        Login
                    </Link>
                </li>
            </ul>
            {/* {button && <Button buttonStyle='btn--outline'>Submit</Button>} */}
        </div>
      </nav>
    </>
  )
}

export default NavbarLanding
