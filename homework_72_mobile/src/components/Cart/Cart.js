import { Text, View, StyleSheet, ScrollView } from "react-native";
import CartItem from "./CartItem/CartItem";

export default function Cart({dishesInCart}) {
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
              />
            )
          })}
        </ScrollView>
        <View style={styles.cart_total}> 
          <Text style={styles.cart_total_text}>Delivery</Text> 
          <Text style={styles.cart_total_cost}>150 KGS</Text>
        </View>
        <View style={styles.cart_total}>
          <Text style={styles.cart_total_text}>Total</Text> 
          <Text style={styles.cart_total_cost}>600 KGS</Text> 
        </View>
      </View>
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
