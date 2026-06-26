import { getAuth } from "firebase-admin/auth";
import dotenv from "dotenv";
import path from "node:path";
import { cert, getApps, initializeApp } from "firebase-admin/app";
import type { ServiceAccount } from "firebase-admin";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const serviceAccount:ServiceAccount = {
  project_id: process.env.FIREBASE_PROJECT_ID!,
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
};

console.log({
  projectId: !!process.env.FIREBASE_PROJECT_ID,
  clientEmail: !!process.env.FIREBASE_CLIENT_EMAIL,
  privateKeyExists: !!process.env.FIREBASE_PRIVATE_KEY,
  privateKeyStartsWith: process.env.FIREBASE_PRIVATE_KEY?.slice(0, 30),
});

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

export const adminAuth = getAuth();
