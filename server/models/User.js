import { Schema, model } from "mongoose";
import { hash } from "bcryptjs";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    car: [{ type: Schema.Types.ObjectId, ref: "Cars" }],
  },
  { timestamps: true }
);

const user = model("Users", UserSchema);
export default user;
