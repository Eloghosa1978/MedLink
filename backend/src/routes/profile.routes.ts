import { Router, Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { authMiddleware } from "../middleware/auth.middleware";
import { loadUserMiddleware } from "../middleware/loadUser.middleware";
import { profileController } from "../controllers/profile.controller";
import {
  patientProfileUpdateValidator,
  doctorProfileUpdateValidator,
} from "../validators/profileUpdateValidator";
import {applyOnboardingValidator} from "../validators/onboarding.validator";
const router = Router();

const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  next();
};

// ✅ CORRECT - execute validators in sequence
const applyProfileUpdateValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = req.dbUser;
  if (!user) {
    return res.status(401).json({ success: false });
  }

  const validators =
    user.role === "patient"
      ? patientProfileUpdateValidator
      : doctorProfileUpdateValidator;

  // Run validators sequentially
  let index = 0;
  const runNext = () => {
    if (index >= validators.length) return next();
    validators[index++](req, res, runNext);
  };
  runNext();
};

// Routes

router
  .route("/")
  .get(authMiddleware, loadUserMiddleware, profileController)
  .patch(
    authMiddleware,
    loadUserMiddleware,
    applyProfileUpdateValidator,
    validate,
    profileController,
  );
router.post(
  "/onboarding",
  authMiddleware,
  loadUserMiddleware,
  applyOnboardingValidator,
  validate,
  profileController,
);
export default router;
