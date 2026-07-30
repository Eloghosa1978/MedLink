import { decode } from "node:punycode";
import { findUserById } from "../services/auth.service";
import { NextFunction, Request, Response } from "express";

export const loadUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const decodedId = req.user?.uid;
    if (!decodedId) {
      return res.status(401).json({
        success: false,
        code: "MISSING_AUTH_TOKEN_OR_UID",
        message: "Missing auth token or uid",
      });
    }

    const dbUser = await findUserById(decodedId);
    if (!dbUser) {
      return res.status(401).json({
        success: false,
        code: "USER_NOT_FOUND",
        message: "User not found",
      });
    }

    req.dbUser = dbUser;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      code: "USER_LOAD_ERROR",
      message: "Could not get user. An unexpected error occured",
      error: `Error message: ${error}`,
    });
  }
};
