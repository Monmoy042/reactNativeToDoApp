import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";

const FormInput = ({ placeHolder, title }) => {
  return (
    <>
      <Text style={{ fontWeight: "bold" }}>{title}</Text>
      <TextInput placeholder={placeHolder} style={styles.input} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#1b1b33",
    height: 35,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 20,
  },
});

export default FormInput;
