"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EDITABLE_FIELDS = void 0;
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
exports.EDITABLE_FIELDS = {
    userField: USER_FIELDS,
    patient: PATIENT_FIELDS,
    doctor: DOCTOR_FIELDS,
};
//# sourceMappingURL=editableFields.js.map