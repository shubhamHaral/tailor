import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import Group from '../../Assets/Group 1.png';
function Navbar() {
  return (
    <div>

      <nav className='Navbar'>
        <spanp className='SILAIWAALE'>SILAIWAALE</spanp>
        <div className='DesktopMenu'>
          <Link rel="stylesheet" href="" className="desktopMenuList" >About Us</Link>
          <Link rel="stylesheet" href="" className="desktopMenuListItem" >How It Works</Link>
        </div>
        <div className='frame'>
          <button className='btn'>Lets contact</button>
        </div>
      </nav>
      <div className='group'>
        <div className='reactangle'>
          <div className='image'>
            <img src={Group} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar;
