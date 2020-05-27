import React from "react";
import "./SimpleCard.style.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";


const SimpleCard = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="container123">
      
    <div
    className="img"
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
    />
        
      
      <div className="footer123 ">
        <span className="title1">{name}</span>
        <span className="price">${price}</span>
      </div>
      <button onClick={() => addItem(item)} inverted className='button123' > Add to cart </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(SimpleCard);
