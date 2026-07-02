"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const vitest_1 = require("vitest");
const app_1 = __importDefault(require("../app"));
(0, vitest_1.describe)("MedLink API", () => {
    (0, vitest_1.it)("Returns a health response from the root endpoint", async () => {
        const response = await (0, supertest_1.default)(app_1.default).get("/");
        (0, vitest_1.expect)(response.status).toBe(200);
        (0, vitest_1.expect)(response.body.success).toBe(true);
        (0, vitest_1.expect)(response.body.message).toContain("MedLink API");
    });
});
(0, vitest_1.describe)("Auth Routes", () => {
    (0, vitest_1.it)("Returns 401 without a token", async () => {
        const response = await (0, supertest_1.default)(app_1.default).post("/api/auth/user").send({
            firstName: "Test",
            lastName: "User",
            role: "patient",
        });
        (0, vitest_1.expect)(response.status).toBe(401);
        (0, vitest_1.expect)(response.body.success).toBe(false);
        (0, vitest_1.expect)(response.body.message).toContain("Missing auth token");
    });
    (0, vitest_1.it)("Disallows un-authenticated access", async () => {
        const response = await (0, supertest_1.default)(app_1.default).get("/api/auth/user");
        (0, vitest_1.expect)(response.status).toBe(401);
        (0, vitest_1.expect)(response.body.success).toBe(false);
        (0, vitest_1.expect)(response.body.message).toContain("Missing auth token");
    });
});
(0, vitest_1.describe)("Security Test", () => {
    (0, vitest_1.it)("Returns 429 after too many requests", async () => {
        for (let i = 0; i < 20; i++) {
            await (0, supertest_1.default)(app_1.default).post("/api/auth/user");
        }
        const response = await (0, supertest_1.default)(app_1.default).post("/api/auth/user");
        (0, vitest_1.expect)(response.status).toBe(429);
    });
});
//# sourceMappingURL=auth.routes.test.js.map