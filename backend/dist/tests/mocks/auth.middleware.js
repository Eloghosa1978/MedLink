"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (req, res, next) => {
    // Pretend the user is already authenticated
    req.user = {
        uid: "test-user-id",
        email: "test@example.com",
    };
    next();
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map