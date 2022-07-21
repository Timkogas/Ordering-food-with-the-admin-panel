import './DishesWrapper.css'
import Dish from './Dish/Dish'
const DishesWrapper = () => (
  <div className='container'>
    <div className='dishes_wrapper_header'>
        <h2 className='dishes_wrapper_header_title'>Dishes</h2>
        <button className='dishes_wrapper_header_btn'>Add new Dishes</button>
    </div>

    <Dish/>
    <Dish/>
    <Dish/>
    <Dish/>
    <Dish/>
    <Dish/>
    <Dish/>
  </div>
);

export default DishesWrapper;