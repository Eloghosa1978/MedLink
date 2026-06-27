import { Schema, model, InferSchemaType } from "mongoose";

const userSchema = new Schema(
  {
    uId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["patient", "doctor"],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

type User = InferSchemaType<typeof userSchema>;

export const UserModel = model<User>("User", userSchema);


