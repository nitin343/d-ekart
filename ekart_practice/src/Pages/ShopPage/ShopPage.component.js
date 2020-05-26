import React from "react";
import "./ShopPage.style.scss";
import CollectionPreview from "../../Component/collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";
import { selectShopCollectionForPreview } from "../../redux/Shop/shop.selector";
import { connect } from "react-redux";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionsProp }) => (
        <CollectionPreview key={id} {...otherCollectionsProp} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionForPreview,
});

export default connect(mapStateToProps, null)(ShopPage);
