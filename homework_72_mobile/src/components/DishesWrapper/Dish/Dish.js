import { Image, Text, View, StyleSheet } from "react-native";


export default function Post({img, text}) {
  return (
    <></>
    // <View style={styles.post}>
    //   <Image source={{uri: img}} style={styles.img}/>
    //   <Text style={styles.text}>{text}</Text>
    // </View>
  );
}
const styles = StyleSheet.create({
  post: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginBottom: 20,
    backgroundColor: 'lightgrey',
    padding: 20,
    borderWidth: 1,
    borderBottomColor: 'grey',
    borderRadius: 5,
  },
  img: {
    height: 100,
    width: 100,
    flex: 1,
  },
  text : {
    marginLeft: 10,
    flex: 2,
  },
})
