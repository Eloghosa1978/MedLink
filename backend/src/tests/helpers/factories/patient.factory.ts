import { PatientModel } from "../../../../src/models/patientModel";
import { UserDocument } from "../../../../src/models/authModel";

export const createPatientProfile = async (user: UserDocument) => {
  return PatientModel.create({
    userId: user._id,
    bloodGroup: "O+",
    genotype: "AA",
    allergies: [],
    chronicConditions: [],
  });
};

