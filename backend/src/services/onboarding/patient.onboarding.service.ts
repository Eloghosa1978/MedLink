import { PatientModel } from "../../models/patientModel";
import { UserDocument } from "../../models/authModel";
import {
  updateProfileStep1,
  updateProfileStep2,
} from "../../utils/onboarding.utils";

// Define the data structure for step one of patient onboarding
type PatientStepOneData = {
  phoneNumber: string;
  dateOfBirth: Date;
  gender: "male" | "female";
};

type PatientStepTwoData = {
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  genotype: "AA" | "AS" | "AC" | "SS" | "SC" | "CC";
};

type PatientStepThreeData = {
  height?: number;
  weight?: number;
  allergies?: string[];
  chronicConditions?: string[];
};

type PatientStepFourData = {
  address?: {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
  };

  emergencyContact?: {
    name?: string;
    relationship?: string;
    phoneNumber?: string;
  };
};

// Individual handlers for each onboarding step for patients
const handlePatientStepOne = async (
  user: UserDocument,
  data: PatientStepOneData,
) => {
  const patient = await updateProfileStep1(user, PatientModel, data);
  return patient;
};
const handlePatientStepTwo = async (
  user: UserDocument,
  data: PatientStepTwoData,
) => {
  const patient = await updateProfileStep2(user, PatientModel, data);
  return patient;
};
const handlePatientStepThree = async (
  user: UserDocument,
  data: PatientStepThreeData,
) => {
  const patient = await updateProfileStep2(user, PatientModel, data);
  return patient;
};
const handlePatientStepFour = async (
  user: UserDocument,
  data: PatientStepFourData,
) => {
  const patient = await updateProfileStep2(user, PatientModel, data);
  return patient;
};

// General handler for patient onboarding steps
const patientStepHandlers = {
  1: handlePatientStepOne,
  2: handlePatientStepTwo,
  3: handlePatientStepThree,
  4: handlePatientStepFour,
};

export { patientStepHandlers };
