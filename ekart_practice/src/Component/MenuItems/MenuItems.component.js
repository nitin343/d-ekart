import React from 'react';
import './MenuItems.style.scss';

const MenuItems =({title, imageUrl , size ,large  }) => (
    // <div   className={`menu-item ${size} ${large}` }>
    // <div className = 'background-image'
    // style={{
    //     backgroundImage: `url(${imageUrl})`
    // }} />
    // <div className = 'content' >
    // <span className='title'>{title.toUpperCase()}</span>
    // <button className='subtitle btn-primary'>Shop Now</button>
    // </div>
    // </div>



    <div className='mcollection-item'>
 
  
  <div
  className={`mimage ${large}`}
  style={{
    backgroundImage: `url(${imageUrl})`
  }}
  />
  <div className='mcollection-footer'>
  <p className='mname'>{title.toUpperCase()}</p>
   <button className='mprice  btn-block btn-primary '> Shop 
   Now</button>
  </div>
  </div>
)

export default MenuItems;