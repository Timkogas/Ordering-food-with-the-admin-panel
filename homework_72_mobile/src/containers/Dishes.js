import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import DishesWrapper from "../components/DishesWrapper/DishesWrapper";
import {useDispatch, useSelector} from 'react-redux'
import { addDishInCart, fetchDishes} from '../store/dishesActions'
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import ModalCustom from "../components/ModalCustom/ModalCustom";

export default function Dishes() {
  
  const dispatch = useDispatch()
  const {dishes, dishesInCart} = useSelector(state => state.dishes)
  const [modalVisible, setModalVisible] = useState(false)
  useEffect(()=>{
    dispatch(fetchDishes())
  }, [dispatch])


  const addDishInCartHandler = (dishName, dishCost) => {
    dispatch(addDishInCart(dishName, dishCost))
  }

  return (
    <>
      <View style={styles.container}>
        <DishesWrapper
          dishes={dishes}
          addDishInCartHandler={addDishInCartHandler}
        />
      </View> 
      <Footer setModalVisible={setModalVisible}/>
      <ModalCustom
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      >
        
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
