import React from "react";
import Shop from "../ShopPage/Shop.page";
import { Route } from "react-router-dom";
import ShopCollection from "../../Component/collectionPage/collection.comopnent";
import './collection.style.css'
const Collections = ({ match }) =>{ 
   console.log('matchhhh',match);
   
  return (
    <div className="dad">
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={Shop} />
    <Route path={`${match.path}/:collectionId`} component={ShopCollection} />
  </div>
  </div>
)}
export default Collections;
