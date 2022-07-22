import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import DishesWrapper from "../components/DishesWrapper/DishesWrapper";
import {useDispatch, useSelector} from 'react-redux'
import { addDishInCart, calculateTotalPrice, deleteDishFromCart, fetchDishes} from '../store/dishesActions'
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import ModalCustom from "../components/ModalCustom/ModalCustom";
import Cart from "../components/Cart/Cart";

export default function Dishes() {
  
  const dispatch = useDispatch()
  const {dishes, dishesInCart, devilery, totalPrice} = useSelector(state => state.dishes)
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(()=>{
    dispatch(fetchDishes())
  }, [dispatch])

  useEffect (()=>{
    calculateTotalPrice(dishesInCart, devilery)
    // eslint-disable-next-line
  }, [dishesInCart, devilery])


  const addDishInCartHandler = (dishName, dishCost) => {
    dispatch(addDishInCart(dishName, dishCost))
  }
  const calculateTotalPriceHandler = (dishes, devilery) => {
    dispatch(calculateTotalPrice(dishes, devilery))
  }
  const deleteDishFromCartHandler = (dish) => {
    dispatch(deleteDishFromCart(dish))
  }

  return (
    <>
      <View style={styles.container}>
        <DishesWrapper
          dishes={dishes}
          addDishInCartHandler={addDishInCartHandler}
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
      >
        <Cart
          dishesInCart={dishesInCart}
          devilery={devilery}
          totalPrice={totalPrice}
          calculateTotalPrice={calculateTotalPriceHandler}
          deleteDishFromCart={deleteDishFromCartHandler}
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
