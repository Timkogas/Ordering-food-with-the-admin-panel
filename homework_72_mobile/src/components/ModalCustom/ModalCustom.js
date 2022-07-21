import { Modal, Pressable, Text, View, StyleSheet } from "react-native";

export default function ModalCustom({setModalVisible, modalVisible, children}) {
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{
          height: "100%",
          flex: 1,
          backgroundColor: "#fff"
        }}>
          <View>
            {children}
            <Pressable
              style={styles.modal_btn}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>Cancel</Text>
            </Pressable>

            <Pressable
              style={styles.modal_btn}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>Order</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modal_btn: {
    width: '100%',
    borderWidth: 1,
    borderBottomColor: 'grey',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 10,
  },
})
