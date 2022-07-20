import mongoose from "mongoose";

const PermissionSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      trim: true,
      required: "Code is required",
      maxLength: 15,
    },
    description: {
      type: String,
      trim: true,
      required: "Description is required",
      maxLength: 20,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Permission", PermissionSchema);
