import { combineReducers, legacy_createStore as createStore } from "redux";
// import { legacy_createStore as createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { authReducers } from "./redux/reducers/authReducers";

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  auth: authReducers,
});

const store = createStore(rootReducer, devToolsEnhancer({}) as any);

export default store;
