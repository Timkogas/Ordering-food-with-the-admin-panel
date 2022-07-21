import { 
   DELETE_DISH_SUCCESS,
   EDIT_DISH_SUCCESS,
   FETCH_DISHES_ERROR,
   FETCH_DISHES_REQUEST, 
   FETCH_DISHES_SUCCESS, 
   POST_DISH_SUCCESS 
  } from "../actionTypes";

const initialState = {
  dishes: {},
  error: null,
  loading: false,
};

const dishesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DISHES_REQUEST:
      return {...state, loading: true};
    case FETCH_DISHES_SUCCESS:
      return {...state, dishes: action.dishes, loading: false};
    case FETCH_DISHES_ERROR:
      return {...state, loading: false, error: action.error};
    case POST_DISH_SUCCESS: 
      return {...state, loading: false}
    case EDIT_DISH_SUCCESS: 
      return {...state, loading: false}
    case DELETE_DISH_SUCCESS: 
      return {...state, loading: false}
    default:
      return state;
  }
};

export default dishesReducer;