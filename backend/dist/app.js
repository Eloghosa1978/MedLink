"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const profile_routes_1 = __importDefault(require("./routes/profile.routes"));
// defining routes
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: "10kb" }));
// app.use(mongoSanitize());
// Api rate limiting configuration
// Global limiter
const globalLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        status: 429,
        error: "Too many requests from this IP.  Please try again later.",
    },
    standardHeaders: true,
    legacyHeaders: false,
});
// Specific Limiter
const authLimiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 60 * 1000,
    max: 15,
    message: {
        status: 429,
        error: "Too many account creation or access attempts.",
    },
    standardHeaders: true,
    legacyHeaders: false,
});
// calling the global limiter to be used in all apit routes
app.use("/api", globalLimiter);
// use limits to specific auth routes
app.use("/api/auth", authLimiter, auth_routes_1.default);
// use limits to specific profile routes
app.use("/api/profile", profile_routes_1.default);
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "MedLink API is running",
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map