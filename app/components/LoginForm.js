import React from "react";
import { StyleSheet } from "react-native";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitButton from "./FormSubmitButton";

const LoginForm = () => {
  return (
    <FormContainer>
      <FormInput title="Email" placeHolder="example@email.com" />
      <FormInput title="Password" placeHolder="*********" />
      <FormSubmitButton title="Login" />
    </FormContainer>
  );
};

const styles = StyleSheet.create({});

export default LoginForm;
