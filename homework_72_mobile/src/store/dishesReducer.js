import { 
  ADD_DISH_IN_CART,
  CALCULATE_TOTAL_PRICE,
  CREATE_ORDER_ERROR,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  DELETE_DISH_FROM_CART,
  FETCH_DISHES_ERROR, 
  FETCH_DISHES_REQUEST, 
  FETCH_DISHES_SUCCESS, 
  SET_MODAL_VISIBLE} from "./actionsTypes"

const initialState = {
  totalPrice: 0,
  devilery: 150,
  dishesInCart: [],
  dishes: {},
  modalVisible: false,
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
      case CALCULATE_TOTAL_PRICE: 
      const sum = action.dishes.reduce((sum, dish)=>{
        return sum + (dish.cost * dish.amount)
      }, state.devilery)
      return {...state, totalPrice: sum}

    case DELETE_DISH_FROM_CART:
      const indexDish = state.dishesInCart.findIndex(dish => dish.name === action.dish.name)
      if (action.dish.amount === 1) {
        const newArr = [...state.dishesInCart]
        newArr.splice(indexDish, 1)
        return {...state, dishesInCart: newArr}
      } else {
        const newObj = {...action.dish, amount: action.dish.amount - 1}
        const newArr = [...state.dishesInCart]
        newArr[indexDish] = newObj
        return {...state, dishesInCart: newArr}
      }
    case CREATE_ORDER_REQUEST:
        return {...state};
    case CREATE_ORDER_SUCCESS:
        return {...state};
    case CREATE_ORDER_ERROR:
        return {...state, error: action.error};
    default:
      return state
  }
}


export default dishesReducer