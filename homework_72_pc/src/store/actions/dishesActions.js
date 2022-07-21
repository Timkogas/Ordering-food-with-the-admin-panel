import axios from "../../axiosDishes";
import { 
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

export const fetchDishes = (url) => {
  return async (dispatch) => {
      dispatch(fetchDishesRequest());
      try {
          const response = await axios.get(url);
          dispatch(fetchDishesSuccess(response.data));
      } catch(e) {
          dispatch(fetchDishesError(e));
      }
  };
};

const postDishesSuccess = () => {
  return {type: POST_DISH_SUCCESS};
}

export const addDish = (dish, url) => {
  return async (dispatch) => {
    dispatch(fetchDishesRequest());
    try {
        const response = await axios.post('/dishes.json', dish);
        dispatch(postDishesSuccess(response.data));
        dispatch(fetchDishes(url))
    } catch(e) {
        dispatch(fetchDishesError(e));
    }
  };
}