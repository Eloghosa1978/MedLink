import { Request, Response } from "express";

import { UserModel } from "../models/authModel";
import { findUserById, createUser } from "../services/auth.service";

const getCurrentUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const uId = req.user?.uid;

    if (!uId) {
      res.status(401).json({
        success: false,
        message: "No user id found",
      });
      return;
    }

    const user = await findUserById(uId)

    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("GetCurrent User Error: ", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve user" });
  }
};

const syncUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const uId = req.user?.uid;
    const email = req.user?.email;

    if (!uId || !email) {
      res.status(401).json({
        success: false,
        message: "No user id found",
      });
      return;
    }

    const existingUser = await findUserById(uId)

    if (existingUser) {
      res.status(200).json({
        success: true,
        message: "User already exists",
        user: existingUser,
      });
      return;
    }

    const { firstName, lastName, role } = req.body;

    const user = await createUser({
      uId,
      email,
      firstName,
      lastName,
      role,
    });
    res.status(201).json({
      success: true,
      message: "User synchronized successfully",
      user,
    });
  } catch (error) {
    console.error("Sync User Error: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to synchronize user",
    });
  }
};

export { getCurrentUser, syncUser };
