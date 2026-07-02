"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorModel = void 0;
const mongoose_1 = require("mongoose");
const specializations_1 = require("../constants/specializations");
const doctorSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        trim: true,
    },
    primarySpecialization: {
        type: String,
        enum: specializations_1.SPECIALIZATIONS,
    },
    specializations: {
        type: [
            {
                type: String,
                enum: specializations_1.SPECIALIZATIONS,
            },
        ],
    },
    licenseNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    licensedSince: {
        type: Date,
        required: true,
    },
    specialistSince: {
        type: Date,
    },
    qualifications: {
        type: [String],
        default: [],
    },
    biography: {
        type: String,
        maxlength: 1000,
        trim: true,
    },
    practiceType: {
        type: String,
        enum: ["hospital", "private", "both"],
        required: true,
    },
    hospitalId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Hospital",
        default: null,
    },
    // For independent doctors
    practiceLocation: {
        street: String,
        city: String,
        state: String,
        country: String,
    },
    consultationModes: {
        type: [
            {
                type: String,
                enum: ["physical", "virtual"],
            },
        ],
        default: ["physical"],
    },
    verificationStatus: {
        type: String,
        enum: ["pending", "verified", "rejected"],
        default: "pending",
    },
}, { timestamps: true });
exports.DoctorModel = (0, mongoose_1.model)("Doctor", doctorSchema);
//# sourceMappingURL=doctorModel.js.map