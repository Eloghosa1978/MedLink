import {getAuth} from "firebase-admin/auth";
import { cert, getApps, initializeApp } from "firebase-admin/app";
const serviceAccount = require("../secrets/firebase.json");

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

export const adminAuth = getAuth();
