import React from "react";
import "./profile.style.scss";
import { Link } from "react-router-dom";
import {ReactComponent as Logo1} from '../../assests/box.svg'
import {ReactComponent as Logo2} from '../../assests/Cart.svg'
import {ReactComponent as Logo3} from '../../assests/wishlist-2.svg'

const ProfileShow = ({history}) => {
  return (
    <div className="container">
      <div className="div">
        {" "}
        <Link to="/" className="order">
          {" "}<Logo1 className='Logo' />
        <span className='span'>  Your Order </span>
        </Link>{" "}
      </div>
      <div className="div">
        {" "}
        <Link to="/shop" className="order">
          {" "}<Logo3 className='Logo' />
           <span className='span'> Your WhisList </span>
        </Link>{" "}
      </div>
      <div className="div">
        {" "}
        <Link  onClick={() => { history.push("/checkout")}}  className="order">
          {" "}<Logo2 className='Logo' />
           <span className='span'> Checkout </span>
        </Link>{" "}
      </div>
    </div>
  );
};

export default ProfileShow;
