import { UserModel } from "../models/authModel";

export const findUserById = async (uId: string) => {
  return UserModel.findOne({ uId });
};

export const createUser = async ({
  uId,
  email,
  firstName,
  lastName,
  role,
}: {
  uId: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "patient" | "doctor" | undefined;
}) => {
  return UserModel.create({
    uId,
    email,
    firstName,
    lastName,
    role,
  });
};
