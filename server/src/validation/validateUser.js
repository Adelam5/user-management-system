import * as Yup from "yup";
import { asyncHandler } from "../middleware";

const userSchema = Yup.object({
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
  username: Yup.string()
    .trim()
    .required("Username is required")
    .min(2, "Username must be at least 2 characters")
    .max(25, "Username must be less than 25 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Must be valid email"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password has to be at least 6 characters long")
    .required("Password is required"),
  status: Yup.mixed().oneOf(
    ["online", "offline", "away"],
    "Status must be: online, offline or away"
  ),
});

const userEditSchema = Yup.object({
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

export const validateUser = asyncHandler(async (req, res, next) => {
  await userSchema.validate(req.body, { abortEarly: false });
  next();
});

export const validateEditUser = asyncHandler(async (req, res, next) => {
  await userEditSchema.validate(req.body, { abortEarly: false });
  next();
});
