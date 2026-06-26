import { getAuth } from "firebase-admin/auth";
import dotenv from "dotenv";
import path from "node:path";
import { cert, getApps, initializeApp } from "firebase-admin/app";
import type { ServiceAccount } from "firebase-admin";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const serviceAccount: ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID!,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n")?.replace(
    / /g,
    "\n",
  ),
};

if (
  !process.env.FIREBASE_PROJECT_ID ||
  !process.env.FIREBASE_CLIENT_EMAIL ||
  !process.env.FIREBASE_PRIVATE_KEY
) {
  throw new Error("Missing Firebase Admin environment variables");
}

console.log({
  projectId: !!process.env.FIREBASE_PROJECT_ID,
  clientEmail: !!process.env.FIREBASE_CLIENT_EMAIL,
  privateKeyExists: !!process.env.FIREBASE_PRIVATE_KEY,
  privateKeyStartsWith: process.env.FIREBASE_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n",
  )?.slice(0, 30),
});

export const getAdminAuth = () => {
  if (!getApps().length) {
    initializeApp({
      credential: cert(serviceAccount),
    });
  }

  return getAuth();
};
