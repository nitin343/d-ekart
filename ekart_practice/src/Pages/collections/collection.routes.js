import React from "react";
import Shop from "../ShopPage/Shop.page";
import { Route } from "react-router-dom";
import ShopCollection from "../../Component/collectionPage/collection.comopnent";

const Collections = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={Shop} />
    <Route path={`${match.path}/:collectionId`} component={ShopCollection} />
  </div>
);
export default Collections;
