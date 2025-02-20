import {
  forgotPwdSchema,
  newPasswordSchema,
  personalInfoSchema,
  signInSchema,
  signupSchema,
} from "./auth-schemas";

import { createGroupSchema } from "./create-group";
import { exploreFilterSchema } from "./explore-schemas";

export const schema = {
  login: signInSchema,
  signUp: signupSchema,
  forgotPassword: forgotPwdSchema,
  newPassword: newPasswordSchema,
  profile: personalInfoSchema,
  createGroup: createGroupSchema,
  exploreFilters: exploreFilterSchema,
};
