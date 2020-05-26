import React from "react";
import "./checkout.style.scss";
import { connect } from "react-redux";
import CheckoutItem from "../../Component/checkout-item/checkout-item.component";
import { selectCartItems, selectCartAmount } from "../../redux/cart/cart.reselect";
import { createStructuredSelector } from "reselect";
import StripeCheckoutButton from "../../Payment gateways/stripebutton.component";

const Checkout = ({ cartItems , cartAmount }) => {
  return (
    <div className="row">
      <div className="col-8">
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
          {cartItems.map((cartItems) => (
            <CheckoutItem key={cartItems.id} cartItems={cartItems} />
            ))}
            </div>
      </div>

      <div className="col-3" className='colcontainer'>
        <span className='total'> Tottal amount</span>
        <span className='price'> ${cartAmount}</span>
        <span className='detail'>Card Details <br />
             card-Number: 4242 4242 4242 4242 <br/>
             Exp-date: 01/21 &nbsp; &nbsp; cvv: 123
        </span>
        {
          cartAmount ?
        <StripeCheckoutButton price={cartAmount} item={cartItems}/>
        :
         ''
      }
        </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartAmount : selectCartAmount
});

export default connect(mapStateToProps, null)(Checkout);
