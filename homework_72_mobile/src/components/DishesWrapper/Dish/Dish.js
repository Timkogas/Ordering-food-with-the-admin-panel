import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";


export default function Dish({img, name, cost}) {
  return (
    <>
    <TouchableOpacity style={styles.dish}>
      <View style={styles.imgWrapper}>
        <Image source={{uri: img}} style={styles.img} alt='dish'/>
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.cost}>{cost} KGS</Text>
    </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  dish: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginBottom: 20,
    backgroundColor: 'lightgrey',
    padding: 10,
    borderWidth: 1,
    borderBottomColor: '#367a71',
    borderRadius: 5,
  },
  imgWrapper: {
    borderWidth: 1,
    borderBottomColor: '#367a71',
    borderRadius: 5,
  },
  img: {
    height: 100,
    width: 100,
    flex: 2,
  },
  name : {
    marginLeft: 10,
    marginRight: 10,
    flex: 3,
  },
  cost: {
    flex: 2,
    fontWeight: 'bold',
  }
})
