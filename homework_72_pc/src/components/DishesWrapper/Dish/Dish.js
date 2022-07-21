import './Dish.css'

const Dish = ({name, cost, img}) => (
  <div className='dish'>
      <div className='dish_img_and_name'>
        <img src={img} className='dish_img' alt='product'/>
        <p className='dish_name'>{name}</p>
      </div>


      <div className='dish_cost_and_btns'>
        <p className='dish_cost'>{cost} KGS</p>
        <button className='dish_btn'>Edit</button>
        <button className='dish_btn'>Delete</button>
      </div>
    </div>
);

export default Dish;