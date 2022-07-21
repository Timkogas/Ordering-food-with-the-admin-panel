import { StyleSheet, Text, View } from "react-native";

export default function Layout(props) {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Turtle Pizza</Text>
      </View>
      {props.children}
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
})
