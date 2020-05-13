import React from 'react';
import './ShopPage.style.scss';
import SHOP_DATA from './Shop-data';
import CollectionPreview from '../../Component/collection-preview/collection-preview.component';


class ShopPage extends React.Component {
    constructor () {
        super();
        this.state ={
            collections: SHOP_DATA,
        }
    }

    render(){
        return(
            <div>
            {
            this.state.collections.map(({
                id, ...otherCollectionsProp
            }) => (
                <CollectionPreview key={id} {...otherCollectionsProp} />
                ))
            }
            </div>
                )
            }
}

export default ShopPage;