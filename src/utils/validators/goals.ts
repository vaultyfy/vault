import * as Yup from "yup";

export const createGoalSchema = Yup.object().shape({
  name: Yup.string().required("Goal name cannot be blank"),
  target: Yup.number().required("Please enter a target for this goal"),
  duration: Yup.string().required("Duration is required"),
});
