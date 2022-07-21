import './FormAddDish.css'

function Form({fields, onChangeHandler, addDishHandler}) {


  return (
    <form className='form' onSubmit={(e)=>{addDishHandler(e)}}>
      <h2>Введите данные:</h2>
      <input className='form_input'
        placeholder='Имя'
        name='name'
        type='name'
        value={fields.name}
        onChange={(e)=>{onChangeHandler(e)}}
      />
      <input className='form_input'
        placeholder='Цена'
        name='cost'
        type='cost'
        value={fields.cost}
        onChange={(e)=>{onChangeHandler(e)}}
      />
      <input className='form_input'
        placeholder='Картинка'
        name='img'
        type='img'
        value={fields.img}
        onChange={(e)=>{onChangeHandler(e)}}
      />
      {fields.cost.length && fields.img.length && fields.name.length ?
        <button className='form_btn' type={"Success"}>Add Dish</button> :
        null
      }
    </form>
  );
}

export default Form;