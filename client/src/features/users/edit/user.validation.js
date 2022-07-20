import * as Yup from "yup";

export const userEditSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(25, "First name must be less than 25 characters"),
  lastName: Yup.string()
    .trim()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(35, "Last name must be less than 35 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Must be valid email"),
  status: Yup.mixed().oneOf(
    ["online", "offline", "away"],
    "Status must be: online, offline or away"
  ),
});
