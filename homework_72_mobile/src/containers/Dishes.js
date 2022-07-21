import { StyleSheet, Text, View } from "react-native";
import DishesWrapper from "../components/DishesWrapper/DishesWrapper";
import {useDispatch, useSelector} from 'react-redux'
import { addDishInCart, fetchDishes } from '../store/dishesActions'
import { useEffect } from "react";

export default function Dishes() {
  
  const dispatch = useDispatch()
  const {dishes, dishesInCart} = useSelector(state => state.dishes)

  useEffect(()=>{
    dispatch(fetchDishes())
  }, [dispatch])

  console.log(dishesInCart)

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
