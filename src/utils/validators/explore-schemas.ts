import * as Yup from "yup";

export const exploreFilterSchema = Yup.object().shape({
  members: Yup.string()
    .matches(/^\d+$/, "Members must be digits only")
    .min(1, "Members must be at least 1 digits long")
    .notRequired(),

  startDate: Yup.date().typeError("Invalid date format").notRequired(),

  payout: Yup.string()
    .matches(/^\d+$/, "Payout must be digits only")
    .min(3, "Payout must be at least 3 digits long")
    .notRequired(),

  interval: Yup.string()
    .oneOf(
      ["Daily", "Weekly", "Monthly", "Yearly", "Three_Months", "Six_Months"],
      "valid intervals are Daily, Weekly, Monthly, Yearly"
    )
    .notRequired(),
});
