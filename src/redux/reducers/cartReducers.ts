import { Article } from "../../models/article";
import { getItem, setItem } from "../../services/localstrorage.service";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionType";
import { CartAction, CartGlobalState } from "../actions/types";

const cart = getItem("cart");
const initCart: CartGlobalState = cart
  ? cart
  : {
      items: [],
      quantity: 0,
      sub_total: 0,
    };

// export const cartReducers = (state = initcart, action: CartAction) => {
export const cartReducers = (
  state = initCart,
  action: CartAction = { type: null, payload: null }
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { payload } = action;
      if (payload) {
        const existiongItem = state.items.find(
          (existing) => existing.product._id == payload.product._id
        );
        if (existiongItem) {
          existiongItem.quantity += payload.quantity;
          existiongItem.sub_total =
            existiongItem.product.solde_price * existiongItem.quantity;

          state.quantity += payload.quantity;
          // console.log(existiongItem.sub_total);
          // console.log("qty ancien :" + state.quantity);
          // console.log("somm ancie :" + state.sub_total);
          // // state.sub_total += existiongItem.sub_total;
        } else {
          const newItem: Article = {
            product: payload.product,
            quantity: payload.quantity,
            sub_total: payload.product.solde_price * payload.quantity,
          };
          console.log(newItem);
          state.items.push(newItem);
          state.quantity += payload.quantity;
          // console.log("qty :" + state.quantity);
          // // state.sub_total += newItem.sub_total;
        }
        // console.log(state.sub_total);
        state.sub_total = state.items.reduce(
          (total = 0, item) => total + item.sub_total,
          0
        );
        // console.log(state.sub_total);
      }
      setItem("cart", state);
      return { ...state };

      break;
    case REMOVE_FROM_CART:
      if (action?.payload) {
        const index = state.items.findIndex(
          (existing) => existing.product._id === action?.payload?.product._id
        );
        if (index !== -1) {
          state.items[index].quantity -= action.payload.quantity;
          // ==========
          state.items[index].sub_total -=
            action.payload.quantity * action.payload.product.solde_price;

          if (state.items[index].quantity <= 0) {
            state.items.splice(index, 1);
          }
          state.quantity = state.items.reduce(
            (quantity, item) => quantity + item.quantity,
            0
          );
          state.sub_total = state.items.reduce(
            (total, item) => total + item.sub_total,
            0
          );
        }
      }
      setItem("cart", state);
      return { ...state };
      break;
    default:
      return state;
      break;
  }
};
