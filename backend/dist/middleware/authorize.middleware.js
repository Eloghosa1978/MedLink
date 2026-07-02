"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRole = void 0;
const auth_service_1 = require("../services/auth.service");
const authorizeRole = (requiredRole) => async (req, res, next) => {
    try {
        const uid = req.user?.uid;
        if (!uid) {
            return res.status(201).json({
                success: false,
                message: "Unauthorised user",
            });
        }
        const user = await (0, auth_service_1.findUserById)(uid);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        if (user.role !== requiredRole) {
            return res.status(404).json({
                success: false,
                code: "unAuthorized",
                message: "You don't have permission to access this action",
            });
        }
        req.dbUser = user;
        next();
    }
    catch (error) { }
};
exports.authorizeRole = authorizeRole;
//# sourceMappingURL=authorize.middleware.js.map