import { Request, Response, NextFunction } from "express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Pretend the user is already authenticated
  req.user = {
    uid: "test-user-id",
    email: "test@example.com",
  };

  next();
};
