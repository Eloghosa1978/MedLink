import { Request, Response, NextFunction } from "express";
import {
  patientStep1Validator,
  patientStep2Validator,
  patientStep3Validator,
  patientStep4Validator,
} from "./patient.validator";
import {
  doctorStep1Validator,
  doctorStep2Validator,
  doctorStep3Validator,
  doctorStep4Validator,
} from "./doctor.validator";

export const applyOnboardingValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = req.dbUser;
  if (!user) {
    return res.status(401).json({
      success: false,
      code: "UNAUTHORIZED",
      message: "User not authenticated",
     });
  }
  if (user.onboardingStatus === "completed") return next();

  // Get current step from user object or default 1
  const currentStep = user.onboardingStep ?? 0;

  let validators: Array<(req: Request, res: Response, next: NextFunction) => void> = [];

  if (user.role === "patient") {
    switch (currentStep) {
      case 1:
        validators = patientStep1Validator;
        break;
      case 2:
        validators = patientStep2Validator;
        break;
      case 3:
        validators = patientStep3Validator;
        break;
      case 4:
        validators = patientStep4Validator;
        break;
    }
  } else if (user.role === "doctor") {
    switch (currentStep) {
      case 1:
        validators = doctorStep1Validator;
        break;
      case 2:
        validators = doctorStep2Validator;
        break;
      case 3:
        validators = doctorStep3Validator;
        break;
      case 4:
        validators = doctorStep4Validator;
        break;
    }
  }

  // Run validators sequentially
  let index = 0;
  const runNext = () => {
    if (index >= validators.length) return next();
    const validator = validators[index++];
    validator(req, res, runNext);
  };

  runNext();
};
