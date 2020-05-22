import React from "react";
import "./checkout.style.scss";
import { connect } from "react-redux";
import CheckoutItem from "../../Component/checkout-item/checkout-item.component";
import { selectCartItems } from "../../redux/cart/cart.reselect";
import { createStructuredSelector } from 'reselect';


const Checkout = ({cartItems}) => {
  
  return(
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span> Product </span>
      </div>

      <div className="header-block">
        <span> description </span>
      </div>

      <div className="header-block">
      <span> quantity </span>
    </div>

      <div className="header-block">
        <span> Price </span>
      </div>

      <div className="header-block">
        <span> Remove </span>
      </div>


    </div>
{
  cartItems.map(cartItems => 
    <CheckoutItem key={cartItems.id} cartItems={cartItems} />
  )}


  </div>
)
}

const mapStateToProps = createStructuredSelector ({
  cartItems : selectCartItems
})


export default connect(mapStateToProps,null)(Checkout);