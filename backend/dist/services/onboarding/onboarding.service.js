"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleOnboardingStep = void 0;
const patient_onboarding_service_1 = require("./patient.onboarding.service");
const doctor_onboarding_service_1 = require("./doctor.onboarding.service");
const user_onboarding_service_1 = require("./user.onboarding.service");
const handleOnboardingStep = async (req, res) => {
    const getCurrentUser = async (req) => {
        const user = req.dbUser;
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
    if (user.onboardingStep === 0) {
        return (0, user_onboarding_service_1.completeBasicProfile)(user, req.body);
    }
    const step = (user.onboardingStep || 1);
    if (user.role === "patient") {
        return patient_onboarding_service_1.patientStepHandlers[step](user, req.body);
    }
    if (user.role === "doctor") {
        return doctor_onboarding_service_1.doctorStepHandlers[step](user, req.body);
    }
    return res.status(400).json({
        success: false,
        code: "INVALID_USER_ROLE",
        message: "User role is not valid for onboarding",
    });
};
exports.handleOnboardingStep = handleOnboardingStep;
//# sourceMappingURL=onboarding.service.js.map