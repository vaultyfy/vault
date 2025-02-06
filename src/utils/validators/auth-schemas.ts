import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  fullname: Yup.string().required("Name is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?"{}|<>]/,
      "Password must contain at least one special character"
    )
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .required("Password is required"),
  passcode: Yup.string().max(8, "Passcode must not excced 8 digits"),
  phoneNumber: Yup.number().required("Phone number is required"),
});

export const signInSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const forgotPwdSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
});

export const newPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export const personalInfoSchema = Yup.object().shape({
  address: Yup.string().notRequired(),
  dob: Yup.string().notRequired(),
  state: Yup.string().notRequired(),
  lga: Yup.string().notRequired(),
  nationality: Yup.string().notRequired(),
});
