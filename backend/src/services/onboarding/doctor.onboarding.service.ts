import { DoctorDocument, DoctorModel } from "../../models/doctorModel";
import { UserDocument } from "../../models/authModel";
import {
  updateProfileStep1,
  updateProfileStep2,
} from "../../utils/onboarding.utils";

// Define the data structure for step one of doctor onboarding
type DoctorStepOneData = {
  phoneNumber: string;
  LicenseNumber: string;
  licensedSince: Date;
  PracticeType: "hospital" | "private" | "both";
};

type DoctorStepTwoData = {
  PrimarySpecialization: string;
  Specializations: string[];
  Qualifications: string[];
  Biography: string;
  SpecialistSince: Date;
};
type DoctorStepThreeData = {
  practiceLocation?: {
    street?: string;
    city?: string;
  };
  hospitalId?: string;
};
type DoctorStepFourData = {
  consultationFee?: number;
  conultationModes?: "patient" | "virtual";
};

const handleDoctorStepOne = async (
  user: UserDocument,
  data: DoctorStepOneData,
) => {
  const doctor = await updateProfileStep1(user, DoctorModel, data);
  return doctor;
};

const handleDoctorStepTwo = async (
  user: UserDocument,
  data: DoctorStepTwoData,
) => {
  const doctor = await updateProfileStep2(user, DoctorModel, data);
  return doctor;
};
const handleDoctorStepThree = async (
  user: UserDocument,
  data: DoctorStepThreeData,
) => {
  const doctor = (await DoctorModel.findOne({ userId: user._id }).lean()) as {
    practiceType?: "hospital" | "private" | "both";
  } | null;
  if (doctor?.practiceType === "hospital") {
    // Enusres that hospitalId is provided for doctors with practiceType "hospital"
    if (!data.hospitalId) {
      throw new Error(
        "Hospital ID is required for doctors with practice type 'hospital'",
      );
    }
    return updateProfileStep2(user, DoctorModel, {
      hospitalId: data.hospitalId,
    });
  }
  if (doctor?.practiceType === "private") {
    // Enusres that practiceLocation is provided for doctors with practiceType "private"
    if (!data.practiceLocation) {
      throw new Error(
        "Practice location is required for doctors with practice type 'private'",
      );
    }
    return updateProfileStep2(user, DoctorModel, {
      practiceLocation: data.practiceLocation,
    });
  }
  if (doctor?.practiceType === "both") {
    // Enusres that both hospitalId and practiceLocation are provided for doctors with practiceType "both"
    if (!data.hospitalId) {
      throw new Error(
        "Hospital ID is required for doctors with practice type 'both'",
      );
    }
    if (!data.practiceLocation) {
      throw new Error(
        "Practice location is required for doctors with practice type 'both'",
      );
    }
    return updateProfileStep2(user, DoctorModel, {
      hospitalId: data.hospitalId,
      practiceLocation: data.practiceLocation,
    });
  }

  return updateProfileStep2(user, DoctorModel, {}); // If practiceType is not set, just update with an empty object
};
const handleDoctorStepFour = async (
  user: UserDocument,
  data: DoctorStepFourData,
) => {
  const doctor = await updateProfileStep2(user, DoctorModel, data);
  return doctor;
};

const doctorStepHandlers = {
  1: handleDoctorStepOne,
  2: handleDoctorStepTwo,
  3: handleDoctorStepThree,
  4: handleDoctorStepFour,
};

export { doctorStepHandlers };
