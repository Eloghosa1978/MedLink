import { body } from "express-validator";

export const patientProfileUpdateValidator = [
  body("phoneNumber")
    .optional()
    .bail()
    .isString()
    .withMessage("Phone number must be a string")
    .trim(),
  body("dateOfBirth")
    .optional()
    .isDate()
    .withMessage("Date of birth must be a valid date"),
  body("gender")
    .optional()
    .isIn(["male", "female"])
    .withMessage("Invalid gender value"),
  body("height")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Height must be a positive number"),
  body("weight")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Weight must be a positive number"),
  body("allergies")
    .optional()
    .isArray()
    .withMessage("Allergies must be an array"),
  body("chronicConditions")
    .optional()
    .isArray()
    .withMessage("Chronic conditions must be an array"),

  body().custom((value, { req }) => {
    const protectedFields = ["role", "uid", "email", "_id", "onboardingStatus"];
    const requestedFields = Object.keys(req.body);
    const hasProtected = requestedFields.some((field) =>
      protectedFields.includes(field),
    );
    const attemptedProtected = requestedFields.filter((field) =>
      protectedFields.includes(field),
    );
    if (hasProtected) {
      throw new Error(
        `Cannot update protected fields: ${attemptedProtected.join(", ")}`,
      );
      return true;
    }

    if (attemptedProtected.length > 0) {
      throw new Error(
        `Cannot update protected fields: ${attemptedProtected.join(", ")}`,
      );
    }
    return true;
  }),
];

export const doctorProfileUpdateValidator = [
  body("phoneNumber")
    .optional()
    .isString()
    .trim()
    .withMessage("Phone number must be a string"),
  body("biography")
    .optional()
    .isString()
    .withMessage("Biography must be a string"),
  body("consultationModes")
    .optional()
    .isArray()
    .withMessage("Consultation modes must be an array"),
  body("specializations")
    .optional()
    .isArray()
    .withMessage("Specializations must be an array"),
  body().custom((value, { req }) => {
    const protectedFields = ["role", "uid", "email", "_id", "onboardingStatus"];
    const requestedFields = Object.keys(req.body);
    const attemptedProtected = requestedFields.filter((field) =>
      protectedFields.includes(field),
    );

    if (attemptedProtected.length > 0) {
      throw new Error(
        `Cannot update protected fields: ${attemptedProtected.join(", ")}`,
      );
    }
    return true;
  }),
];
