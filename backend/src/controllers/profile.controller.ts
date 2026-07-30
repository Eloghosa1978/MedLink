import { Request, Response } from "express";
import { updateProfileService } from "../services/profile/updateProfile.service";
import { PatientModel } from "../models/patientModel";
import { DoctorModel } from "../models/doctorModel";
import { handleOnboardingStep } from "../services/onboarding/onboarding.service";
import { UserDocument } from "../models/authModel";

const getProfile = async (req: Request, res: Response) => {
  const user = req.dbUser as UserDocument | undefined;

  if (!user) {
    return res.status(401).json({
      success: false,
      code: "UNAUTHORIZED",
      message: "User not authenticated",
    });
  }

  let profile;
  if (user.role === "patient") {
    profile = await PatientModel.findOne({ userId: user._id });
  } else {
    profile = await DoctorModel.findOne({ userId: user._id });
  }

  // If profile doesn't exist and the user has completed onboarding, return an error
  if (!profile && user.onboardingStatus === "completed") {
    res.status(500).json({
      success: false,
      code: "PROFILE_INCONSISTENT",
      message: "User has completed onboarding but profile data is missing.",
    });
    return;
  }

  if (!profile) {
    return res.status(404).json({
      success: false,
      code: "PROFILE_NOT_FOUND",
      message: "Profile not found",
    });
  }

  return res.status(200).json({
    success: true,
    code: "PROFILE_FETCHED",
    message: "Profile fetched successfully",
    data: {
      user,
      profile: profile ?? null
    },
  });
};

const updateProfile = async (req: Request, res: Response) => {
  const user = req.dbUser as UserDocument | undefined;

  if (!user) {
    return res.status(401).json({
      success: false,
      code: "UNAUTHORIZED",
      message: "User not authenticated",
    });
  }

  const updatedProfile = await updateProfileService(user, req.body);

  if (!updatedProfile.profile && user.onboardingStatus === "completed") {
    res.status(500).json({
      success: false,
      code: "PROFILE_INCONSISTENT",
      message: "User has completed onboarding but profile data is missing.",
    });
    return;
  }
  if (!updatedProfile.profile) {
    return res.status(404).json({
      success: false,
      code: "PROFILE_NOT_FOUND",
      message: "Profile not found",
    });
  }

  return res.status(200).json({
    success: true,
    code: "PROFILE_UPDATED",
    message: "Profile updated successfully",
    data: updatedProfile,
  });
};
const onboardingController = async (req: Request, res: Response) => {
  const result = await handleOnboardingStep(req, res);
  if (res.headersSent) return;
  if (result !== undefined && result !== null) {
    return res.status(200).json({
      success: true,
      code: "ONBOARDING_STEP_COMPLETED",
      message: "Onboarding step completed successfully",
      data: result,
    });

  }
  return res.status(400).json({
    success: false,
    code: "ONBOARDING_STEP_FAILED",
    message: "Failed to complete onboarding step",
  });
};

export const profileController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  switch (req.method) {
    case "POST":
      await onboardingController(req, res);
      break;
    case "GET":
      await getProfile(req, res);
      break;
    case "PATCH":
      await updateProfile(req, res);
      break;
    default:
      res.status(405).json({
        success: false,
        message: "Method not allowed",
      });
  }
};
