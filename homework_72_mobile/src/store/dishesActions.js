import axios from 'axios'
import {
  ADD_DISH_IN_CART,
  CALCULATE_TOTAL_PRICE,
  CREATE_ORDER_ERROR,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  DELETE_DISH_FROM_CART,
  FETCH_DISHES_ERROR, 
  FETCH_DISHES_REQUEST, 
  FETCH_DISHES_SUCCESS, } from "./actionsTypes"

import {baseURL} from '../constans'

const fetchDishesRequest = () => {
  return {type: FETCH_DISHES_REQUEST}
} 
const fetchDishesSuccess = (dishes) => {
  return {type: FETCH_DISHES_SUCCESS, dishes}
}
const fetchDishesError = (error) => {
  return {type: FETCH_DISHES_ERROR, error}
}

export const fetchDishes = () => {
  return async (dispatch) => {
    dispatch(fetchDishesRequest())
    try {
      const response = await axios.get(baseURL+'/dishes.json')
      dispatch(fetchDishesSuccess(response.data))
    } catch(e) {
      dispatch(fetchDishesError(e))
    }
  }
}

export const addDishInCart = (dishName, dishCost) => {
  return {type: ADD_DISH_IN_CART, dishName, dishCost}
}

export const deleteDishFromCart = (dish) => {
  return {type: DELETE_DISH_FROM_CART, dish}
}
export const calculateTotalPrice = (dishes, devilery) => {
  return {type: CALCULATE_TOTAL_PRICE, dishes, devilery}
}

const createOrderRequest = () => {
  return {type: CREATE_ORDER_REQUEST};
};

const createOrderSuccess = () => {
  return {type: CREATE_ORDER_SUCCESS};
};

const createOrderError = (error) => {
  return {type: CREATE_ORDER_ERROR, error};
};

export const createOrder = (order) => {
  return async (dispatch) => {
      dispatch(createOrderRequest());
      try {
          await axios.post(`${baseURL}/orders.json`, order);
          dispatch(createOrderSuccess());
      } catch (e) {
          dispatch(createOrderError(e));
      }
  };

  
}