import './Order.css'
import OrderItem from './OrderItem/OrderItem'

const Order = ({dishesUser, dishesData, devilery, totalPrice}) => (
  <div className='order'>
      <div className='order_list'>
        <div>
          {Object.values(dishesUser).map((dish, i)=>{
            const cost = () => {
              for (let dishData of Object.values(dishesData)) {
                if(dishData.name === dish.name) {
                  return dishData.cost
                }
              }
            }
            return (
              <OrderItem
                key={i}
                name={dish.name}
                cost={cost()}
                amount={dish.amount}
              />
            )
          })}
          <p className='order_list_devilery'>Devilery <b>{devilery} KGS</b></p>
        </div>
    </div>
      <div className='order_total'>
          <p>Order total:</p>

          <b>{totalPrice}22332 KGS</b>

          <button className='order_total_btn'>Complete order</button>
      </div>

      
    </div>
);

export default Order;