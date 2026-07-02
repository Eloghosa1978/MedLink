"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfileStep2 = exports.updateProfileStep1 = void 0;
const advanceOnboardingStep_1 = require("./advanceOnboardingStep");
const updateProfileStep1 = async (user, model, data) => {
    const profile = await model.findOneAndUpdate({ userId: user._id }, {
        $set: data,
        $setOnInsert: {
            userId: user._id,
        },
    }, {
        new: true,
        upsert: true,
        runValidators: true,
    });
    await (0, advanceOnboardingStep_1.advanceOnboardingStep)(user);
    return profile;
};
exports.updateProfileStep1 = updateProfileStep1;
const updateProfileStep2 = async (user, model, data) => {
    const profile = await model.findByIdAndUpdate({
        $set: data,
    }, {
        new: true,
    });
    (0, advanceOnboardingStep_1.advanceOnboardingStep)(user);
    return profile;
};
exports.updateProfileStep2 = updateProfileStep2;
//# sourceMappingURL=onboarding.utils.js.map