import './DishesWrapper.css'
import Dish from './Dish/Dish'

const DishesWrapper = ({setActiveModalAddDish, dishes,  deleteDishHandler, setActiveModalEditDish, openModalEditDishHandler}) => (
  <div className='container'>
    <div className='dishes_wrapper_header'>
        <h2 className='dishes_wrapper_header_title'>Dishes</h2>
        <button className='dishes_wrapper_header_btn' onClick={()=>{setActiveModalAddDish(true)}}>Add new Dishes</button>
    </div>
  {Object.values(dishes).map((dish, i)=>{
    const dishID = Object.keys(dishes)[i]
    return (
      <Dish
        key={dishID}
        name={dish.name}
        cost={dish.cost}
        img={dish.img}
        deleteDishHandler={()=>{deleteDishHandler(dishID)}}
        setActiveModalEditDish={()=>{setActiveModalEditDish(true); openModalEditDishHandler(dish, dishID)}}
      />
    )
  })}
  </div>
);

export default DishesWrapper;