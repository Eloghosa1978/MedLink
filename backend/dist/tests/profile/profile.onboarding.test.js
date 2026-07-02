"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const mockFirebase_1 = require("../helpers/mockFirebase");
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
const user_factory_1 = require("../helpers/factories/user.factory");
(0, vitest_1.describe)("POST /api/profile", () => {
    (0, vitest_1.describe)("Onboarding steps", () => {
        (0, vitest_1.it)("should complete patient's basic profile", async () => {
            const user = await (0, user_factory_1.createUser)({
                role: "patient",
                onboardingStatus: "pending",
                onboardingStep: 0,
            });
            (0, mockFirebase_1.mockAuthenticatedUser)(user.uid);
            const response = await (0, supertest_1.default)(app_1.default)
                .post("/api/profile")
                .set("Authorization", "Bearer fake-token")
                .send({
                firstName: "John",
                lastName: "Doe",
                profileImage: "avatar.png",
            });
            (0, vitest_1.expect)(response.status).toBe(200);
            (0, vitest_1.expect)(response.body.success).toBe(true);
        });
        (0, vitest_1.it)("should complete patient onboarding step 1", async () => {
            const user = await (0, user_factory_1.createUser)({
                role: "patient",
                onboardingStep: 1,
                onboardingStatus: "pending",
            });
            (0, mockFirebase_1.mockAuthenticatedUser)(user.uid);
            const response = await (0, supertest_1.default)(app_1.default)
                .post("/api/profile")
                .set("Authorization", "Bearer fake-token")
                .send({
                phoneNumber: "08012345678",
                dateOfBirth: "2002-05-05",
                gender: "male",
            });
            (0, vitest_1.expect)(response.status).toBe(200);
            (0, vitest_1.expect)(response.body.success).toBe(true);
        });
        (0, vitest_1.it)("should reject completed onboarding", async () => {
            const user = await (0, user_factory_1.createUser)({
                role: "patient",
                onboardingStatus: "completed",
            });
            (0, mockFirebase_1.mockAuthenticatedUser)(user.uid);
            const response = await (0, supertest_1.default)(app_1.default)
                .post("/api/profile")
                .set("Authorization", "Bearer fake-token")
                .send({});
            (0, vitest_1.expect)(response.status).toBe(400);
            (0, vitest_1.expect)(response.body.code).toBe("ONBOARDING_ALREADY_COMPLETED");
        });
    });
});
//# sourceMappingURL=profile.onboarding.test.js.map