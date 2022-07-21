import './DishesWrapper.css'
import Dish from './Dish/Dish'

const DishesWrapper = ({setActiveModal, dishes}) => (
  <div className='container'>
    <div className='dishes_wrapper_header'>
        <h2 className='dishes_wrapper_header_title'>Dishes</h2>
        <button className='dishes_wrapper_header_btn' onClick={()=>{setActiveModal(true)}}>Add new Dishes</button>
    </div>
  {Object.values(dishes).map((dish, i)=>{
    return (
      <Dish
        key={Object.keys(dishes)[i]}
        name={dish.name}
        cost={dish.cost}
        img={dish.img}
      />
    )
  })}
  </div>
);

export default DishesWrapper;