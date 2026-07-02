"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientModel = void 0;
const mongoose_1 = require("mongoose");
const patientSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
    },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    genotype: {
        type: String,
        enum: ["AA", "AS", "AC", "SS", "SC", "CC"],
    },
    height: Number,
    weight: Number,
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
    },
    emergencyContact: {
        name: String,
        relationship: String,
        phoneNumber: String,
    },
    allergies: {
        type: [String],
        default: [],
    },
    chronicConditions: {
        type: [String],
        default: [],
    },
}, {
    timestamps: true,
});
exports.PatientModel = (0, mongoose_1.model)("Patient", patientSchema);
//# sourceMappingURL=patientModel.js.map