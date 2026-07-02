"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const authModel_1 = require("../../../models/authModel");
const createUser = async (overrides = {}) => {
    const user = await authModel_1.UserModel.create({
        uid: overrides.uid ?? crypto.randomUUID(),
        email: overrides.email ?? `user-${Date.now()}-${Math.random()}@test.com`,
        firstName: overrides.firstName ?? "John",
        lastName: overrides.lastName ?? "Doe",
        role: overrides.role ?? "patient",
        phoneNumber: overrides.phoneNumber ?? "08012345678",
        gender: "male",
        onboardingStatus: overrides.onboardingStatus ?? "pending",
        onboardingStep: overrides.onboardingStep ?? 0,
        isActive: true,
    });
    return user;
};
exports.createUser = createUser;
//# sourceMappingURL=user.factory.js.map