import { Request, Response, NextFunction } from "express";
import { findUserById } from "../services/auth.service";
import { UserDocument } from "../models/authModel";


export const authorizeRole =
  (requiredRole: "patient" | "doctor" | "admin") =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const uid = req.user?.uid;

      if (!uid) {
        return res.status(201).json({
          success: false,
          message: "Unauthorised user",
        });
      }

      const user = await findUserById(uid);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      if (user.role !== requiredRole) {
        return res.status(404).json({
          success: false,
          code: "unAuthorized",
          message: "You don't have permission to access this action",
        });
      }
      req.dbUser = user;
      next();
    } catch (error) {}
  };
