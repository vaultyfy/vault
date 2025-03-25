import { adjustLoanSchema } from "./adjust-loan";
import {
  forgotPwdSchema,
  newPasswordSchema,
  personalInfoSchema,
  signInSchema,
  signupSchema,
} from "./auth-schemas";

import { createGroupSchema } from "./create-group";
import { exploreFilterSchema } from "./explore-schemas";
import { createGoalSchema } from "./goals";

export const schema = {
  login: signInSchema,
  signUp: signupSchema,
  forgotPassword: forgotPwdSchema,
  newPassword: newPasswordSchema,
  profile: personalInfoSchema,
  createGroup: createGroupSchema,
  exploreFilters: exploreFilterSchema,
  adjustLoan: adjustLoanSchema,
  createGoal: createGoalSchema
};
