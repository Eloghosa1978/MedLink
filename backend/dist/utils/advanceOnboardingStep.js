"use strict";
// advance.onboardingStep( user)
Object.defineProperty(exports, "__esModule", { value: true });
exports.advanceOnboardingStep = void 0;
const advanceOnboardingStep = async (user) => {
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
exports.advanceOnboardingStep = advanceOnboardingStep;
//# sourceMappingURL=advanceOnboardingStep.js.map