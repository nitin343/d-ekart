import React from "react";
import "./collection-items.style.scss";
import CButton from "../CButton/Cbotton.component";
import { addItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const CollectionItems = ({items , addItem}) => {
const { imageUrl, name, price } = items

  return (
   
      <div className="collection-item">
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />

        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">${price}</span>
        </div>
        <CButton onClick={() => addItem(items)}>Add to cart </CButton>
      </div>
    
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: items => dispatch(addItem(items))
})

export default connect(null , mapDispatchToProps)(CollectionItems);
