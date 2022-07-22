import './Orders.css'
import { useDispatch, useSelector} from 'react-redux';
import { useEffect} from 'react';
import OrdersWrapper from '../../components/OrdersWrapper/OrdersWrapper';
import Preloader from '../../components/UI/Preloader/Preloader';
import { fetchOrders } from '../../store/actions/ordersActions';
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

  return (
    <>
      <Preloader
        showPlaceholder={loading}
      />
      <OrdersWrapper
        orders={orders}
        dishes={dishes}
        devilery={devilery}
      />
    </>
  )
};

export default Orders;