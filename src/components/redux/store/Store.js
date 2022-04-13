import CartReducer from "../reducers/CartReducer";
import { createStore } from 'redux'

const Store=createStore(CartReducer);

export default Store;
