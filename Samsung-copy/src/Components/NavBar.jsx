import React, { useState } from 'react';
import samsung from '../images/samsung.png';
import profile from '../images/profile.png';
import trolley from '../images/trolley.png';
import search from '../images/search.png';
import ShopDD from './ShopDD';

const NavBar = () => {

  const MenuItems=[
    'Shop',
    'AI',
    'Mobile',
    'TV & Audio',
    'Appliances',
    'Computing',
    'Displays',
    'Accessories',
    'SmartThings'
  ];

  const MenuItems2=[
    'Explore',
    'Support',
    'For Business',
  ];

 const [isShopHovered,setIsShopHovered]=useState(false);

 const handleMouseEnter=()=>{
  setIsShopHovered(true);
 };

 const handleMouseLeave=()=>{
  setIsShopHovered(false);
 };

  return (
    <nav>
      <div className="nav-container">
      <div className="logo-container">
        <img src={samsung} alt="" width='110px'/>
      </div>
      <div className="menu-items">
        <ul type='none'>
          {MenuItems.map((MenuItem,index)=>(
            <li key={index}
              onMouseEnter={MenuItem==='Shop'?handleMouseEnter:null}
            >
              <a href="">{MenuItem}</a>
              {MenuItem==='Shop' && isShopHovered &&(
                <div className="dropdown"
                  onMouseLeave={MenuItem==='Shop'?handleMouseLeave:null}
                >
                  <ShopDD/>
                </div>
              )}
              </li>
             
          ))}
        </ul>
      </div>


      <div className="menu-items-2">
          <ul type='none'>
            {MenuItems2.map((MenuItem2,index)=>(
              <li key={index}><a href="">{MenuItem2}</a></li>
            ))}
          </ul>
      </div>

      <div className="user-access">
        <img src={search} alt="" width='25px'/>
        <img src={trolley} alt="" width='25px' />
        <img src={profile} alt="" width='25px'/>
      </div> 
      </div>
    </nav>
  );
};

export default NavBar;

