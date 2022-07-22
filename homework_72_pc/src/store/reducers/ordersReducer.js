import { FETCH_ORDERS_ERROR, FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS } from "../actionTypes";

const initialState = {
  orders: {},
  error: null,
  loading: false,
  devilery: 150,
};

const ordersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ORDERS_REQUEST:
      return {...state, loading: true};
    case FETCH_ORDERS_SUCCESS:
      return {...state, orders: action.orders, loading: false};
    case FETCH_ORDERS_ERROR:
      return {...state, loading: false, error: action.error};
    default:
      return state;
  }
};

export default ordersReducer;