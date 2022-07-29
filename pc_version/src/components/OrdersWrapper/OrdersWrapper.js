import './OrdersWrapper.css'
import Order from './Order/Order'

const OrdersWrapper = ({orders, dishes, devilery, calculateTotalPriceHandler, completeOrderHandler}) => (
  <div className='container'>
    <div className='orders_wrapper_header'>
        <h2 className='orders_wrapper_header_title'>Orders</h2>
    </div>
  {Object.values(orders).map((order, i)=>{
    const orderID = Object.keys(orders)[i]
    return (
      <Order
        key={orderID}
        dishesUser={order.dishes}
        dishesData={dishes}
        devilery={devilery}
        calculateTotalPriceHandler={calculateTotalPriceHandler}
        completeOrderHandler={completeOrderHandler}
        orderID={orderID}
      />
    )
  })}
  </div>
);

export default OrdersWrapper