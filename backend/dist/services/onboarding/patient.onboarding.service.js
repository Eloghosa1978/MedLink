"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientStepHandlers = void 0;
const patientModel_1 = require("../../models/patientModel");
const onboarding_utils_1 = require("../../utils/onboarding.utils");
// Individual handlers for each onboarding step for patients
const handlePatientStepOne = async (user, data) => {
    const patient = await (0, onboarding_utils_1.updateProfileStep1)(user, patientModel_1.PatientModel, data);
    return patient;
};
const handlePatientStepTwo = async (user, data) => {
    const patient = await (0, onboarding_utils_1.updateProfileStep2)(user, patientModel_1.PatientModel, data);
    return patient;
};
const handlePatientStepThree = async (user, data) => {
    const patient = await (0, onboarding_utils_1.updateProfileStep2)(user, patientModel_1.PatientModel, data);
    return patient;
};
const handlePatientStepFour = async (user, data) => {
    const patient = await (0, onboarding_utils_1.updateProfileStep2)(user, patientModel_1.PatientModel, data);
    return patient;
};
// General handler for patient onboarding steps
const patientStepHandlers = {
    1: handlePatientStepOne,
    2: handlePatientStepTwo,
    3: handlePatientStepThree,
    4: handlePatientStepFour,
};
exports.patientStepHandlers = patientStepHandlers;
//# sourceMappingURL=patient.onboarding.service.js.map