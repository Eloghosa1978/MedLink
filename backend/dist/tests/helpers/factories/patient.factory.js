"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPatientProfile = void 0;
const patientModel_1 = require("../../../../src/models/patientModel");
const createPatientProfile = async (user) => {
    return patientModel_1.PatientModel.create({
        userId: user._id,
        bloodGroup: "O+",
        genotype: "AA",
        allergies: [],
        chronicConditions: [],
    });
};
exports.createPatientProfile = createPatientProfile;
//# sourceMappingURL=patient.factory.js.map