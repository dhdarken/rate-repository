import * as yup from "yup";

export const loginValitationSchema = yup.object().shape({
  email: yup.string().email("email invalid").required("email is required"),
  password: yup
    .string()
    .min(5, "too short!")
    .max(1000, "too long!")
    .required("password is required"),
});
