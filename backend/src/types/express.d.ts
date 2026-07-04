import { DecodedIdToken } from "firebase-admin/auth";
import { UserDocument } from "../models/authModel";

declare global {
  namespace Express {
    interface Request {
      user?: DecodedIdToken;
      dbUser?: UserDocument;
    }
  }
}

export {};
