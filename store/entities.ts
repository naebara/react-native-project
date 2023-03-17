import { combineReducers } from "redux";
import userReducer from "./user";
import authenticationReducer from "./authentication";
import dataReducer from "./data";
export default combineReducers({
  user: userReducer,
  authentication: authenticationReducer,
  data: dataReducer,
});
