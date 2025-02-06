import {
  forgotPwdSchema,
  newPasswordSchema,
  personalInfoSchema,
  signInSchema,
  signupSchema,
} from "./auth-schemas";

export const schema = {
  login: signInSchema,
  signUp: signupSchema,
  forgotPassword: forgotPwdSchema,
  newPassword: newPasswordSchema,
  profile: personalInfoSchema,
};
