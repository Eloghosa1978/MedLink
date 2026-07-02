"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileController = void 0;
const updateProfile_service_1 = require("../services/profile/updateProfile.service");
const patientModel_1 = require("../models/patientModel");
const doctorModel_1 = require("../models/doctorModel");
const onboarding_service_1 = require("../services/onboarding/onboarding.service");
const getProfile = async (req, res) => {
    const user = req.dbUser;
    if (!user) {
        return res.status(401).json({
            success: false,
            code: "UNAUTHORIZED",
            message: "User not authenticated",
        });
    }
    let profile;
    if (user.role === "patient") {
        profile = await patientModel_1.PatientModel.findOne({ userId: user._id });
    }
    else {
        profile = await doctorModel_1.DoctorModel.findOne({ userId: user._id });
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
            profile,
        },
    });
};
const updateProfile = async (req, res) => {
    const user = req.dbUser;
    if (!user) {
        return res.status(401).json({
            success: false,
            code: "UNAUTHORIZED",
            message: "User not authenticated",
        });
    }
    const updatedProfile = await (0, updateProfile_service_1.updateProfileService)(user, req.body);
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
const onboardingController = async (req, res) => {
    const result = await (0, onboarding_service_1.handleOnboardingStep)(req, res);
    if (res.headersSent)
        return;
    if (result !== undefined && result !== null) {
        return res.status(200).json({
            success: true,
            code: "ONBOARDING_STEP_COMPLETED",
            message: "Onboarding step completed successfully",
            data: result,
        });
        return res.status(400).json({
            success: false,
            code: "ONBOARDING_STEP_FAILED",
            message: "Failed to complete onboarding step",
        });
    }
};
const profileController = async (req, res) => {
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
exports.profileController = profileController;
//# sourceMappingURL=profile.controller.js.map