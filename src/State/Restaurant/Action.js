import { api } from "../../config/api";
import { CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, CREATE_EVENTS_FAILURE, CREATE_EVENTS_REQUEST, CREATE_EVENTS_SUCCESS, CREATE_RESTAURANT_FAILURE, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, DELETE_EVENTS_FAILURE, DELETE_EVENTS_REQUEST, DELETE_EVENTS_SUCCESS, DELETE_RESTAURANT_FAILURE, DELETE_RESTAURANT_REQUEST, DELETE_RESTAURANT_SUCCESS, GET_ALL_EVENTS_FAILURE, GET_ALL_EVENTS_REQUEST, GET_ALL_EVENTS_SUCCESS, GET_ALL_RESTAURANTS_FAILURE, GET_ALL_RESTAURANTS_REQUEST, GET_ALL_RESTAURANTS_SUCCESS, GET_RESTAURANT_BY_ID_FAILURE, GET_RESTAURANT_BY_ID_REQUEST, GET_RESTAURANT_BY_ID_SUCCESS, GET_RESTAURANT_BY_USER_ID_FAILURE, GET_RESTAURANT_BY_USER_ID_REQUEST, GET_RESTAURANT_BY_USER_ID_SUCCESS, GET_RESTAURANTS_CATEGORY_FAILURE, GET_RESTAURANTS_CATEGORY_REQUEST, GET_RESTAURANTS_CATEGORY_SUCCESS, GET_RESTAURANTS_EVENTS_FAILURE, GET_RESTAURANTS_EVENTS_REQUEST, GET_RESTAURANTS_EVENTS_SUCCESS, UPDATE_RESTAURANT_FAILURE, UPDATE_RESTAURANT_REQUEST, UPDATE_RESTAURANT_STATUS_FAILURE, UPDATE_RESTAURANT_STATUS_REQUEST, UPDATE_RESTAURANT_STATUS_SUCCESS, UPDATE_RESTAURANT_SUCCESS } from "./ActionType"

export const getAllRestaurantsAction = () => {
    return async (dispatch) => {
        dispatch({ type: GET_ALL_RESTAURANTS_REQUEST });
        try {
            const { data } = await api.get(`/api/restaurants`);
            dispatch({ type: GET_ALL_RESTAURANTS_SUCCESS, payload: data });
            console.log("All restaurant ", data);
        } catch (error) {
            dispatch({ type: GET_ALL_RESTAURANTS_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const getRestaurantById = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST });
        try {
            const response = await api.get(`/api/restaurants/${reqData.restaurantId}`);
            dispatch({ type: GET_RESTAURANT_BY_ID_SUCCESS, payload: response.data });

        } catch (error) {
            dispatch({ type: GET_RESTAURANT_BY_ID_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const getRestaurantByUserId = (jwt) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANT_BY_USER_ID_REQUEST });
        try {
            const { data } = await api.get(`/api/admin/restaurants/user`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: data });
        } catch (error) {
          
            dispatch({ type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};



export const updateRestaurant = ({ restaurantId, restaurantData, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_RESTAURANT_REQUEST });
        try {
            const res = await api.put(`/api/admin/restaurant/${restaurantId}`, restaurantData, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: res.data });
            console.log("Update Success");
        } catch (error) {
            dispatch({ type: UPDATE_RESTAURANT_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const deleteRestaurant = ({ restaurantId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_RESTAURANT_REQUEST });
        try {
            const res = await api.delete(`/api/admin/restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: restaurantId });
            console.log("Delete Success", res.data);
        } catch (error) {
            dispatch({ type: DELETE_RESTAURANT_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const updateRestaurantStatus = ({ restaurantId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST });
        try {
            const res = await api.put(`/api/admin/restaurants/${restaurantId}/status`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: res.data });
            console.log("Update Success", res.data);
        } catch (error) {
            dispatch({ type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const createRestaurant = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_RESTAURANT_REQUEST });
        try {
            const { data } = await api.post(`/api/admin/restaurants`, reqData.data, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`
                }
            });
            dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload: data });
            console.log("Created restaurant: ", data);
        } catch (error) {
            dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const createEventAction = ({ data, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_EVENTS_REQUEST });
        try {
            const  res = await api.post(`/api/admin/event`, data, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: CREATE_EVENTS_SUCCESS, payload: res.data });
            console.log("Create Success", res.data);
        } catch (error) {
            dispatch({ type: CREATE_EVENTS_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const getAllEvents = ( jwt ) => {
    return async (dispatch) => {
        dispatch({ type: GET_ALL_EVENTS_REQUEST });
        try {
            const res = await api.get("/api/events", {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: res.data });
            console.log("get all events", res.data);
        } catch (error) {
            dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const deleteEventAction = ({ eventId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_EVENTS_REQUEST });
        try {
            const res = await api.delete(`api/admin/events/${eventId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: DELETE_EVENTS_SUCCESS, payload: eventId });
            console.log("delete event", res.data);
        } catch (error) {
            dispatch({ type: DELETE_EVENTS_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const getRestaurantEvents = ({ restaurantId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANTS_EVENTS_REQUEST });
        try {
            const res = await api.get(`/api/admin/events/restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: GET_RESTAURANTS_EVENTS_SUCCESS, payload: res.data });
            console.log("get restaurant events", res.data);
        } catch (error) {
            dispatch({ type: GET_RESTAURANTS_EVENTS_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const createCategoryAction = ({ reqData, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_CATEGORY_REQUEST });
        try {
            const res = await api.post(`api/admin/category`, reqData, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: res.data });
            console.log("create category", res.data);
        } catch (error) {
            dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const getRestaurantsCategory = ({ restaurantId }) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANTS_CATEGORY_REQUEST });
        try {
            const res = await api.get(`/api/category/restaurant/${restaurantId}`);
            dispatch({ type: GET_RESTAURANTS_CATEGORY_SUCCESS, payload: res.data });
            console.log("get restaurants category", res.data);
        } catch (error) {
            dispatch({ type: GET_RESTAURANTS_CATEGORY_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};