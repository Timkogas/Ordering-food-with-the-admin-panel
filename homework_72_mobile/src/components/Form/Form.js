import { View, StyleSheet, TextInput } from "react-native";


export default function Form({fieldName, fieldPhone, fieldEmail, setFieldName, setFieldPhone, setFieldEmail}) {
  return (
    <>
      <View>
      <TextInput
        style={styles.input}
        placeholder='Name'
        name='name'
        type='name'
        value={fieldName}
        onChangeText={setFieldName}
      />
      <TextInput
        style={styles.input}
        placeholder='Phone'
        name='phone'
        type='phone'
        value={fieldPhone}
        onChangeText={setFieldPhone}
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        name='email'
        type='email'
        value={fieldEmail}
        onChangeText={setFieldEmail}
      />
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
  },
});
