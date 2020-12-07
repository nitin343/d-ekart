import React from "react";
import "./checkout-item.style.scss";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assests/delete.svg";
import { clearItem, removeItem, addItem } from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItems, clearItem, removeItem, addItem }) => {
  const { imageUrl, price, name, quantity } = cartItems;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name} </span>
      <span className="quantity">
        <span className="left" onClick={() => removeItem(cartItems)}>
          &#10094;
        </span>
        <span>{quantity}</span>
        <span className="right" onClick={() => addItem(cartItems)}>
          &#10095;{" "}
        </span>
      </span>
      <span className="price"> &#8377;{price}</span>
      <div className="remove-button">
        <Logo className="logo" onClick={() => clearItem(cartItems)} />
      </div>
    </div>
  ); 
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
