import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: ["true", "Email already exists"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: ["true", "Username already exists"],
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;