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

describe("GET /api/profile", () => {
  describe("Success Cases", () => {
    it("should return the authenticated patient's profile", async () => {
      // Arrange
      const user = await createUser({
        role: "patient",
        onboardingStatus: "completed",
      });

      await createPatientProfile(user);

      mockAuthenticatedUser(user.uid);

      // Act
      const response = await request(app)
        .get("/api/profile")
        .set("Authorization", "Bearer fake-token");

      // Assert
      expect(response.status).toBe(200);

      expect(response.body.success).toBe(true);

      expect(response.body.data.user.email).toBe(user.email);

      expect(response.body.data.profile).not.toBeNull();

      expect(response.body.data.profile.userId).toBe(user._id.toString());

      expect(response.body.code).toBe("PROFILE_FETCHED");

      expect(response.body.data.user.role).toBe("patient");
    });
    it("should return the authenticated doctor's profile", async () => {
      const user = await createUser({
        role: "doctor",
        onboardingStatus: "completed",
      });

      await createDoctorProfile(user);

      mockAuthenticatedUser(user.uid);

      const response = await request(app)
        .get("/api/profile")
        .set("Authorization", "Bearer fake-token");

      expect(response.status).toBe(200);

      expect(response.body.success).toBe(true);

      expect(response.body.data.user.role).toBe("doctor");

      expect(response.body.data.profile).not.toBeNull();
    });
  });
  describe("Authentication", () => {
    it("should return 401 when authorization header is missing", async () => {
      const response = await request(app).get("/api/profile");

      expect(response.status).toBe(401);

      expect(response.body.success).toBe(false);

      expect(response.body.message).toBe("Missing auth token");
    });
    it("should return 401 when firebase token is invalid", async () => {
      mockInvalidToken();

      const response = await request(app)
        .get("/api/profile")
        .set("Authorization", "Bearer invalid-token");

      expect(response.status).toBe(401);

      expect(response.body.success).toBe(false);

      expect(response.body.message).toBe("Invalid auth token");
    });
    it("should return 401 when database user cannot be found", async () => {
      mockAuthenticatedUser("non-existent-user");

      const response = await request(app)
        .get("/api/profile")
        .set("Authorization", "Bearer fake-token");

      expect(response.status).toBe(401);

      expect(response.body.success).toBe(false);
    });
  });
  describe("Profile Existence", () => {
    it("should return 404 when profile does not exist", async () => {
      const user = await createUser({
        role: "patient",
      });

      mockAuthenticatedUser(user.uid);

      const response = await request(app)
        .get("/api/profile")
        .set("Authorization", "Bearer fake-token");

      expect(response.status).toBe(404);
    });
  });
});
