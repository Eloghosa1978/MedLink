import { Schema, model, InferSchemaType } from "mongoose";

const hospitalSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    address: {
      street: String,
      city: String,
      state: String,
      country: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },

    logo: String,

    phoneNumber: String,

    email: String,

    website: String,
  },
  {
    timestamps: true,
    strict: true,
  },
);
export type Hospital = InferSchemaType<typeof hospitalSchema>;
export const HospitalModel = model<Hospital>("Hospital", hospitalSchema);
