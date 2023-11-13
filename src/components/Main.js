import React, { useState, useRef } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PhoneInput from "react-native-phone-number-input";

const Main = () => {
  const [value, setValue] = useState('');
  const phoneInput = useRef(PhoneInput);
  const [formattedValue, setFormattedValue] = useState("");
  return (
    <View style={styles.main}>
      <View style={styles.centeredContainer}>
      <PhoneInput
           ref={phoneInput}
           defaultValue={value}
           defaultCode="GH"
           layout="first"
           onChangeText={(text) => {
             setValue(text);
           }}
           onChangeFormattedText={(text) => {
             setFormattedValue(text);
           }}
           countryPickerProps={{ withAlphaFilter: true }}
           withShadow
           autoFocus
         />
        <TouchableOpacity
           style={styles.button}
           onPress={() => {
             alert(formattedValue)
           }}
         >
            <Text style={styles.buttonText}>Get Started</Text>
         </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    height: 400
  },
  centeredContainer: {
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    height: 50,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7CDB8A",
    shadowColor: "rgba(0,0,0,0.4)",
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  }
});

export default Main;
