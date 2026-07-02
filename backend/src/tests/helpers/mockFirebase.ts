import { getAdminAuth } from "../../config/firebase-admin";
import { vi } from "vitest";

export const verifyIdTokenMock = vi.fn();
export const mockAuthenticatedUser = (uid: string) => {
  verifyIdTokenMock.mockResolvedValue({
    uid,
    email: "test@example.com",
  });
};

vi.mock("../../config/firebase-admin", () => ({
  getAdminAuth: () => ({
    verifyIdToken: verifyIdTokenMock,
  }),
}));

export const mockInvalidToken = () => {
  verifyIdTokenMock.mockRejectedValue(new Error("Invalid token"));
};
