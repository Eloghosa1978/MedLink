import { UserDocument, UserModel } from "../../models/authModel";

type UserOnboardingData = {
  phoneNumber: string;
  dateOfBirth: Date;
  gender: "male" | "female";
  profileImage: string;
};

export const completeBasicProfile = async (
  user: UserDocument,
  data: UserOnboardingData,
) => {
  const updatedUser = await UserModel.findByIdAndUpdate(
    user._id,
    {
      $set: data,
    },
    {
      new: true,
      runValidators: true,
    },
  );

  if (!updatedUser) {
    throw new Error("User not found.");
  }

  updatedUser.onboardingStep = 1;

  await updatedUser.save();

  return updatedUser;
};
