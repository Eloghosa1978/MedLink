import { getAuth } from "firebase-admin/auth";
import dotenv from "dotenv";
import path from "node:path";
import { cert, getApps, initializeApp } from "firebase-admin/app";
import type { ServiceAccount } from "firebase-admin";

dotenv.config({ path: path.resolve(__dirname, "../.env") });
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

if (
  !process.env.FIREBASE_PROJECT_ID ||
  !process.env.FIREBASE_CLIENT_EMAIL ||
  !process.env.FIREBASE_PRIVATE_KEY
) {
  throw new Error("Missing Firebase Admin environment variables");
}

// console.log({
//   projectId: !!process.env.FIREBASE_PROJECT_ID,
//   clientEmail: !!process.env.FIREBASE_CLIENT_EMAIL,
//   privateKeyExists: !!process.env.FIREBASE_PRIVATE_KEY,
//   privateKeyStartsWith: process.env.FIREBASE_PRIVATE_KEY?.replace(
//     /\\n/g,
//     "\n",
//   )?.slice(0, 30),
// });

export const getAdminAuth = () => {
  if (!getApps().length) {
    initializeApp({
      credential: cert(serviceAccount),
    });
  }

  return getAuth();
};
