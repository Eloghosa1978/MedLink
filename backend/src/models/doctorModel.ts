import { Schema, model, InferSchemaType, HydratedDocument } from "mongoose";
import { SPECIALIZATIONS } from "../constants/specializations";

const doctorSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    primarySpecialization: {
      type: String,
      enum: SPECIALIZATIONS,
    },
    specializations: {
      type: [
        {
          type: String,
          enum: SPECIALIZATIONS,
        },
      ],
    },
    licenseNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    licensedSince: {
      type: Date,
      required: true,
    },
    specialistSince: {
      type: Date,
    },
    qualifications: {
      type: [String],
      default: [],
    },
    biography: {
      type: String,
      maxlength: 1000,
      trim: true,
    },
    practiceType: {
      type: String,
      enum: ["hospital", "private", "both"],
      required: true,
    },
    hospitalId: {
      type: Schema.Types.ObjectId,
      ref: "Hospital",
      default: null,
    },
    // For independent doctors
    practiceLocation: {
      street: String,
      city: String,
      state: String,
      country: String,
    },
    consultationModes: {
      type: [
        {
          type: String,
          enum: ["physical", "virtual"],
        },
      ],
      default: ["physical"],
    },
    verificationStatus: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true },
);

export type Doctor = InferSchemaType<typeof doctorSchema>;
export type DoctorDocument = HydratedDocument<Doctor>;

export const DoctorModel = model<DoctorDocument>("Doctor", doctorSchema);
