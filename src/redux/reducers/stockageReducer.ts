import { sonoreEffet } from "../../helpers/utils";
import { getItem, setItem } from "../../services/localstrorage.service";
import { ADD_TO_STORAGE, REMOVE_FROM_STORAGE } from "../actions/actionType";
import { StockageAction } from "../actions/types";

const storage = getItem("storage");
const initState: any = storage ? storage : {};

export const stockageReducers = (
  state = initState,
  action: StockageAction = { type: null, key: null, payload: null }
) => {
  switch (action.type) {
    case ADD_TO_STORAGE:
      sonoreEffet("success");
      if (action.key) {
        if (!state[action.key]) {
          state[action.key] = [];
        }
        const existing = state[action.key].find(
          (exist: any) => exist._id === action.payload?._id
        );
        if (!existing) {
          state[action.key].push(action.payload);
        }
      }
      setItem("storage", state);
      return { ...state };
      break;

    case REMOVE_FROM_STORAGE:
      if (action.key) {
        if (state[action.key]) {
          const index = state[action.key].findIndex(
            (existing: any) => existing._id === action.payload?._id
          );
          if (index != -1) {
            state[action.key].splice(index, 1);
          }
        }
      }
      setItem("storage", state);
      return { ...state };
      break;

    default:
      return state;
      break;
  }
};
