import { Article } from "../../models/article";
import { Product } from "../../models/products";
import { ADD_TO_CART, CONNECTED, LOGOUT, REMOVE_FROM_CART } from "./actionType";

// ============== Pour Authenfication===============
interface userConnectedData {
  //   isAuth: false;
  token: string;
  userId: string;
}
export interface AuthAction {
  type: typeof CONNECTED | typeof LOGOUT;
  payload: userConnectedData | null;
}

// ============== Pour le panier===============
interface CartData {
  product: Product;
  quantity: number;
}
export interface CartGlobalState {
  items: Article[];
  quantity: number;
  sub_total: number;
}
export interface CartAction {
  type: typeof ADD_TO_CART | typeof REMOVE_FROM_CART;
  payload: CartData;
}
