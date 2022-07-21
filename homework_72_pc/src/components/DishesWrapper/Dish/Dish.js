import './Dish.css'
import pizzaSlice from '../../../animations/pizza_slice.gif'

const Dish = ({name, cost, img, deleteDishHandler, setActiveModalEditDish}) => (
  <div className='dish'>
      <div className='dish_img_and_name'>
        <img src={img} className='dish_img' alt='dish'/>
        <p className='dish_name'>{name}</p>
      </div>


      <div className='dish_cost_and_btns'>
        <p className='dish_cost'>{cost} KGS</p>
        <button className='dish_btn' onClick={setActiveModalEditDish}>Edit</button>
        <button className='dish_btn' onClick={deleteDishHandler}>Delete</button>
      </div>
    </div>
);

export default Dish;