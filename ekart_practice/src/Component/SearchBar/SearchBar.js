import React from "react";
import "./SearchBar.css";
import { ReactComponent as Logo } from "../../logo.svg";
import { Link, withRouter, Redirect } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
import {ReactComponent as Logo1} from '../../assests/profile.svg';
import {ReactComponent as Logo2} from '../../assests/bag.svg';
import PDropdown from '../Profile/profile.component';
import { hidden } from "../../redux/user/user.actions";
import { userDetail ,hiddenDropdown } from "../../redux/user/user.reselect";
import { createStructuredSelector } from "reselect";
import Checkout from "../../Pages/checkout-page/checkout.component";
import { selectCartItemCount } from "../../redux/cart/cart.reselect";



const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "Red" };
  } else {
    return { color: "#f2f2f2" };
  }
};


const mapStateToProps = createStructuredSelector ({
  User: userDetail,
  hiddenDropdown : hiddenDropdown,
  itemCount: selectCartItemCount
  
})

const mapDispatchToProps = dispatch => ({
  hidden: () => dispatch(hidden())
})

const SearchBar = ({ history , onChange ,User,hidden,hiddenDropdown,itemCount }) => {
  return (
    <div>
      <nav>
        <ul>
          <li className="logo">
           <Link to='/' > <Logo className="Svglogo" /> </Link>
            EKart 
          </li>

          <div className="items">
            <li>
              <Link
              style={{ color: "#f2f2f2", textDecoration: "none" }}
                style={currentTab(history, "/")}
               
                to="/"
              >
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "#f2f2f2", textDecoration: "none" }}
                style={currentTab(history, "/shop")}
                to="/shop"
              >
                {" "}
                Shop{" "}
              </Link>
            </li>
<li>
            {User ? (
              <div  style={{ color: "#f2f2f2", textDecoration: "none"}}
              className='cursor'
               onClick={() => auth.signOut()} >SignOut</div>
            ): (
              <Link to='/signIn'style={{ color: "#f2f2f2", textDecoration: "none"  }}
              className='cursor'

              style={currentTab(history, "/signIn")} onClick={() => auth.signOut()} >Sign In</Link>
            )}

            {User ? (<Redirect to='/' />) : null}
            </li>
          
            <li>
              <Link
                style={{ color: "#f2f2f2", textDecoration: "none" }}
                style={currentTab(history, "/contactus")}
                to="/contactus"
              >
                {" "}
                ContactUs{" "}
              </Link>
            </li>
          </div>

          <li className="search-icon">
            <input type="search" placeholder="Search"  onChange={onChange}/>
            <label className="icon">
              <span className="fas fa-search"></span>
            </label>
          </li>

           <li>
             <Logo1 style={{width: 40 , height: 40}} className='profile' onClick={hidden}/>
           </li>
           <li>
           <Logo2 style={{width: 40 , height: 40}} className='profile'  onClick={() => { history.push("/checkout")}}/>
           <span className='profile-span' onClick={() => { history.push("/checkout")}} style={{cursor: 'pointer'}}> {itemCount} </span>
           
         </li>
        </ul>


      </nav>
      {hiddenDropdown ? null : <PDropdown  />}
      
    </div>
  );
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchBar));
