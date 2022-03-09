import { combineReducers } from "redux";
import AuthReducer from "./auth/AuthReducer";

const rootReducer = combineReducers({
  user: AuthReducer,
});

export default rootReducer;
