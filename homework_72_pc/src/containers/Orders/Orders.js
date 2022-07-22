import './Orders.css'
import { useDispatch, useSelector} from 'react-redux';
import { useEffect} from 'react';
import OrdersWrapper from '../../components/OrdersWrapper/OrdersWrapper';
import Preloader from '../../components/UI/Preloader/Preloader';
import { completeOrder, fetchOrders } from '../../store/actions/ordersActions';
import { fetchDishes } from '../../store/actions/dishesActions';

const Orders = () => {
  const dispatch = useDispatch()
  const {orders, loading, devilery} = useSelector(state=>state.orders)
  const {dishes} = useSelector(state=>state.dishes)

  useEffect(() => {
    dispatch(fetchOrders())
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  const calculateTotalPriceHandler = (dishesData, dishesUser, devilery) => {
    const sum = Object.values(dishesUser).reduce((sum, dish, i)=>{
      for (let dishData of Object.values(dishesData)) {
        if (dishData.name === dish.name){
          return sum + (dishData.cost * dish.amount)
        }
      }
      return sum
    }, devilery)
    return sum
  }

  const completeOrderHandler = (orderID) => {
    dispatch(completeOrder(orderID))
  }

  return (
    <>
      <Preloader
        showPlaceholder={loading}
      />
      <OrdersWrapper
        orders={orders}
        dishes={dishes}
        devilery={devilery}
        calculateTotalPriceHandler={calculateTotalPriceHandler}
        completeOrderHandler={completeOrderHandler}
      />
    </>
  )
};

export default Orders;