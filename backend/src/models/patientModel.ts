import {
  Schema,
  model,
  InferSchemaType,
  Types,
  HydratedDocument,
} from "mongoose";

const patientSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    genotype: {
      type: String,
      enum: ["AA", "AS", "AC", "SS", "SC", "CC"],
    },
    height: Number,
    weight: Number,
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
    },
    emergencyContact: {
      name: String,
      relationship: String,
      phoneNumber: String,
    },
    allergies: {
      type: [String],
      default: [],
    },
    chronicConditions: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

export type Patient = InferSchemaType<typeof patientSchema>;
export type PatientDocument = HydratedDocument<Patient>;
export const PatientModel = model<PatientDocument>("Patient", patientSchema);
