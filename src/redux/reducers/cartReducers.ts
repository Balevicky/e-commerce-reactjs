import { Article } from "../../models/article";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionType";
import { CartAction, CartGlobalState } from "../actions/types";

const initcart: CartGlobalState = {
  items: [],
  quantity: 0,
  sub_total: 0,
};

export const cartReducers = (state = initcart, action: CartAction) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { payload } = action;
      const existiongItem = state.items.find(
        (existing) => existing.product._id == payload.product._id
      );
      if (existiongItem) {
        existiongItem.quantity += payload.quantity;
        existiongItem.sub_total +=
          existiongItem.product.solde_price * existiongItem.quantity;

        state.quantity += payload.quantity;
        state.sub_total += existiongItem.sub_total;
      } else {
        const newItem: Article = {
          product: payload.product,
          quantity: payload.quantity,
          sub_total: payload.product.solde_price * payload.quantity,
        };
        state.items.push(newItem);
        state.quantity += payload.quantity;
        state.sub_total += newItem.sub_total;
      }

      return state;

      break;

    default:
      return state;
      break;
  }
};
