import axios from "../../axiosDishes";
import { 
  FETCH_ORDERS_ERROR, 
  FETCH_ORDERS_REQUEST, 
  FETCH_ORDERS_SUCCESS, 
} from "../actionTypes"

const fetchOrdersRequest = () => {
  return {type: FETCH_ORDERS_REQUEST};
};
const fetchOrdersSuccess = (orders) => {
  return {type: FETCH_ORDERS_SUCCESS, orders};
};
const fetchOrdersError = (error) => {
  return {type: FETCH_ORDERS_ERROR, error};
};

export const fetchOrders = () => {
  return async (dispatch) => {
      dispatch(fetchOrdersRequest());
      try {
          const response = await axios.get(`/orders.json`);
          dispatch(fetchOrdersSuccess(response.data));
      } catch(e) {
          dispatch(fetchOrdersError(e));
      }
  };
};
