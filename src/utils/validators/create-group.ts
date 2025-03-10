import { CONTRIBUTION_FREQUENCY } from "@utils/constants";
import * as Yup from "yup";

export const createGroupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Group name must be at least 3 characters")
    .required("Group name is required"),

  startDate: Yup.date()
    .typeError("Invalid date format")
    .required("Start date is required"),

  groupDescription: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .notRequired(),

  contributionAmount: Yup.number()
    .typeError("Contribution amount must be a number")
    .positive("Amount must be greater than 0")
    .required("Contribution amount is required"),

  contributionFrequency: Yup.string()
    .oneOf(
      CONTRIBUTION_FREQUENCY.map((freq) => freq.value),
      "Invalid frequency",
    )
    .required("Contribution frequency is required"),

  numberOfdaysOrMembers: Yup.number()
    .typeError("Must be a number")
    .integer("Must be an integer")
    .positive("Must be greater than 0")
    .required("Number of days is required"),

  numberOfcircle: Yup.number()
    .typeError("Must be a number")
    .integer("Must be an integer")
    .positive("Must be greater than 0")
    .required("Number of cycles is required"),

  numberOfparticipantsAvailable: Yup.number()
    .typeError("Must be a number")
    .integer("Must be an integer")
    .positive("Must be greater than 0")
    .required("Number of contributors is required"),
});
