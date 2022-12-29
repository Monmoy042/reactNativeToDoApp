import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import {
  isValidObjectField,
  isValidEmail,
  updateError,
} from "../utils/methods";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitButton from "./FormSubmitButton";

import { Formik } from "formik";
import * as Yup from "yup";

const SignUpForm = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const { fullName, email, password, confirmPassword } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    // console.log(value, fieldName);
    setUserInfo({ ...userInfo, [fieldName]: value });
  };
  // console.log(userInfo);

  // Validate form
  const isValidForm = () => {
    // We will accept only if all of the fields have value
    if (!isValidObjectField(userInfo)) {
      return updateError("Required all fields", setError);
    }

    // if valid name with 3 or more character
    if (!fullName.trim() || fullName.length < 3) {
      return updateError("Invalid Name", setError);
    }

    // only valid email is allowed
    if (!isValidEmail(email)) {
      return updateError("Invalid Email", setError);
    }

    // Password must have 8 or more character
    if (!password.trim() || password.length < 8) {
      return updateError("Password is less than 8 character", setError);
    }

    // Password and confirm password must be the same
    if (password !== confirmPassword) {
      return updateError("Password does not match", setError);
    }

    return true;
  };

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
        value={fullName}
        onChangeText={(value) => {
          handleOnChangeText(value, "fullName");
        }}
        label="Full Name"
        placeHolder="John Smith"
      />
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
      <FormInput
        value={confirmPassword}
        onChangeText={(value) => {
          handleOnChangeText(value, "confirmPassword");
        }}
        label="Confirm Password"
        placeHolder="*********"
        autoCapitalize="none"
        secureTextEntry
      />
      <FormSubmitButton onPress={submitForm} title="Sign up" />
    </FormContainer>
  );
};

const styles = StyleSheet.create({});

export default SignUpForm;
