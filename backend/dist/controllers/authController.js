"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUser = void 0;
const auth_service_1 = require("../services/auth.service");
const handleUser = async (req, res) => {
    try {
        const isGetRequest = req.method === "GET";
        const uid = req.user?.uid;
        const email = req.user?.email;
        if (!uid || email) {
            res.status(401).json({
                success: false,
                message: "No user credentials",
            });
            return;
        }
        const user = await (0, auth_service_1.findUserById)(uid);
        // Get Request /auth/user
        if (isGetRequest) {
            if (!user) {
                res.status(404).json({
                    success: false,
                    message: "User not found Please sign in",
                });
                return;
            }
            res.status(200).json({
                success: true,
                user,
            });
            return;
        }
        // Default Post Request /auth/user
        if (!user) {
            const { firstName, lastName, role } = req.body;
            const user = await (0, auth_service_1.createUser)({
                uid,
                email,
                firstName,
                lastName,
                role,
            });
            res.status(201).json({
                success: true,
                message: "User synchronized successfully ",
                user,
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: "User already exists",
            user,
        });
    }
    catch (error) {
        console.log("Auth controller error: ", error);
        res.status(500).json({
            success: false,
            message: "Internal server errror",
        });
    }
};
exports.handleUser = handleUser;
//# sourceMappingURL=authController.js.map