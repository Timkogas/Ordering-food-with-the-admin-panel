import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import DishesWrapper from "../components/DishesWrapper/DishesWrapper";
import {useDispatch, useSelector} from 'react-redux'
import { addDishInCart, calculateTotalPrice, createOrder, deleteDishFromCart, fetchDishes} from '../store/dishesActions'
import { useEffect, useState, useCallback } from "react";
import Footer from "../components/Footer/Footer";
import ModalCustom from "../components/ModalCustom/ModalCustom";
import Cart from "../components/Cart/Cart";

export default function Dishes() {
  
  const dispatch = useDispatch()
  const {dishes, dishesInCart, devilery, totalPrice} = useSelector(state => state.dishes)
  const [modalVisible, setModalVisible] = useState(false)
  const [fieldName, setFieldName] = useState('');
  const [fieldPhone, setFieldPhone] = useState('');
  const [fieldEmail, setFieldEmail] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(fetchDishes())
    setRefreshing(false);
  }, []);

  useEffect(()=>{
    dispatch(fetchDishes())
  }, [dispatch])

  useEffect (()=>{
    calculateTotalPrice(dishesInCart, devilery)
    // eslint-disable-next-line
  }, [dishesInCart, devilery])

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFields(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };


  const addDishInCartHandler = (dishName, dishCost) => {
    dispatch(addDishInCart(dishName, dishCost))
  }
  const calculateTotalPriceHandler = (dishes, devilery) => {
    dispatch(calculateTotalPrice(dishes, devilery))
  }
  const deleteDishFromCartHandler = (dish) => {
    dispatch(deleteDishFromCart(dish))
  }
  const orderHandler = async () => {
    const newDishesWithoutCost = [...dishesInCart].map((dish) => {return {name: dish.name, amount: dish.amount}})
    const order = {
      customer: {
        name: fieldName,
        phone: fieldPhone,
        email: fieldEmail,
      },
      dishes: newDishesWithoutCost,
    };
    await dispatch(createOrder(order))
    
    setFieldName('')
    setFieldPhone('')
    setFieldEmail('')
    setModalVisible(false)
  }

  return (
    <>
      <View style={styles.container}>
        <DishesWrapper
          dishes={dishes}
          addDishInCartHandler={addDishInCartHandler}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </View> 
      <Footer 
        setModalVisible={setModalVisible}
        totalPrice={totalPrice}
        dishesInCart={dishesInCart}
        devilery={devilery}
        calculateTotalPrice={calculateTotalPriceHandler}
      />
      <ModalCustom
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        fieldName={fieldName}
        fieldPhone={fieldPhone}
        fieldEmail={fieldEmail}
        dishesInCart={dishesInCart}
        orderHandler={orderHandler}
      >
        <Cart
          dishesInCart={dishesInCart}
          devilery={devilery}
          totalPrice={totalPrice}
          calculateTotalPrice={calculateTotalPriceHandler}
          deleteDishFromCart={deleteDishFromCartHandler}
          onChangeHandler={onChangeHandler}
          
          
          fieldName={fieldName}
          setFieldName={setFieldName}
          fieldPhone={fieldPhone}
          setFieldPhone={setFieldPhone}
          fieldEmail={fieldEmail}
          setFieldEmail={setFieldEmail}
        />
      </ModalCustom>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
})
