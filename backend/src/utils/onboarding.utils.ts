import { Model } from "mongoose";
import { UserDocument } from "../models/authModel";
import { advanceOnboardingStep } from "./advanceOnboardingStep";

export const updateProfileStep1 = async <T>(
  user: UserDocument,
  model: Model<T>,
  data: Object,
) => {
  const profile = await model.findOneAndUpdate(
    { userId: user._id },
    {
      $set: data,
      $setOnInsert: {
        userId: user._id,
      },
    },
    {
      new: true,
      upsert: true,
      runValidators: true,
    },
  );
  await advanceOnboardingStep(user);
  return profile;
};

export const updateProfileStep2 = async <T>(
  user: UserDocument,
  model: Model<T>,
  data: Object,
) => {
  const profile = await model.findOneAndUpdate(
    { userId: user._id },
    {
      $set: data,
    },
    {
      new: true,
      runValidators: true,
      upsert: true,
    },
  );
  await advanceOnboardingStep(user);
  return profile;
};
