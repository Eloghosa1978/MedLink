import { decode } from "node:punycode";
import { findUserById } from "../services/auth.service";
import { NextFunction, Request, Response } from "express";

export const loadUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const decodedToken = req.user;

    const dbUser = await findUserById(decodedToken);
    if (!dbUser) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    req.dbUser = dbUser;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Could not get user. An unexpected error occured",
      error: `Error message: ${error}`,
    });
  }
};
