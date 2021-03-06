import axios from "axios";
import {
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const listProducts = () => async dispatch => {
	// by dispatching actions we are changing the state of redux and base on that we can change the homeScreen and show products
	dispatch({
		type: PRODUCT_LIST_REQUEST,
	});
	try {
		const { data } = await axios.get("/api/products");
		dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
	}
};
