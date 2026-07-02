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
const patient_factory_1 = require("../helpers/factories/patient.factory");
const doctor_factory_1 = require("../helpers/factories/doctor.factory");
(0, vitest_1.describe)("GET /api/profile", () => {
    (0, vitest_1.describe)("Success Cases", () => {
        (0, vitest_1.it)("should return the authenticated patient's profile", async () => {
            // Arrange
            const user = await (0, user_factory_1.createUser)({
                role: "patient",
                onboardingStatus: "completed",
            });
            await (0, patient_factory_1.createPatientProfile)(user);
            (0, mockFirebase_1.mockAuthenticatedUser)(user.uid);
            // Act
            const response = await (0, supertest_1.default)(app_1.default)
                .get("/api/profile")
                .set("Authorization", "Bearer fake-token");
            // Assert
            (0, vitest_1.expect)(response.status).toBe(200);
            (0, vitest_1.expect)(response.body.success).toBe(true);
            (0, vitest_1.expect)(response.body.data.user.email).toBe(user.email);
            (0, vitest_1.expect)(response.body.data.profile).not.toBeNull();
            (0, vitest_1.expect)(response.body.data.profile.userId).toBe(user._id.toString());
            (0, vitest_1.expect)(response.body.code).toBe("PROFILE_FETCHED");
            (0, vitest_1.expect)(response.body.data.user.role).toBe("patient");
        });
        (0, vitest_1.it)("should return the authenticated doctor's profile", async () => {
            const user = await (0, user_factory_1.createUser)({
                role: "doctor",
                onboardingStatus: "completed",
            });
            await (0, doctor_factory_1.createDoctorProfile)(user);
            (0, mockFirebase_1.mockAuthenticatedUser)(user.uid);
            const response = await (0, supertest_1.default)(app_1.default)
                .get("/api/profile")
                .set("Authorization", "Bearer fake-token");
            (0, vitest_1.expect)(response.status).toBe(200);
            (0, vitest_1.expect)(response.body.success).toBe(true);
            (0, vitest_1.expect)(response.body.data.user.role).toBe("doctor");
            (0, vitest_1.expect)(response.body.data.profile).not.toBeNull();
        });
    });
    (0, vitest_1.describe)("Authentication", () => {
        (0, vitest_1.it)("should return 401 when authorization header is missing", async () => {
            const response = await (0, supertest_1.default)(app_1.default).get("/api/profile");
            (0, vitest_1.expect)(response.status).toBe(401);
            (0, vitest_1.expect)(response.body.success).toBe(false);
            (0, vitest_1.expect)(response.body.message).toBe("Missing auth token");
        });
        (0, vitest_1.it)("should return 401 when firebase token is invalid", async () => {
            (0, mockFirebase_1.mockInvalidToken)();
            const response = await (0, supertest_1.default)(app_1.default)
                .get("/api/profile")
                .set("Authorization", "Bearer invalid-token");
            (0, vitest_1.expect)(response.status).toBe(401);
            (0, vitest_1.expect)(response.body.success).toBe(false);
            (0, vitest_1.expect)(response.body.message).toBe("Invalid auth token");
        });
        (0, vitest_1.it)("should return 401 when database user cannot be found", async () => {
            (0, mockFirebase_1.mockAuthenticatedUser)("non-existent-user");
            const response = await (0, supertest_1.default)(app_1.default)
                .get("/api/profile")
                .set("Authorization", "Bearer fake-token");
            (0, vitest_1.expect)(response.status).toBe(401);
            (0, vitest_1.expect)(response.body.success).toBe(false);
        });
    });
    (0, vitest_1.describe)("Profile Existence", () => {
        (0, vitest_1.it)("should return 404 when profile does not exist", async () => {
            const user = await (0, user_factory_1.createUser)({
                role: "patient",
            });
            (0, mockFirebase_1.mockAuthenticatedUser)(user.uid);
            const response = await (0, supertest_1.default)(app_1.default)
                .get("/api/profile")
                .set("Authorization", "Bearer fake-token");
            (0, vitest_1.expect)(response.status).toBe(404);
        });
    });
});
//# sourceMappingURL=profile.get.test.js.map