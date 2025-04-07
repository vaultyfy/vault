import * as Yup from "yup";

export const createGoalSchema = Yup.object().shape({
  name: Yup.string().required("Goal name cannot be blank"),
  taget: Yup.number().required("Please enter a target for this goal"),
  duration: Yup.string().required("Duration is required"),
});

export const withdrawalSchema = Yup.object().shape({
  amount: Yup.number().required("How much do you want to withdraw?"),
  accountName: Yup.string().required("Please select a bank!")
})
