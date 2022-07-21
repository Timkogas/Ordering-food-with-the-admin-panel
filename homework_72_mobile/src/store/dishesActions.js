import axios from 'axios'
import {
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

const fetchNextPostsSuccess = (posts, nextPostsPage) => {
  return {type: FETCH_NEXT_POSTS_SUCCESS, posts, nextPostsPage}
}

export const fetchNextPosts = (url) => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest())
    try {
      console.log(`baseURL?count=25&after=${url}`)
      const response = await axios.get(`${baseURL}?count=25&after=${url}`)
      dispatch(fetchNextPostsSuccess(response.data.data.children, response.data.data.after))
    } catch(e) {
      dispatch(fetchPostsError(e))
    }
  }
}