import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/Shop/shop.selector";
import SimpleCard from "../SimpleCard/SimpleCard.component";
import './collection.Style.scss';

const ShopCollection = ({collection , match}) => {
console.log('match' , match);

    const {title , items} = collection;

  return (
    <div className="row1">

     
       <div className='collection-page'>
       <h2 className="title">{title}</h2>
       <div className="row">
       <div className="items">
       {items.map((item) => (
         <SimpleCard key={item.id} item={item} />
         ))}
         </div>
         </div>
          </div>
        </div>
      
    
  );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  });
  

export default connect(mapStateToProps)(ShopCollection);
