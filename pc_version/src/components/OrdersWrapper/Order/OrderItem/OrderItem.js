import './OrderItem.css'


const OrderItem = ({name, cost, amount}) => {
  return (
    <>
      <p className='order_item'>{amount} x {name} <b>{cost*amount} KGS</b></p>
    </>
  )
}

export default OrderItem;