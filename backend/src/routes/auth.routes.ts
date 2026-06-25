import { Router, Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";
import { authMiddleware } from "../middleware/auth.middleware";
import { syncUser, getCurrentUser } from "../controllers/authController";

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

router.post(
  "/sync-user",
  authMiddleware,
  [
    body("firstName").optional().trim().escape(),
    body("lastName").optional().trim().escape(),
    body("role").optional().trim().escape(),
  ],
  validate,
  syncUser,
);

router.get("/me", authMiddleware, getCurrentUser);

export default router;
