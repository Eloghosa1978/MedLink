import { getAdminAuth } from "../config/firebase-admin";
import { Request, Response, NextFunction } from "express";

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
    const decodeToken = await adminAuth.verifyIdToken(idToken);
    req.user = decodeToken;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid auth token" });
  }
};
