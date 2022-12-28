import React from "react";
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const FormContainer = ({ children }) => {
  return (
    <KeyboardAvoidingView
      enable
      behavior={Platform.os === "ios" ? "padding" : null}
      style={styles.container}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    paddingHorizontal: 20,
  },
});

export default FormContainer;
