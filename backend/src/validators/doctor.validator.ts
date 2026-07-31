import {body} from "express-validator";
import { SPECIALIZATIONS } from "../constants/specializations";

// Step 1: Basic professional information validation
export const doctorStep1Validator = [
  body("licenseNumber")
    .trim()
    .notEmpty()
    .withMessage("License number is required")
    .isString()
    .withMessage("License number must be a string"),

  body("licensedSince")
    .notEmpty()
    .withMessage("Licensed since date is required")
    .isDate()
    .withMessage("Licensed since must be a valid date"),

  body("practiceType")
    .notEmpty()
    .withMessage("Practice type is required")
    .isIn(["hospital", "private", "both"])
    .withMessage("Practice type must be one of: hospital, private, or both"),
];

// Step 2: Specialization and experience validation
export const doctorStep2Validator = [
  body("primarySpecialization")
    .trim()
    .notEmpty()
    .withMessage("Primary specialization is required")
    .isIn(SPECIALIZATIONS)
    .withMessage(
      `Primary specialization must be one of: ${SPECIALIZATIONS.join(", ")}`,
    ),

  body("specializations")
    .notEmpty()
    .withMessage("Specializations are required")
    .isArray({ min: 1 })
    .withMessage("Specializations must be an array with at least one item"),

  body("specializations.*")
    .isIn(SPECIALIZATIONS)
    .withMessage(
      `Each specialization must be one of: ${SPECIALIZATIONS.join(", ")}`,
    ),

  body("qualifications")
    .optional()
    .isArray()
    .withMessage("Qualifications must be an array"),

  body("qualifications.*")
    .isString()
    .withMessage("Each qualification must be a string"),

  body("biography")
    .optional()
    .isString()
    .withMessage("Biography must be a string")
    .isLength({ max: 1000 })
    .withMessage("Biography must not exceed 1000 characters"),

  body("specialistSince")
    .optional()
    .isDate()
    .withMessage("Specialist since must be a valid date"),
];

// Step 3: Practice location and hospital (conditional based on practiceType)
export const doctorStep3Validator = [
  // Validate practiceLocation object structure
  body("practiceLocation")
    .optional()
    .isObject()
    .withMessage("Practice location must be an object"),

  body("practiceLocation.street")
    .optional()
    .isString()
    .withMessage("Street must be a string"),

  body("practiceLocation.city")
    .optional()
    .isString()
    .withMessage("City must be a string"),

  body("practiceLocation.state")
    .optional()
    .isString()
    .withMessage("State must be a string"),

  body("practiceLocation.country")
    .optional()
    .isString()
    .withMessage("Country must be a string"),

  body("hospitalId")
    .optional()
    .isString()
    .withMessage("Hospital ID must be a string"),

  // Custom validation: Check practiceType-dependent fields
  body().custom((value, { req }) => {
    const practiceType = req.body.practiceType;
    const hospitalId = req.body.hospitalId;
    const practiceLocation = req.body.practiceLocation;

    // If private practice: needs location, no hospital
    if (practiceType === "private") {
      if (!practiceLocation || !practiceLocation.city) {
        throw new Error(
          "Private practice requires practice location with at least a city"
        );
      }
      if (hospitalId) {
        throw new Error(
          "Private practice doctors cannot have a hospital ID assigned"
        );
      }
    }

    // If hospital or both: needs hospital ID
    if (practiceType === "hospital" || practiceType === "both") {
      if (!hospitalId) {
        throw new Error(
          `Practice type "${practiceType}" requires a hospital ID`
        );
      }
    }

    return true;
  }),
];

// Step 4: Consultation modes validation
export const doctorStep4Validator = [
  body("consultationModes")
    .notEmpty()
    .withMessage("Consultation modes are required")
    .isArray({ min: 1 })
    .withMessage("Consultation modes must be an array with at least one item"),
  body("consultationModes.*")
    .isIn(["physical", "virtual"])
    .withMessage(
      `Each consultation mode must be one of: physical, virtual`,
    ),
];