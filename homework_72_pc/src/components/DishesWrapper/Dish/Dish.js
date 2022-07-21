import './Dish.css'

const Dish = () => (
  <div className='dish'>
      <div className='dish_img_and_name'>
        <img src="https://masyamba.ru/%D0%BF%D0%B8%D1%86%D1%86%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/42-%D0%BF%D0%B8%D1%86%D1%86%D0%B0-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8.jpg" className='dish_img' alt='product'/>
        <p className='dish_name'>Пицца</p>
      </div>


      <div className='dish_cost_and_btns'>
        <p className='dish_cost'>1300 KGS</p>
        <button className='dish_btn'>Edit</button>
        <button className='dish_btn'>Delete</button>
      </div>
    </div>
);

export default Dish;