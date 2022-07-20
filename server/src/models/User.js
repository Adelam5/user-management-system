import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: "First name is required",
      minLength: [2, "First name must be at least 2 characters"],
      maxLength: [25, "First name must be less then 25 characters"],
    },
    lastName: {
      type: String,
      trim: true,
      required: "Last name is required",
      minLength: [2, "Last name must be at least 2 characters"],
      maxLength: [35, "Last name must be less then 35 characters"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      lowercase: true,
      unique: true,
      minLength: [2, "Username must be at least 2 characters"],
      maxLength: [25, "Username must be less then 25 characters"],
      immutable: [true, "Username can not be updated"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [6, "Password must be at least 6 characters"],
      select: false,
      immutable: true,
      select: false,
    },
    status: {
      type: String,
      enum: {
        values: ["online", "offline", "away"],
        message: "Status must be online, offline or away",
      },
      default: "offline",
    },
    permissions: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Permission",
      },
    ],
  },
  { timestamps: true }
);

// Encrypt password using bcrypt
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export default mongoose.model("User", UserSchema);
