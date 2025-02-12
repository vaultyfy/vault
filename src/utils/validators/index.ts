import {
  forgotPwdSchema,
  newPasswordSchema,
  personalInfoSchema,
  signInSchema,
  signupSchema,
} from "./auth-schemas";

import { createGroupSchema } from "./create-group";

export const schema = {
  login: signInSchema,
  signUp: signupSchema,
  forgotPassword: forgotPwdSchema,
  newPassword: newPasswordSchema,
  profile: personalInfoSchema,
  createGroup: createGroupSchema,
};
