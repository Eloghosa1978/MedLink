"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_middleware_1 = require("../middleware/auth.middleware");
const profile_controller_1 = require("../controllers/profile.controller");
const profileUpdateValidator_1 = require("../validators/profileUpdateValidator");
const router = (0, express_1.Router)();
const validate = (req, res, next) => {
  const errors = (0, express_validator_1.validationResult)(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  next();
};

const applyProfileUpdateValidator = (req, res, next) => {
  const user = req.dbUser;
  if (!user) {
    return res.status(401).json({ success: false });
  }
  const validators =
    user.role === "patient"
      ? profileUpdateValidator_1.patientProfileUpdateValidator
      : profileUpdateValidator_1.doctorProfileUpdateValidator;
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
  .get(auth_middleware_1.authMiddleware, profile_controller_1.profileController)
  .post(
    auth_middleware_1.authMiddleware,
    validate,
    profile_controller_1.profileController,
  )
  .patch(
    auth_middleware_1.authMiddleware,
    applyProfileUpdateValidator,
    validate,
    profile_controller_1.profileController,
  );
exports.default = router;
//# sourceMappingURL=profile.routes.js.map
