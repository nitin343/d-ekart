import React from "react";
import "./collection-items.style.scss";
import CButton from "../CButton/Cbotton.component";
import { addItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";
import { ReactComponent as Logo1 } from "../../assests/heart-shape.svg";
import { findByLabelText } from "@testing-library/react";
import { toggleCartHidden } from "../../redux/wishlist/wishlist.action";


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
          <span className="price">&#8377;{price}</span>
        </div>

        <div className="ah">
        <CButton onClick={() => addItem(items)}>Add to cart </CButton>
        
        </div>

      </div>
    
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: items => dispatch(addItem(items)),
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null , mapDispatchToProps)(CollectionItems);
