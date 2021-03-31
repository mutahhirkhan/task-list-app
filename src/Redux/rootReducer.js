import { combineReducers } from "redux";
import todoReducer from "./todos/todoReducer";
import filterReducer from "./Filters/filterReducer";

var rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducer;
