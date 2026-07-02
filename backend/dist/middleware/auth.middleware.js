"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const firebase_admin_1 = require("../config/firebase-admin");
const auth_service_1 = require("../services/auth.service");
const adminAuth = (0, firebase_admin_1.getAdminAuth)();
const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            success: false,
            message: "Missing auth token",
        });
    }
    const idToken = authHeader.split(" ")[1];
    try {
        const decodedToken = await adminAuth.verifyIdToken(idToken);
        const dbUser = await (0, auth_service_1.findUserById)(decodedToken.uid);
        if (!dbUser) {
            return res.status(401).json({
                success: false,
                message: "User not found",
            });
        }
        req.user = decodedToken;
        req.dbUser = dbUser;
        next();
    }
    catch (error) {
        return res
            .status(401)
            .json({ success: false, message: "Invalid auth token" });
    }
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map