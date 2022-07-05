import React from 'react';
import "./Navbar.css";
import image_1 from '/home/chamaali/msp3/src/Images/image 1.png';
import Burger_Menu from '/home/chamaali/msp3/src/Images/Burger_Menu.png';


const Navbar = () => {
  return (
    <div className='bar'>
        
        <img src={image_1} alt="this is the logo"  className='logo' />
        <img src={Burger_Menu} alt="this is the menu icon"  className='menu-icon' />
    </div>
  )
}

export default Navbar;