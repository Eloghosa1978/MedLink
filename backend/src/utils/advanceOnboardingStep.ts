// advance.onboardingStep( user)

const advanceOnboardingStep = async (user: any) => {
  const nextStep = (user.onboardingStep ?? 0) + 1;
  user.onboardingStep = nextStep;

  if (nextStep > 4) {
    user.onboardingStatus = "completed";
  }

  if (typeof user.save === "function") {
    await user.save();
  }

  return user;
};

export { advanceOnboardingStep };
