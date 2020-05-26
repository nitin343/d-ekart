import React from "react";
import "./SimpleCard.style.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";


const SimpleCard = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="container">
      <span>WishList</span>
      <div className="image">
        <img src={imageUrl} alt="image" className="img" />
      </div>
      <div className="cart">
        <button className="button" onClick={() => addItem(item)}>
          Add to Cart
        </button>
      </div>
      <div className="footer">
        <span className="title1">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(SimpleCard);
