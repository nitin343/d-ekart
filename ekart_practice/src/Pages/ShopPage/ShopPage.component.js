import React from "react";
import "./ShopPage.style.scss";
import SHOP_DATA from "./Shop-data";
import CollectionPreview from "../../Component/collection-preview/collection-preview.component";

import SearchBar from "../../Component/SearchBar/SearchBar";
import { motion } from "framer-motion";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
      searchField: "",
    };
  }

  render() {
    const {collections, searchField} = this.state;
    const filteredMonster = collections.filter(
        collections => collections.title.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div>
        
     
       
        {filteredMonster.map(({ id, ...otherFilteredMonsterProp }) => (
          <CollectionPreview key={id} {...otherFilteredMonsterProp} />
        ))}
      </div>
    );
  }z
}

export default ShopPage;
