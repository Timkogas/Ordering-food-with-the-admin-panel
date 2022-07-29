import axios from "../../axiosDishes";
import { 
  DELETE_DISH_SUCCESS,
  EDIT_DISH_SUCCESS,
  FETCH_DISHES_ERROR, 
  FETCH_DISHES_REQUEST, 
  FETCH_DISHES_SUCCESS, 
  POST_DISH_SUCCESS} from "../actionTypes"

const fetchDishesRequest = () => {
  return {type: FETCH_DISHES_REQUEST};
};
const fetchDishesSuccess = (dishes) => {
  return {type: FETCH_DISHES_SUCCESS, dishes};
};
const fetchDishesError = (error) => {
  return {type: FETCH_DISHES_ERROR, error};
};

export const fetchDishes = () => {
  return async (dispatch) => {
      dispatch(fetchDishesRequest());
      try {
          const response = await axios.get(`/dishes.json`);
          dispatch(fetchDishesSuccess(response.data));
      } catch(e) {
          dispatch(fetchDishesError(e));
      }
  };
};

const postDishesSuccess = () => {
  return {type: POST_DISH_SUCCESS};
}
const deleteDishesSuccess = () => {
  return {type: DELETE_DISH_SUCCESS};
}
const editDishesSuccess = () => {
  return {type: EDIT_DISH_SUCCESS};
}

export const addDish = (dish) => {
  return async (dispatch) => {
    dispatch(fetchDishesRequest());
    try {
        await axios.post('/dishes.json', dish);
        dispatch(postDishesSuccess());
        dispatch(fetchDishes(`/dishes.json`))
    } catch(e) {
        dispatch(fetchDishesError(e));
    }
  };
}

export const editDish = (dish, dishID) => {
  return async (dispatch) => {
    dispatch(fetchDishesRequest());
    try {
        await axios.put(`/dishes/${dishID}.json`, dish);
        dispatch(editDishesSuccess());
        dispatch(fetchDishes(`/dishes.json`))
    } catch(e) {
        dispatch(fetchDishesError(e));
    }
  };
}


export const deleteDish = (dishID) => {
  return async (dispatch) => {
    dispatch(fetchDishesRequest());
    try {
        await axios.delete(`/dishes/${dishID}.json`);
        dispatch(deleteDishesSuccess());
        dispatch(fetchDishes(`/dishes.json`))
    } catch(e) {
        dispatch(fetchDishesError(e));
    }
  };
}



