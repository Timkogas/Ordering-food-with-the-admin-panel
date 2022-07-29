import axios from "../../axiosDishes";
import { 
  COMPLETE_ORDER_SUCCESS,
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
          dispatch(fetchOrdersSuccess(response.data ? response.data : {}));
      } catch(e) {
          dispatch(fetchOrdersError(e));
      }
  };
};
export const completeOrderSuccess = () => {
  return {type: COMPLETE_ORDER_SUCCESS}
}

export const completeOrder = (orderId) => {
  return async (dispatch) => {
      dispatch(fetchOrdersRequest());
      try {
          await axios.delete(`/orders/${orderId}.json`);
          dispatch(completeOrderSuccess());
          dispatch(fetchOrders())
      } catch (e) {
          dispatch(fetchOrdersError(e));
      }
  };
}

