import { createSelector } from "reselect";

const selectCart = state => state.cart;
const selectUser  = state => state.user;
  
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemCount = createSelector(
    [selectCartItems],
    (cartItems) =>
    cartItems.reduce(
        (acculatedQuantity , cartItem) => 
        acculatedQuantity + cartItem.quantity , 0
    )
    )


    export const hiddenDropdown = createSelector(
        [selectUser],
        user => user.hidden
   )


   export const selectCartAmount = createSelector(
       [selectCartItems],
       cartItems => cartItems.reduce(
          ( acculatedPrice , cartItem ) =>
           
     acculatedPrice + cartItem.price * cartItem.quantity
               , 0
       )
   )