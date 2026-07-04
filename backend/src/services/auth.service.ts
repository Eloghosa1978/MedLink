import { UserModel } from "../models/authModel";
import { Types } from "mongoose";

export const findUserById = async (uid: string) => {
  return await UserModel.findOne({ uid });
};

export const createUser = async ({
  uid,
  email,
  firstName,
  lastName,
  role,
}: {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "patient" | "doctor" | undefined;
}) => {
  return UserModel.create({
    uid,
    email,
    firstName,
    lastName,
    role,
  });
};
