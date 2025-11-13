import * as Yup from "yup";

export const adjustLoanSchema = Yup.object().shape({
  approvableAmount: Yup.string().required("Amount is required"),
});
