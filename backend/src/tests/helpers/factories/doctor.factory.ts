import { DoctorModel } from "../../../models/doctorModel";
import { UserDocument } from "../../../models/authModel";

export const createDoctorProfile = async (user: UserDocument) => {
  return DoctorModel.create({
    userId: user._id,
    phoneNumber: "08012345678",
    licenseNumber: `LIC-${Date.now()}`,
    licensedSince: new Date("2018-01-01"),
    practiceType: "private",
    primarySpecialization: "Radiology",
    specializations: ["Radiology", "Dermatology"],
  });
};
