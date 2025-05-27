import { globalState } from "./globalState";

export const getAuthState = (state: globalState) => state.auth.isAuth;
export const getAuthToken = (state: globalState) => state.auth.token;
