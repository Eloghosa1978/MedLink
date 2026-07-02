"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    uid: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        trim: true,
    },
    dateOfBirth: {
        type: Date,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
    },
    role: {
        type: String,
        enum: ["patient", "doctor"],
        required: true,
    },
    profileImage: {
        type: String,
        required: false,
    },
    onboardingStatus: {
        type: String,
        enum: ["pending", "completed", "skipped"],
        required: true,
    },
    onboardingStep: {
        type: Number,
        required: false,
        default: 0,
    },
    isActive: {
        type: Boolean,
        required: false,
    },
    lastLogin: {
        type: Date,
        required: false,
    },
}, {
    timestamps: true,
});
exports.UserModel = (0, mongoose_1.model)("User", userSchema);
//# sourceMappingURL=authModel.js.map