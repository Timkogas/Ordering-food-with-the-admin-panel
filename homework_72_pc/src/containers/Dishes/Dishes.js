import DishesWrapper from '../../components/DishesWrapper/DishesWrapper'
import './Dishes.css'
import { useDispatch, useSelector } from 'react-redux';
import { addDish, deleteDish, fetchDishes, editDish } from '../../store/actions/dishesActions';
import { useEffect, useState } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import FormAddDish from '../../components/FormAddDish/FormAddDish'
import Preloader from '../../components/UI/Preloader/Preloader';
import FormEditDish from '../../components/FormEditDish/FormEditDish'

const Dishes = () => {

  const dispatch = useDispatch()
  const {dishes, loading} = useSelector(state=>state.dishes)

  const [activeModalAddDish, setActiveModalAddDish] = useState(false)
  const [activeModalEditDish, setActiveModalEditDish] = useState(false)
  const [fields, setFields] = useState({
    name: "",
    cost: "",
    img: "",
  });
  const [currentDish, setCurrentDish] = useState({
    name: "",
    cost: "",
    img: "",
  })
  const [currentDishID, setCurrentDishID] = useState('')

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  const onChangeAddHandler = (e) => {
    const { name, value } = e.target;
    setFields(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const onChangeEditHandler = (e) => {
    const { name, value } = e.target;
    setCurrentDish(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const addDishHandler = async (e) => {
    e.preventDefault();
    await dispatch(addDish(fields))
    const emptyFields = {
      name: "",
      cost: "",
      img: "",
    }
    setFields(emptyFields)
    setActiveModalAddDish(false)
  }

  const deleteDishHandler = async (dishID) => {
    await dispatch(deleteDish(dishID))
  }
  const editDishHandler = async (e) => {
    e.preventDefault();
    await dispatch(editDish(currentDish, currentDishID))
    setActiveModalEditDish(false)
  }

  const openModalEditDishHandler = (dish, dishID) => {
    setCurrentDish(dish)
    setCurrentDishID(dishID)
  }

  return (
  <>
    <Preloader
        showPlaceholder={loading}
      />
    <DishesWrapper
      setActiveModalAddDish={setActiveModalAddDish}
      setActiveModalEditDish={setActiveModalEditDish}
      deleteDishHandler={deleteDishHandler}
      openModalEditDishHandler={openModalEditDishHandler}
      dishes={dishes}
    />
    <Modal active={activeModalAddDish} setActive={setActiveModalAddDish}>
      <FormAddDish
        fields={fields}
        onChangeHandler={onChangeAddHandler}
        addDishHandler={addDishHandler}
      />
    </Modal>

    <Modal active={activeModalEditDish} setActive={setActiveModalEditDish}>
      <FormEditDish
        fields={currentDish}
        onChangeHandler={onChangeEditHandler}
        editDishHandler={editDishHandler}
      />
    </Modal>
  </>
  )
};

export default Dishes;