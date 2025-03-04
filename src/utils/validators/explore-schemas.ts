import * as Yup from "yup";

export const exploreFilterSchema = Yup.object().shape({
  members: Yup.string()
    .matches(/^\d+$/, "Members must be digits only")
    .min(1, "Members must be at least 1 digits long")
    .required("Members are required"),

  startDate: Yup.date()
    .typeError("Invalid date format")
    .required("Start date is required"),

  payout: Yup.string()
    .matches(/^\d+$/, "Payout must be digits only")
    .min(3, "Payout must be at least 3 digits long")
    .notRequired(),

  interval: Yup.string()
    .oneOf(
      ["daily", "weekly", "monthly", "yearly", "annually"],
      "valid intervals are daily, weekly, monthly",
    )
    .required("Interval is required"),
});
