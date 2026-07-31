import { Request, Response } from "express";
import { patientStepHandlers } from "./patient.onboarding.service";
import { doctorStepHandlers } from "./doctor.onboarding.service";
import { completeBasicProfile } from "./user.onboarding.service";
import { UserDocument } from "../../models/authModel";


const handleOnboardingStep = async (
  req: Request,
  res: Response,
): Promise<unknown> => {
  const getCurrentUser = async (req: Request): Promise<UserDocument> => {
    const user = req.dbUser as UserDocument | undefined;
    if (!user) {
      throw new Error("Authenticated user not found");
    }
    return user;
  };
  const user = await getCurrentUser(req);

  if (user.onboardingStatus === "completed") {
    return res.status(400).json({
      success: false,
      code: "ONBOARDING_ALREADY_COMPLETED",
      message: "Onboarding process has already been completed",
    });
  }

  const requestedStep = Number(req.body.step ?? user.onboardingStep);
  if(requestedStep !== user.onboardingStep) {
    return res.status(400).json({
      success: false,
      code: "ONBOARDING_STEP_MISMATCH",
      message: `Requested step ${requestedStep} does not match user's current onboarding step ${user.onboardingStep}`,
    });
  }

  if (user.onboardingStep === 0) {
    return completeBasicProfile(user, req.body);
  }

  const step = (user.onboardingStep || 1) as keyof typeof patientStepHandlers;

  if (user.role === "patient") {
    return patientStepHandlers[step](user, req.body);
  }

  if (user.role === "doctor") {
    return doctorStepHandlers[step as keyof typeof doctorStepHandlers](
      user,
      req.body,
    );
  }

  return res.status(400).json({
    success: false,
    code: "INVALID_USER_ROLE",
    message: "User role is not valid for onboarding",
  })
};

export { handleOnboardingStep };
