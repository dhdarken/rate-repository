import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from "../components/StyledTextInput";
import StyledText from "../components/StyledText.jsx";
import { loginValitationSchema } from "../validationSchemas/login.js";

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5,
  },
  form: {
    margin: 12,
  },
});

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <StyledTextInput
        value={field.value}
        onChangeText={(values) => helpers.setValue(values)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

export default function LogInPag() {
  return (
    <Formik
      validationSchema={loginValitationSchema}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue placeholder="E-mail" name="email" />
            <FormikInputValue
              placeholder="Password"
              name="password"
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Log In"></Button>
          </View>
        );
      }}
    </Formik>
  );
}
