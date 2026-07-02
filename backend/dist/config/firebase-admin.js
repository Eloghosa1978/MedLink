"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminAuth = void 0;
const auth_1 = require("firebase-admin/auth");
const dotenv_1 = __importDefault(require("dotenv"));
const node_path_1 = __importDefault(require("node:path"));
const app_1 = require("firebase-admin/app");
dotenv_1.default.config({ path: node_path_1.default.resolve(__dirname, "../.env") });
// 1. Get the raw key string from the environment
const rawKey = process.env.FIREBASE_PRIVATE_KEY || "";
// 2. Sanitize it thoroughly
const formattedPrivateKey = rawKey.startsWith("-----BEGIN PRIVATE KEY-----")
    ? rawKey.replace(/\\n/g, "\n").replace(/^"|"$/g, "") // Fix literal text '\n'
    : Buffer.from(rawKey, "base64").toString("utf8").replace(/\\n/g, "\n"); // Decode if base64
const serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: formattedPrivateKey,
};
if (!process.env.FIREBASE_PROJECT_ID ||
    !process.env.FIREBASE_CLIENT_EMAIL ||
    !process.env.FIREBASE_PRIVATE_KEY) {
    throw new Error("Missing Firebase Admin environment variables");
}
console.log({
    projectId: !!process.env.FIREBASE_PROJECT_ID,
    clientEmail: !!process.env.FIREBASE_CLIENT_EMAIL,
    privateKeyExists: !!process.env.FIREBASE_PRIVATE_KEY,
    privateKeyStartsWith: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n")?.slice(0, 30),
});
const getAdminAuth = () => {
    if (!(0, app_1.getApps)().length) {
        (0, app_1.initializeApp)({
            credential: (0, app_1.cert)(serviceAccount),
        });
    }
    return (0, auth_1.getAuth)();
};
exports.getAdminAuth = getAdminAuth;
//# sourceMappingURL=firebase-admin.js.map