import { CONNECTED, LOGOUT } from "./actionType";

interface userConnectedData {
  //   isAuth: false;
  token: string;
  userId: string;
}
export interface AuthAction {
  type: typeof CONNECTED | typeof LOGOUT;
  payload: userConnectedData;
}
