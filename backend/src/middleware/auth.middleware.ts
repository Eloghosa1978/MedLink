import { getAdminAuth } from "../config/firebase-admin";
import { Request, Response, NextFunction } from "express";
import { findUserById } from "../services/auth.service";

const adminAuth = getAdminAuth();

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Missing auth token",
    });
  }
  const idToken = authHeader.split(" ")[1];

  try {
    const decodedToken = await adminAuth.verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid auth token" });
  }
};
