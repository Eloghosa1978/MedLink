import { describe, expect, it } from "vitest";
import {
  mockAuthenticatedUser,
  mockInvalidToken,
} from "../helpers/mockFirebase";
import request from "supertest";
import app from "../../app";

import { createUser } from "../helpers/factories/user.factory";
import { createPatientProfile } from "../helpers/factories/patient.factory";
import { createDoctorProfile } from "../helpers/factories/doctor.factory";

describe("POST /api/profile", () => {
  describe("Onboarding steps", () => {
    it("should complete patient's basic profile", async () => {
      const user = await createUser({
        role: "patient",
        onboardingStatus: "pending",
        onboardingStep: 0,
      });

      mockAuthenticatedUser(user.uid);

      const response = await request(app)
        .post("/api/profile")
        .set("Authorization", "Bearer fake-token")
        .send({
          firstName: "John",
          lastName: "Doe",
          profileImage: "avatar.png",
        });

      expect(response.status).toBe(200);

      expect(response.body.success).toBe(true);
    });

    it("should complete patient onboarding step 1", async () => {
      const user = await createUser({
        role: "patient",
        onboardingStep: 1,
        onboardingStatus: "pending",
      });

      mockAuthenticatedUser(user.uid);

      const response = await request(app)
        .post("/api/profile")
        .set("Authorization", "Bearer fake-token")
        .send({
          phoneNumber: "08012345678",
          dateOfBirth: "2002-05-05",
          gender: "male",
        });
      expect(response.status).toBe(200);

      expect(response.body.success).toBe(true);
    });

    it("should reject completed onboarding", async () => {
      const user = await createUser({
        role: "patient",
        onboardingStatus: "completed",
      });

      mockAuthenticatedUser(user.uid);

      const response = await request(app)
        .post("/api/profile")
        .set("Authorization", "Bearer fake-token")
        .send({});

      expect(response.status).toBe(400);

      expect(response.body.code).toBe("ONBOARDING_ALREADY_COMPLETED");
    });
  });
});
