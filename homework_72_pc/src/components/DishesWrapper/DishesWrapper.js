import './DishesWrapper.css'
import Dish from './Dish/Dish'

const DishesWrapper = ({setActiveModal}) => (
  <div className='container'>
    <div className='dishes_wrapper_header'>
        <h2 className='dishes_wrapper_header_title'>Dishes</h2>
        <button className='dishes_wrapper_header_btn' onClick={()=>{setActiveModal(true)}}>Add new Dishes</button>
    </div>

  </div>
);

export default DishesWrapper;