import React from "react";
import "./checkout.style.scss";
import { connect } from "react-redux";
import CheckoutItem from "../../Component/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectCartAmount,
} from "../../redux/cart/cart.reselect";
import {userDetail} from '../../redux/user/user.reselect'
import { createStructuredSelector } from "reselect";
import StripeCheckoutButton from "../../Payment gateways/stripebutton.component";
import { clearItem } from "../../redux/cart/cart.action";
import { Link } from "react-router-dom";

const Checkout = ({ cartItems, cartAmount, clearItem , user}) => {
  return (
    <div className="row">
      <div className="col-8">
        <div className="checkout-page">
          {cartItems.map((cartItems) => (
            <CheckoutItem key={cartItems.id} cartItems={cartItems} />
          ))}

          
        </div>
      </div>

      <div className="col-3" className="colcontainer">
        <div className="priceDetail">
          <h5 className="priceDetail1">Price Detail</h5>
        </div>

        <div className="price2">
        
          <span className="total1"> Price </span>
          <span className="price1"> &#8377;{cartAmount}</span>
          
        </div>
        <div className="price2">
        
          <span className="total1"> Delivery </span>
          <span className="price1"> &#8377;0</span>
          
        </div>

        <div className="price3" style={{borderTop:"0.2px solid grey",marginTop:"10px"}}>
          <span className="total1"> Total Payable </span>
          <span className="price1"> &#8377;{cartAmount}</span>
        </div>
        <Link to='/payments'>
        {
          user ?
        <button  className="paybutt">Proceed For Payment</button>
        : ""
        }
        </Link>
        </div>
   
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartAmount: selectCartAmount,
   user : userDetail
});

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
