import { api } from "../../config/api"
import { CREATE_INGREDIENT_CATEGORY_FAILURE, CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_FAILURE, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENT, GET_INGREDIENT_CATEGORY_SUCCESS, UPDATE_STOCK } from "./ActionType";
export const getIngredientsOfRestaurant = ({ id, jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.get(`/api/admin/ingredients/restaurant/${id}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            console.log("Get all ingredients: ", response.data);
            dispatch({ type: GET_INGREDIENT, payload: response.data })
        } catch (error) {
            console.log("Error: ", error);
        }
    }
}

export const createIngredient = ({ data, jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.post(`/api/admin/ingredients`, data, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            console.log("Created Ingredients: ", response.data);
            dispatch({ type: CREATE_INGREDIENT_SUCCESS, payload: response.data })
        } catch (error) {
            console.log("Error: ", error);
            dispatch({ type: CREATE_INGREDIENT_FAILURE, payload: error })
        }
    }
}

export const createIngredientCategory = ({ data, jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.post(`/api/admin/ingredients/category`, data, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            console.log("Created Ingredients category: ", response.data);
            dispatch({ type: CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: response.data })
        } catch (error) {
            console.log("Error: ", error);
            dispatch({ type: CREATE_INGREDIENT_CATEGORY_FAILURE, payload: error })
        }
    }
}
export const getIngredientsCategory = ({ id, jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.get(`/api/admin/ingredients/restaurant/${id}/category`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            console.log("Get all ingredients: ", response.data);
            dispatch({ type: GET_INGREDIENT_CATEGORY_SUCCESS, payload: response.data })
        } catch (error) {
            console.log("Error: ", error);
        }
    }
}
export const updateStockOfIngedient = ({ id, jwt }) => {
    return async (dispatch) => {
        try {
            const {data} = await api.put(`/api/admin/ingredients/${id}/stoke`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            dispatch({ type: UPDATE_STOCK, payload: data })
       console.log("update ingredients stock: ", data);
        } catch (error) {
            console.log("Error: ", error);
        }
    }
}



