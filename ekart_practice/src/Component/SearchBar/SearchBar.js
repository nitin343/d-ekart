import React from 'react';
import "./SearchBar.css";
import { ReactComponent as Logo } from'../../logo.svg';

    
 
const Search = () => {
    
        return(
<div>
        <nav>
         <ul>
          <li className='logo'>
          <Logo className="Svglogo" />
          EKart</li>
        
          <div className='items'>
           <li>Home</li>
           <li>Shop</li>
           <li>SignIn</li>
           <li>ContactUs</li>
          </div>

          <li className='search-icon'>
          <input type='search' placeholder='Search' />
          <label className='icon'>
          <span className="fas fa-search"></span>
          </label>
          </li>
          </ul>
        </nav>
 
     

 </div>
            )
        }
    
export default Search;