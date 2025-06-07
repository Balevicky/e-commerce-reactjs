import { GlobalState } from "./type/globalState";


export const getAuthState = (state: GlobalState) => state.auth.isAuth;
export const getAuthToken = (state: GlobalState) => state.auth.token;
export const getAuthUserId = (state: GlobalState) => state.auth.userId;
export const getUserId = (state: GlobalState) => state.auth.userId;
export const getCart = (state: GlobalState) => state.cart;
export const getNotification = (state: GlobalState) =>
  state.datas.notifications;
export const getWishListe = (state: GlobalState) => state.storage?.wishlists;
export const getCompareList = (state: GlobalState) =>
  state.storage?.comparelists;
export const getSubscibed = (state: GlobalState) => state.storage?.isSubscibed;
export const getCarrier = (state: GlobalState) => state.storage?.carrier; 
export const getCurrentAddress = (state: GlobalState) =>
  state.storage?.currentAddress;
export const getCartSubTotal = (state: GlobalState) => {
  const cartSubTotal =
    state.cart.sub_total + (state?.storage?.carrier?.price || 0);
  return cartSubTotal;
};
