import { useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Form from "../Form/Form";
import CartItem from "./CartItem/CartItem";

export default function Cart(
  {dishesInCart, devilery, totalPrice, calculateTotalPrice, deleteDishFromCart, fieldName, fieldPhone, fieldEmail, setFieldName, setFieldPhone, setFieldEmail}
  ) {
  useEffect (()=>{
    calculateTotalPrice(dishesInCart, devilery)
    // eslint-disable-next-line
  }, [dishesInCart, devilery])
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.cart_title}>Your order:</Text>
        <ScrollView>
          {dishesInCart.map((dish, i)=> {
            return (
              <CartItem
                key={i}
                name={dish.name}
                cost={dish.cost}
                amount={dish.amount}
                deleteDishFromCart={()=>{deleteDishFromCart(dish)}}
              />
            )
          })}
        </ScrollView>
        <View style={styles.cart_total_and_delivery}>
          <View style={styles.cart_total}> 
            <Text style={styles.cart_total_text}>Delivery</Text> 
            <Text style={styles.cart_total_cost}>{devilery} KGS</Text>
          </View>
          <View style={styles.cart_total}>
            <Text style={styles.cart_total_text}>Total</Text> 
            <Text style={styles.cart_total_cost}>{totalPrice} KGS</Text> 
          </View>
        </View>
      </View>

      <Form
        fieldName={fieldName}
        setFieldName={setFieldName}
        fieldPhone={fieldPhone}
        setFieldPhone={setFieldPhone}
        fieldEmail={fieldEmail}
        setFieldEmail={setFieldEmail}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cart_title: {
    fontSize: 30,
    marginBottom: 30,
  },
  cart_total_and_delivery: {
    marginTop: 50,
  },
  cart_total: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cart_total_text: {
    fontSize: 20
  },
  cart_total_cost: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
