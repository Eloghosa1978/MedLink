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

describe("PATCH /api/profile", () => {
  describe("Patient", () => {
    it("should update a patient's profile", async () => {
      const user = await createUser({
        role: "patient",
        onboardingStatus: "completed",
      });

      await createPatientProfile(user);

      mockAuthenticatedUser(user.uid);

      const response = await request(app)
        .patch("/api/profile")
        .set("Authorization", "Bearer fake-token")
        .send({
          phoneNumber: "08012345678",
          height: 180,
          weight: 75,
        });

      expect(response.status).toBe(200);

      expect(response.body.success).toBe(true);

      expect(response.body.code).toBe("PROFILE_UPDATED");

      expect(response.body.data.user.phoneNumber).toBe("08012345678");

      expect(response.body.data.profile.height).toBe(180);

      expect(response.body.data.profile.weight).toBe(75);
    });

    it("should partially update a patient's profile", async () => {
      const user = await createUser({
        role: "patient",
        onboardingStatus: "completed",
      });

      await createPatientProfile(user);

      mockAuthenticatedUser(user.uid);

      const response = await request(app)
        .patch("/api/profile")
        .set("Authorization", "Bearer fake-token")
        .send({
          phoneNumber: "08099999999",
        });

      expect(response.status).toBe(200);

      expect(response.body.data.user.phoneNumber).toBe("08099999999");
    });
  });

  describe("Doctor", () => {
    it("should update a doctor's profile", async () => {
      const user = await createUser({
        role: "doctor",
        onboardingStatus: "completed",
      });

      await createDoctorProfile(user);

      mockAuthenticatedUser(user.uid);

      const response = await request(app)
        .patch("/api/profile")
        .set("Authorization", "Bearer fake-token")
        .send({
          biography: "Experienced Cardiologist",
          consultationModes: ["physical", "virtual"],
        });

      expect(response.status).toBe(200);

      expect(response.body.success).toBe(true);

      expect(response.body.data.profile.biography).toBe("Experienced Cardiologist");

      expect(response.body.data.profile.consultationModes).toEqual([
        "physical",
        "virtual",
      ]);
    });
  });

  describe("Validation", () => {
    it("should return 400 when validation fails", async () => {
      const user = await createUser({
        role: "patient",
      });

      await createPatientProfile(user);

      mockAuthenticatedUser(user.uid);

      const response = await request(app)
        .patch("/api/profile")
        .set("Authorization", "Bearer fake-token")
        .send({
          phoneNumber: 12345,
        });

      expect(response.status).toBe(400);
    });
    it("should reject updating protected fields", async () => {
      const user = await createUser({
        role: "patient",
      });

      await createPatientProfile(user);

      mockAuthenticatedUser(user.uid);

      const response = await request(app)
        .patch("/api/profile")
        .set("Authorization", "Bearer fake-token")
        .send({
          role: "doctor",
        });

      expect(response.status).toBe(400);
    });
  });
});
