import {combineReducers} from "redux";
import todoReducer from "./todo";


const reducer = combineReducers({
  todoResource: todoReducer
});

export default reducer;
