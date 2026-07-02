import { vi } from "vitest";

vi.mock("./src/config/firebase-admin", () => ({
  getAdminAuth: () => ({
    verifyIdToken: vi.fn(),
  }),
}));
