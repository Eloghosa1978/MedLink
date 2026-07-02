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
(0, vitest_1.describe)("PATCH /api/profile", () => {
    (0, vitest_1.describe)("Patient", () => {
        (0, vitest_1.it)("should update a patient's profile", async () => {
            const user = await (0, user_factory_1.createUser)({
                role: "patient",
                onboardingStatus: "completed",
            });
            await (0, patient_factory_1.createPatientProfile)(user);
            (0, mockFirebase_1.mockAuthenticatedUser)(user.uid);
            const response = await (0, supertest_1.default)(app_1.default)
                .patch("/api/profile")
                .set("Authorization", "Bearer fake-token")
                .send({
                phoneNumber: "08012345678",
                height: 180,
                weight: 75,
            });
            (0, vitest_1.expect)(response.status).toBe(200);
            (0, vitest_1.expect)(response.body.success).toBe(true);
            (0, vitest_1.expect)(response.body.code).toBe("PROFILE_UPDATED");
            (0, vitest_1.expect)(response.body.data.user.phoneNumber).toBe("08012345678");
            (0, vitest_1.expect)(response.body.data.profile.height).toBe(180);
            (0, vitest_1.expect)(response.body.data.profile.weight).toBe(75);
        });
        (0, vitest_1.it)("should partially update a patient's profile", async () => {
            const user = await (0, user_factory_1.createUser)({
                role: "patient",
                onboardingStatus: "completed",
            });
            await (0, patient_factory_1.createPatientProfile)(user);
            (0, mockFirebase_1.mockAuthenticatedUser)(user.uid);
            const response = await (0, supertest_1.default)(app_1.default)
                .patch("/api/profile")
                .set("Authorization", "Bearer fake-token")
                .send({
                phoneNumber: "08099999999",
            });
            (0, vitest_1.expect)(response.status).toBe(200);
            (0, vitest_1.expect)(response.body.data.user.phoneNumber).toBe("08099999999");
        });
    });
    (0, vitest_1.describe)("Doctor", () => {
        (0, vitest_1.it)("should update a doctor's profile", async () => {
            const user = await (0, user_factory_1.createUser)({
                role: "doctor",
                onboardingStatus: "completed",
            });
            await (0, doctor_factory_1.createDoctorProfile)(user);
            (0, mockFirebase_1.mockAuthenticatedUser)(user.uid);
            const response = await (0, supertest_1.default)(app_1.default)
                .patch("/api/profile")
                .set("Authorization", "Bearer fake-token")
                .send({
                biography: "Experienced Cardiologist",
                consultationModes: ["physical", "virtual"],
            });
            (0, vitest_1.expect)(response.status).toBe(200);
            (0, vitest_1.expect)(response.body.success).toBe(true);
            (0, vitest_1.expect)(response.body.data.profile.biography).toBe("Experienced Cardiologist");
            (0, vitest_1.expect)(response.body.data.profile.consultationModes).toEqual([
                "physical",
                "virtual",
            ]);
        });
    });
    (0, vitest_1.describe)("Validation", () => {
        (0, vitest_1.it)("should return 400 when validation fails", async () => {
            const user = await (0, user_factory_1.createUser)({
                role: "patient",
            });
            await (0, patient_factory_1.createPatientProfile)(user);
            (0, mockFirebase_1.mockAuthenticatedUser)(user.uid);
            const response = await (0, supertest_1.default)(app_1.default)
                .patch("/api/profile")
                .set("Authorization", "Bearer fake-token")
                .send({
                phoneNumber: 12345,
            });
            (0, vitest_1.expect)(response.status).toBe(400);
        });
        (0, vitest_1.it)("should reject updating protected fields", async () => {
            const user = await (0, user_factory_1.createUser)({
                role: "patient",
            });
            await (0, patient_factory_1.createPatientProfile)(user);
            (0, mockFirebase_1.mockAuthenticatedUser)(user.uid);
            const response = await (0, supertest_1.default)(app_1.default)
                .patch("/api/profile")
                .set("Authorization", "Bearer fake-token")
                .send({
                role: "doctor",
            });
            (0, vitest_1.expect)(response.status).toBe(400);
        });
    });
});
//# sourceMappingURL=profile.patch.test.js.map