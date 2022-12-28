import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import {
  isValidEmail,
  isValidObjectField,
  updateError,
} from "../utils/methods";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitButton from "./FormSubmitButton";

const LoginForm = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { email, password } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  // Validation check
  const isValidForm = () => {
    if (!isValidObjectField(userInfo)) {
      return updateError("Required all fields", setError);
    }
    if (!isValidEmail(email)) {
      return updateError("Invalid Email", setError);
    }
    if (!password.trim() || password.length < 8) {
      return updateError("Password is too short!", setError);
    }
    return true;
  };

  // Submit Form
  const submitForm = () => {
    if (isValidForm()) {
      console.log(userInfo);
    }
  };
  return (
    <FormContainer>
      {error ? (
        <Text style={{ color: "red", fontSize: 18, textAlign: "center" }}>
          {error}
        </Text>
      ) : null}
      <FormInput
        value={email}
        onChangeText={(value) => {
          handleOnChangeText(value, "email");
        }}
        label="Email"
        placeHolder="example@email.com"
        autoCapitalize="none"
      />
      <FormInput
        value={password}
        onChangeText={(value) => {
          handleOnChangeText(value, "password");
        }}
        label="Password"
        placeHolder="*********"
        autoCapitalize="none"
        secureTextEntry
      />
      <FormSubmitButton onPress={submitForm} title="Login" />
    </FormContainer>
  );
};

const styles = StyleSheet.create({});

export default LoginForm;
