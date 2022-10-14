import { combineReducers } from "redux";
import news from "./news";
import errors from "./errors";
import location from "./location";
import loader from "./loader";

const reducer = combineReducers({
  news,
  errors,
  location,
  loader
});

export default reducer;
