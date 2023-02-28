import { combineReducers } from "redux";
import loginReducer from './login/reducer';
import productsReducer from "./products/reducer";

export default combineReducers({
    login: loginReducer,
    products: productsReducer,
})