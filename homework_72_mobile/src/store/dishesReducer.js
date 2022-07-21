import { 
  ADD_DISH_IN_CART,
  FETCH_DISHES_ERROR, 
  FETCH_DISHES_REQUEST, 
  FETCH_DISHES_SUCCESS } from "./actionsTypes"

const initialState = {
  dishesInCart: [],
  dishes: {},
  error: null,
}

const dishesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DISHES_REQUEST: 
      return {...state}
    case FETCH_DISHES_SUCCESS: 
      return {...state, dishes: action.dishes}
    case FETCH_DISHES_ERROR: 
      return {...state, error: action.error}
    case ADD_DISH_IN_CART:
      const element = state.dishesInCart.find(dish => dish.name === action.dishName)
      const index = state.dishesInCart.findIndex(dish => dish.name === action.dishName)
      if (element) {
        const newObj = {...element, amount: element.amount + 1}
        const newArr = [...state.dishesInCart]
        newArr[index] = newObj
        return {...state, dishesInCart: newArr}
      } else {
        const newObj = {
          name: action.dishName,
          cost: action.dishCost,
          amount: 1
        }
        return {...state, dishesInCart: [...state.dishesInCart, newObj]}
      }
    default:
      return state
  }
}


export default dishesReducer