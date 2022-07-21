import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Layout(props) {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Turtle Pizza</Text>
      </View>
      {props.children}
      <View style={styles.footer}>
        <Text style={styles.footerPrice}>Order Total: 450 KGS</Text>
        <TouchableOpacity style={styles.footerBtn}>
          <Text style={styles.footerBtnText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    width: '100%',
    height: 70,
    padding: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
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
