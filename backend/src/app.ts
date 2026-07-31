import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";
import profileRoutes from "./routes/profile.routes";

// defining routes
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "10kb" }));

const sanitize = (mongoSanitize as any).sanitize;

app.use((req, res, next) => {
  if (req.body) req.body = sanitize(req.body);

  if (req.params) req.params = sanitize(req.params);
  if (req.headers) req.headers = sanitize(req.headers);

  next();
});
// Api rate limiting configuration

// Global limiter

const globalLimiter = rateLimit({
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
const authLimiter = rateLimit({
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
app.use("/api/auth", authLimiter, authRoutes);
// use limits to specific profile routes
app.use("/api/profile", profileRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "MedLink API is running",
  });
});

export default app;
