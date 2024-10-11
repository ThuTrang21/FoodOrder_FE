import { api } from "../../config/api";
import { ADD_ADDRESS_FAILURE, ADD_ADDRESS_REQUEST, ADD_ADDRESS_SUCCESS, ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEAR_CART_FAILURE, CLEAR_CART_REQUEST, CLEAR_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEMS_FAILURE, GET_ALL_CART_ITEMS_REQUEST, GET_ALL_CART_ITEMS_SUCCESS, REMOVE_CARTITEM_FAILURE, REMOVE_CARTITEM_REQUEST, REMOVE_CARTITEM_SUCCESS, UPDATE_CARTITEM_FAILURE, UPDATE_CARTITEM_REQUEST, UPDATE_CARTITEM_SUCCESS } from "./ActionType"

export const findCart = (token) => {
    return async (dispatch) => {
        dispatch({ type: FIND_CART_REQUEST })
        try {
            const response = await api.get(`/api/cart`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            console.log("my cart: ", response.data)
            dispatch({ type: FIND_CART_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: FIND_CART_FAILURE, payload: error });
        }
    };
};

export const getAllCartItems = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_ALL_CART_ITEMS_REQUEST })
        try {
            const response = await api.get(`/api/carts/${reqData.cartId}/items`, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`,
                }
            });
            dispatch({ type: GET_ALL_CART_ITEMS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: GET_ALL_CART_ITEMS_FAILURE, payload: error });
        }
    };
};
export const addItemToCart = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: ADD_ITEM_TO_CART_REQUEST })
        try {
            const {data} = await api.put(`/api/cart/add`,reqData.cartItem ,{
                headers: {
                    Authorization: `Bearer ${reqData.token}`,
                }
            });
            console.log("Add item to cart ", data);
            dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error });
        }
    };
};

export const updateCartItem = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_CARTITEM_REQUEST })
        try {
            const {data} = await api.put(`/api/cart-item/update`,reqData.data ,{
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                }
            });
            console.log("Update cartItem ", data);
            dispatch({ type: UPDATE_CARTITEM_SUCCESS, payload: data });
        } catch (error) {
            console.log("Error ",error)
            dispatch({ type: UPDATE_CARTITEM_FAILURE, payload: error.message });
        }
    };
};

export const removeCartItem = ({cartItemId, jwt}) => {
    return async (dispatch) => {
        dispatch({ type: REMOVE_CARTITEM_REQUEST })
        try {
            const {data} = await api.delete(`/api/cart-item/${cartItemId}/remove` ,{
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
            console.log("Remove cartItem ", data);
            dispatch({ type: REMOVE_CARTITEM_SUCCESS, payload: cartItemId });
        } catch (error) {
            console.log("Error ",error)
            dispatch({ type: REMOVE_CARTITEM_FAILURE, payload: error.message });
        }
    };
};

export const clearCartAction = () => {
    return async (dispatch) => {
        dispatch({ type: CLEAR_CART_REQUEST })
        try {
            const {data} = await api.put(`/api/cart-item/clear`,{} ,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                }
            });
            console.log("Clear cart ", data);
            dispatch({ type: CLEAR_CART_SUCCESS, payload: data });
        } catch (error) {
            console.log("Error ",error)
            dispatch({ type: CLEAR_CART_FAILURE, payload: error.message });
        }
    };
};

export const addAddress = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: ADD_ADDRESS_REQUEST });
        try {
            const response = await api.post(`/api/address/add`, reqData, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`,
                },
            });
            dispatch({ type: ADD_ADDRESS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: ADD_ADDRESS_FAILURE, payload: error.message });
        }
    };
};