import { body } from "express-validator";

export const patientStep1Validator = [
  body("phoneNumber").trim().notEmpty().withMessage("Phone number is required"),
  body("dateOfBirth")
    .trim()
    .notEmpty()
    .withMessage("Date of birth is required")
    .isDate()
    .withMessage("Date of birth must be a valid date"),
  body("gender").isIn(["male", "female"]).withMessage("Invalid gender value"),
];
export const patientStep2Validator = [
  body("bloodGroup")
    .isIn(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    .withMessage("Invalid blood group value"),
  body("genotype")
    .isIn(["AA", "AS", "SS"])
    .withMessage("Invalid genotype value"),
];
export const patientStep3Validator = [
  body("height")
    .trim()
    .optional()
    .withMessage("Height is required")
    .isFloat({ min: 0 })
    .withMessage("Height must be a positive number"),
  body("weight")
    .trim()
    .optional()
    .withMessage("Weight is required")
    .isFloat({ min: 0 })
    .withMessage("Weight must be a positive number"),
  body("allergies")
    .optional()
    .isArray()
    .withMessage("Allergies must be an array"),
  body("allergies.*")
    .optional()
    .isString()
    .withMessage("Each allergy must be a string"),
  body("chronicConditions")
    .optional()
    .isArray()
    .withMessage("Chronic conditions must be an array"),
  body("chronicConditions.*")
    .optional()
    .isString()
    .withMessage("Each chronic condition must be a string"),
];

export const patientStep4Validator = [
  body("emergencyContact")
  .optional()
  .isObject()
  .withMessage("Emergency contact must be an object"),
]