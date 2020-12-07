export const addItemToWishlist = (item) => ({
    type: "ADD_ITEM",
    payload: item,
  });

  export const toggleCartHidden = () => ({
      type: "TOGGLE_CART_HIDDEN",
  });