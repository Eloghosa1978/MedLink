"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientStep4Validator = exports.patientStep3Validator = exports.patientStep2Validator = exports.patientStep1Validator = void 0;
const express_validator_1 = require("express-validator");
exports.patientStep1Validator = [
    (0, express_validator_1.body)("phoneNumber").trim().notEmpty().withMessage("Phone number is required"),
    (0, express_validator_1.body)("dateOfBirth")
        .trim()
        .notEmpty()
        .withMessage("Date of birth is required")
        .isDate()
        .withMessage("Date of birth must be a valid date"),
    (0, express_validator_1.body)("gender").isIn(["male", "female"]).withMessage("Invalid gender value"),
];
exports.patientStep2Validator = [
    (0, express_validator_1.body)("bloodGroup")
        .isIn(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
        .withMessage("Invalid blood group value"),
    (0, express_validator_1.body)("genotype")
        .isIn(["AA", "AS", "SS"])
        .withMessage("Invalid genotype value"),
];
exports.patientStep3Validator = [
    (0, express_validator_1.body)("height")
        .trim()
        .optional()
        .withMessage("Height is required")
        .isFloat({ min: 0 })
        .withMessage("Height must be a positive number"),
    (0, express_validator_1.body)("weight")
        .trim()
        .optional()
        .withMessage("Weight is required")
        .isFloat({ min: 0 })
        .withMessage("Weight must be a positive number"),
    (0, express_validator_1.body)("allergies")
        .optional()
        .isArray()
        .withMessage("Allergies must be an array"),
    (0, express_validator_1.body)("allergies.*")
        .optional()
        .isString()
        .withMessage("Each allergy must be a string"),
    (0, express_validator_1.body)("chronicConditions")
        .optional()
        .isArray()
        .withMessage("Chronic conditions must be an array"),
    (0, express_validator_1.body)("chronicConditions.*")
        .optional()
        .isString()
        .withMessage("Each chronic condition must be a string"),
];
exports.patientStep4Validator = [
    (0, express_validator_1.body)("emergencyContact")
        .optional()
        .isObject()
        .withMessage("Emergency contact must be an object"),
];
//# sourceMappingURL=patient.validator.js.map