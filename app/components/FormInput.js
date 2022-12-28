import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";

const FormInput = (props) => {
  const { placeHolder, label } = props;
  return (
    <>
      <Text style={{ fontWeight: "bold" }}>{label}</Text>
      <TextInput {...props} placeholder={placeHolder} style={styles.input} />
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
