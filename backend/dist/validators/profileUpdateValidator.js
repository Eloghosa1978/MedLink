"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctorProfileUpdateValidator = exports.patientProfileUpdateValidator = void 0;
const express_validator_1 = require("express-validator");
exports.patientProfileUpdateValidator = [
    (0, express_validator_1.body)("phoneNumber")
        .optional()
        .bail()
        .isString()
        .withMessage("Phone number must be a string")
        .trim(),
    (0, express_validator_1.body)("dateOfBirth")
        .optional()
        .isDate()
        .withMessage("Date of birth must be a valid date"),
    (0, express_validator_1.body)("gender")
        .optional()
        .isIn(["male", "female"])
        .withMessage("Invalid gender value"),
    (0, express_validator_1.body)("height")
        .optional()
        .isFloat({ min: 0 })
        .withMessage("Height must be a positive number"),
    (0, express_validator_1.body)("weight")
        .optional()
        .isFloat({ min: 0 })
        .withMessage("Weight must be a positive number"),
    (0, express_validator_1.body)("allergies")
        .optional()
        .isArray()
        .withMessage("Allergies must be an array"),
    (0, express_validator_1.body)("chronicConditions")
        .optional()
        .isArray()
        .withMessage("Chronic conditions must be an array"),
    (0, express_validator_1.body)().custom((value, { req }) => {
        const protectedFields = ["role", "uid", "email", "_id", "onboardingStatus"];
        const requestedFields = Object.keys(req.body);
        const hasProtected = requestedFields.some((field) => protectedFields.includes(field));
        const attemptedProtected = requestedFields.filter((field) => protectedFields.includes(field));
        if (hasProtected) {
            throw new Error(`Cannot update protected fields: ${attemptedProtected.join(", ")}`);
            return true;
        }
        if (attemptedProtected.length > 0) {
            throw new Error(`Cannot update protected fields: ${attemptedProtected.join(", ")}`);
        }
        return true;
    }),
];
exports.doctorProfileUpdateValidator = [
    (0, express_validator_1.body)("phoneNumber")
        .optional()
        .isString()
        .trim()
        .withMessage("Phone number must be a string"),
    (0, express_validator_1.body)("biography")
        .optional()
        .isString()
        .withMessage("Biography must be a string"),
    (0, express_validator_1.body)("consultationModes")
        .optional()
        .isArray()
        .withMessage("Consultation modes must be an array"),
    (0, express_validator_1.body)("specializations")
        .optional()
        .isArray()
        .withMessage("Specializations must be an array"),
    (0, express_validator_1.body)().custom((value, { req }) => {
        const protectedFields = ["role", "uid", "email", "_id", "onboardingStatus"];
        const requestedFields = Object.keys(req.body);
        const attemptedProtected = requestedFields.filter((field) => protectedFields.includes(field));
        if (attemptedProtected.length > 0) {
            throw new Error(`Cannot update protected fields: ${attemptedProtected.join(", ")}`);
        }
        return true;
    }),
];
//# sourceMappingURL=profileUpdateValidator.js.map