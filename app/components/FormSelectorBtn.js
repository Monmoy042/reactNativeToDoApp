import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";

const FormSelectorBtn = ({ title, backgroundColor, style }) => {
  return (
    <>
      <TouchableWithoutFeedback>
        <View style={[styles.container, style, { backgroundColor }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: "50%",
    backgroundColor: "#1b1b33",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
});

export default FormSelectorBtn;
