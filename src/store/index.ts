import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import vendorReducer from "./vendor-reducer";

const store = createStore(vendorReducer, applyMiddleware(thunk));

export default store;
