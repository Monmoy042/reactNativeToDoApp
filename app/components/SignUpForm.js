import React from "react";
import { StyleSheet } from "react-native";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitButton from "./FormSubmitButton";

const SignUpForm = () => {
  return (
    <FormContainer>
      <FormInput title="Full Name" placeHolder="John Smith" />
      <FormInput title="Email" placeHolder="example@email.com" />
      <FormInput title="Password" placeHolder="*********" />
      <FormInput title="Confirm Password" placeHolder="*********" />
      <FormSubmitButton title="Sign up" />
    </FormContainer>
  );
};

const styles = StyleSheet.create({});

export default SignUpForm;
