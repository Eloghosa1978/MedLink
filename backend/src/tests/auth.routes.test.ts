import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../app";


describe("MedLink API", () => {
  it("Returns a health response from the root endpoint", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toContain("MedLink API");
  });
});

describe("Auth Routes", () => {
  it("Returns 401 without a token", async () => {
    const response = await request(app).post("/api/auth/sync-user").send({
      firstName: "Test",
      lastName: "User",
      role: "patient",
    });
    expect(response.status).toBe(401);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toContain("Missing auth token");
  });
  it("should reject unauthenticated requests", async () => {
    const response = await request(app).get("/api/auth/me");
    expect(response.status).toBe(401);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toContain("Missing auth token");
  });
});

describe("Security Test", () => {
  it("Returns 429 after too many requests", async () => {
    for (let i = 0; i < 20; i++){
      await request(app).post("/api/auth/sync-user")
    }
    const response = await request(app).post('/api/auth/sync-user')

    expect(response.status).toBe(429)
  })
})



