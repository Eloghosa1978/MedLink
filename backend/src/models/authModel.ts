import { Schema, model, InferSchemaType, HydratedDocument } from "mongoose";

const userSchema = new Schema(
  {
    uid: {
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
    phoneNumber: {
      type: String,
      trim: true,
    },
    dateOfBirth: {
      type: Date,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    role: {
      type: String,
      enum: ["patient", "doctor"],
      required: true,
    },
    profileImage: {
      type: String,
      required: false,
    },
    onboardingStatus: {
      type: String,
      enum: ["pending", "completed", "skipped"],
      default: "pending",
    },
    onboardingStep: {
      type: Number,
      required: false,
      default: 0,
    },
    isActive: {
      type: Boolean,
      required: false,
    },
    lastLogin: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

export type User = InferSchemaType<typeof userSchema>;
export type UserDocument = HydratedDocument<User>;

export const UserModel = model<User>("User", userSchema);
