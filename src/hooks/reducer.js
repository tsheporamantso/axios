import { SET_ISLOADING, GET_USERS } from "./actions";

const reducer = (state, action) => {
  if (action.type === SET_ISLOADING) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_USERS) {
    return { ...state, users: action.payload, isLoading: false };
  }
  throw new Error(`No matching ${action.type} - action type`);
};

export default reducer;
