"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDoctorProfile = void 0;
const doctorModel_1 = require("../../../models/doctorModel");
const createDoctorProfile = async (user) => {
    return doctorModel_1.DoctorModel.create({
        userId: user._id,
        phoneNumber: "08012345678",
        licenseNumber: `LIC-${Date.now()}`,
        licensedSince: new Date("2018-01-01"),
        practiceType: "private",
        primarySpecialization: "Radiology",
        specializations: ["Radiology", "Dermatology"],
    });
};
exports.createDoctorProfile = createDoctorProfile;
//# sourceMappingURL=doctor.factory.js.map