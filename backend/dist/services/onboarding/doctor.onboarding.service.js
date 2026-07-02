"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctorStepHandlers = void 0;
const doctorModel_1 = require("../../models/doctorModel");
const onboarding_utils_1 = require("../../utils/onboarding.utils");
const handleDoctorStepOne = async (user, data) => {
    const doctor = await (0, onboarding_utils_1.updateProfileStep1)(user, doctorModel_1.DoctorModel, data);
    return doctor;
};
const handleDoctorStepTwo = async (user, data) => {
    const doctor = await (0, onboarding_utils_1.updateProfileStep2)(user, doctorModel_1.DoctorModel, data);
    return doctor;
};
const handleDoctorStepThree = async (user, data) => {
    const doctor = (await doctorModel_1.DoctorModel.findOne({ userId: user._id }).lean());
    if (doctor?.practiceType === "hospital") {
        // Enusres that hospitalId is provided for doctors with practiceType "hospital"
        if (!data.hospitalId) {
            throw new Error("Hospital ID is required for doctors with practice type 'hospital'");
        }
        return (0, onboarding_utils_1.updateProfileStep2)(user, doctorModel_1.DoctorModel, {
            hospitalId: data.hospitalId,
        });
    }
    if (doctor?.practiceType === "private") {
        // Enusres that practiceLocation is provided for doctors with practiceType "private"
        if (!data.practiceLocation) {
            throw new Error("Practice location is required for doctors with practice type 'private'");
        }
        return (0, onboarding_utils_1.updateProfileStep2)(user, doctorModel_1.DoctorModel, {
            practiceLocation: data.practiceLocation,
        });
    }
    if (doctor?.practiceType === "both") {
        // Enusres that both hospitalId and practiceLocation are provided for doctors with practiceType "both"
        if (!data.hospitalId) {
            throw new Error("Hospital ID is required for doctors with practice type 'both'");
        }
        if (!data.practiceLocation) {
            throw new Error("Practice location is required for doctors with practice type 'both'");
        }
        return (0, onboarding_utils_1.updateProfileStep2)(user, doctorModel_1.DoctorModel, {
            hospitalId: data.hospitalId,
            practiceLocation: data.practiceLocation,
        });
    }
    return (0, onboarding_utils_1.updateProfileStep2)(user, doctorModel_1.DoctorModel, {}); // If practiceType is not set, just update with an empty object
};
const handleDoctorStepFour = async (user, data) => {
    const doctor = await (0, onboarding_utils_1.updateProfileStep2)(user, doctorModel_1.DoctorModel, data);
    return doctor;
};
const doctorStepHandlers = {
    1: handleDoctorStepOne,
    2: handleDoctorStepTwo,
    3: handleDoctorStepThree,
    4: handleDoctorStepFour,
};
exports.doctorStepHandlers = doctorStepHandlers;
//# sourceMappingURL=doctor.onboarding.service.js.map