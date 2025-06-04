import { Article } from "../../models/article";
import { Product } from "../../models/products";
import { ADD_TO_STORAGE, REMOVE_FROM_STORAGE, REMOVE_NOTIFICATION_ITEM } from "./actionType";
import {
  ADD_NOTIFICATION,
  ADD_TO_CART,
  CLEAR_NOTIFICATIONS,
  CONNECTED,
  LOGOUT,
  REMOVE_FROM_CART,
} from "./actionType";

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
  type: typeof ADD_TO_CART | typeof REMOVE_FROM_CART | null;
  payload: CartData | null;
}
// ============== Notification
export interface NotificationItem {
  _id: string;
  message: string;
  status: string;
  timeout: number;
}
export interface NotificationData {
  notifications: NotificationItem[];
}
export interface NotificationAction {
  type:
    | typeof ADD_NOTIFICATION
    | typeof CLEAR_NOTIFICATIONS
    | typeof REMOVE_NOTIFICATION_ITEM
    | null;
  payload: NotificationItem | null;
}
// ====================== Stockage
export interface StockageAction {
  type: typeof ADD_TO_STORAGE | typeof REMOVE_FROM_STORAGE | null;
  key: string | null;
  unique?: boolean | null;
  payload: Product | null;
};
