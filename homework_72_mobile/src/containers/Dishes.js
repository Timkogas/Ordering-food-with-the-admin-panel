import { StyleSheet, Text, View } from "react-native";
import DishesWrapper from "../components/DishesWrapper/DishesWrapper";
import {useDispatch, useSelector} from 'react-redux'
import { fetchDishes } from '../store/dishesActions'
import { useEffect } from "react";

export default function Dishes() {
  
  const dispatch = useDispatch()
  const {dishes} = useSelector(state => state.dishes)

  useEffect(()=>{
    dispatch(fetchDishes())
  }, [dispatch])


  return (
    <>
      <View style={styles.container}>
        <Text>asdasd</Text>
      </View> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 10,
  },
})
