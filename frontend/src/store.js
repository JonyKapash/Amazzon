import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productReducers";

const initialState = {};
const reducer = combineReducers({
	productsList: productListReducer,
});

//composeEnhancer help us show the redux store in the browser devTools.
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducer,
	initialState,
	composeEnhancer(applyMiddleware(thunk)) //redux-thunk allows us to see the store on the redux dev tools in firefox/chrome
);

export default store;
