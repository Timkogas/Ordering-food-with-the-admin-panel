import DishesWrapper from '../../components/DishesWrapper/DishesWrapper'
import './Dishes.css'
import { useDispatch, useSelector } from 'react-redux';
import { addDish, fetchDishes } from '../../store/actions/dishesActions';
import { useEffect, useState } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import FormAddDish from '../../components/FormAddDish/FormAddDish'
import Preloader from '../../components/UI/Preloader/Preloader';

const Dishes = () => {

  const dispatch = useDispatch()
  const {dishes, loading} = useSelector(state=>state.dishes)

  const [activeModal, setActiveModal] = useState(false)
  const [fields, setFields] = useState({
    name: "",
    cost: "",
    img: "",
  });

  useEffect(() => {
    dispatch(fetchDishes("/dishes.json"));
  }, [dispatch]);


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
    <Preloader
        showPlaceholder={loading}
      />
    <DishesWrapper
      setActiveModal={setActiveModal}
      dishes={dishes}
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