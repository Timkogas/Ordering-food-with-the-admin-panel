import axios from 'axios'
import {
  ADD_DISH_IN_CART,
  FETCH_DISHES_ERROR, 
  FETCH_DISHES_REQUEST, 
  FETCH_DISHES_SUCCESS } from "./actionsTypes"

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