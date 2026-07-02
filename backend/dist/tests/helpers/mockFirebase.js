"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockInvalidToken = exports.mockAuthenticatedUser = exports.verifyIdTokenMock = void 0;
const vitest_1 = require("vitest");
exports.verifyIdTokenMock = vitest_1.vi.fn();
const mockAuthenticatedUser = (uid) => {
    exports.verifyIdTokenMock.mockResolvedValue({
        uid,
        email: "test@example.com",
    });
};
exports.mockAuthenticatedUser = mockAuthenticatedUser;
vitest_1.vi.mock("../../config/firebase-admin", () => ({
    getAdminAuth: () => ({
        verifyIdToken: exports.verifyIdTokenMock,
    }),
}));
const mockInvalidToken = () => {
    exports.verifyIdTokenMock.mockRejectedValue(new Error("Invalid token"));
};
exports.mockInvalidToken = mockInvalidToken;
//# sourceMappingURL=mockFirebase.js.map