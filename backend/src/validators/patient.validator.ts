import { body } from "express-validator";

export const patientStep1Validator = [
  body("bloodGroup")
    .isIn(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    .withMessage("Invalid blood group value"),
  body("genotype")
    .isIn(["AA", "AS", "SS"])
    .withMessage("Invalid genotype value"),
];
export const patientStep2Validator = [
  body("height")
    .trim()
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Height must be a positive number"),
  body("weight")
    .trim()
    .optional()

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
export const patientStep3Validator = [
  body("address")
    .optional({ nullable: true })
    .isObject()
    .withMessage("Address must be an object"),
];

export const patientStep4Validator = [
  body("emergencyContact")
    .optional({ nullable: true })
    .isObject()
    .withMessage("Emergency contact must be an object"),
];
