import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Footer({setModalVisible}) {
  return (
    <>
      <View style={styles.footer}>
        <Text style={styles.footerPrice}>Order Total: 450 KGS</Text>
        <Pressable style={styles.footerBtn} onPress={()=>{(setModalVisible(true))}}>
          <Text style={styles.footerBtnText}>Checkout</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    borderTopWidth: 2,
    borderTopColor: 'black',
    width: '100%',
    height: 70,
    padding: 10,
  },
  footerPrice: {
    flex: 2,
    fontSize: 17,
  },
  footerBtn: {
    flex: 1,
    borderColor: 'black',
    padding: 5,
    borderWidth: 1,
    alignItems: 'center',
  },
  footerBtnText: {
    fontSize: 17,
  }
})
