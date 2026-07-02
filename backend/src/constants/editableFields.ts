const USER_FIELDS = [
  "firstName",
  "lastName",
  "phoneNumber",
  "profileImage",
  "dateOfBirth",
  "gender",
];
const PATIENT_FIELDS = [
  "bloodGroup",
  "genotype",
  "height",
  "weight",
  "address",
  "emergencyContact",
  "allergies",
  "chronicConditions",
];

const DOCTOR_FIELDS = [
  "primarySpecialization",
  "specializations",
  "qualifications",
  "biography",
  "practiceType",
  "hospitalId",
  "practiceLocation",
  "consultationModes",
];

export const EDITABLE_FIELDS = {
  userField: USER_FIELDS,
  patient: PATIENT_FIELDS,
  doctor: DOCTOR_FIELDS,
} as const;
