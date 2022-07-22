import {  Text, View, StyleSheet, Pressable } from "react-native";

export default function CartItem({name, cost, amount}) {
  return (
    <>
      <View style={styles.cart_item}>
        <View style={styles.cart_item_text_wrapper}>
          <Text style={styles.cart_item_text}>{name}</Text>
          <Text style={styles.cart_item_text}>x{amount}</Text>
        </View>

        <View style={styles.cart_item_text_wrapper}>
          <Text style={styles.cart_item_cost}>{cost} KGS</Text>
          <Pressable style={styles.cart_item_btn}>
            <Text style={styles.cart_item_btn_text}>X</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cart_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cart_item_text_wrapper: {
    flexDirection: 'row',
  },
  cart_item_text: {
    fontSize: 17,
    marginRight: 10,
  },
  cart_item_cost: {
    fontWeight: 'bold',
    fontSize: 17,
    marginRight: 10,
  },
  cart_item_btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    paddingHorizontal: 10,
    borderWidth: 1,
    alignItems: 'center',
    marginLeft: 15,
  },
  cart_item_btn_text: {
    fontSize: 10,
  }
})
