import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from './cart/cart.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from "./Directory/Directory.reducer";
import shopReducer from "./Shop/shop.reducer";
import wishlistReducer from "./wishlist/wishlist.reducer";


 const persistConfig ={
   key: 'root',
   storage,
   whitelist: ['cart']
}

export const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    wishlist: wishlistReducer
});

export default persistReducer(persistConfig , rootReducer);