"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeBasicProfile = void 0;
const authModel_1 = require("../../models/authModel");
const completeBasicProfile = async (user, data) => {
    const updatedUser = await authModel_1.UserModel.findByIdAndUpdate(user._id, {
        $set: data,
    }, {
        new: true,
        runValidators: true,
    });
    if (!updatedUser) {
        throw new Error("User not found.");
    }
    updatedUser.onboardingStep = 1;
    await updatedUser.save();
    return updatedUser;
};
exports.completeBasicProfile = completeBasicProfile;
//# sourceMappingURL=user.onboarding.service.js.map