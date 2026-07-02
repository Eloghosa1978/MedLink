"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_middleware_1 = require("../middleware/auth.middleware");
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
const validate = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array(),
        });
    }
    next();
};
router
    .route("/user")
    .get(auth_middleware_1.authMiddleware, authController_1.handleUser)
    .post(auth_middleware_1.authMiddleware, [
    (0, express_validator_1.body)("firstName").optional().trim().escape(),
    (0, express_validator_1.body)("lastName").optional().trim().escape(),
    (0, express_validator_1.body)("role").optional().trim().escape(),
], validate, authController_1.handleUser);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map