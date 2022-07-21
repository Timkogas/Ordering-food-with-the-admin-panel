import DishesWrapper from '../../components/DishesWrapper/DishesWrapper'
import './Dishes.css'
import { useDispatch, useSelector } from 'react-redux';
import { addDish } from '../../store/actions/dishesActions';
import { useState } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import FormAddDish from '../../components/FormAddDish/FormAddDish'

const Dishes = () => {

  const dispatch = useDispatch()
  const {dishes, loading} = useSelector(state=>state.dishes)

  const [activeModal, setActiveModal] = useState(false)
  const [fields, setFields] = useState({
    name: "",
    cost: "",
    img: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFields(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const addDishHandler = async (e) => {
    e.preventDefault();
    await dispatch(addDish(fields, '/dishes.json'))
    const emptyFields = {
      name: "",
      cost: "",
      img: "",
    }
    setFields(emptyFields)
    setActiveModal(false)
  }

  return (
  <>
    <DishesWrapper
      setActiveModal={setActiveModal}
    />
    <Modal active={activeModal} setActive={setActiveModal}>
      <FormAddDish
        fields={fields}
        onChangeHandler={onChangeHandler}
        addDishHandler={addDishHandler}
      />
    </Modal>
  </>
  )
};

export default Dishes;