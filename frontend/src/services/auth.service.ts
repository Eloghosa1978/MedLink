import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  type UserCredential,
  type User,
} from "firebase/auth";
import { auth } from "../lib/firebase.ts";
import { FirebaseError } from "firebase/app";

const googleProvider = new GoogleAuthProvider();
const authErrorMessages: Record<string, string> = {
  "auth/email-already-in-use": "This email is already registered.",
  "auth/invalid-email": "The email address is not valid.",
  "auth/weak-password": "The password is too weak.",
  "auth/user-disabled": "This account has been disabled.",
  "auth/user-not-found": "No account was found with this email.",
  "auth/wrong-password": "The password is incorrect.",
  "auth/popup-closed-by-user": "Sign-in popup was closed.",
  "auth/popup-blocked": "The sign-in popup was blocked.",
  "auth/network-request-failed": "Network error. Check your connection.",
  "auth/too-many-requests":
    "Too many failed attempts. Access temporarily blocked.",
  "auth/invalid-credential":
    "The login credentials provided are incorrect or expired.",
  "auth/account-exists-with-different-credential":
    "An account already exists with this email using a different sign-in provider.",
  "auth/operation-not-allowed": "This sign-in method is currently disabled.",
};
const getAuthErrorMessage = (error: unknown): string => {
  if (error instanceof FirebaseError) {
    console.error(
      "Auth service error: ",
      authErrorMessages[error.code] ?? error.message ?? "Authentication failed",
    );
    return (
      authErrorMessages[error.code] ?? error.message ?? "Authentication failed"
    );
  }
  if (error instanceof Error) {
    console.error(error.message);
    return error.message;
  }
  return "An unexpected error occured.";
};

export const registerWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<UserCredential> => {
  try {
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return credential;
  } catch (error) {
    throw new Error(getAuthErrorMessage(error), { cause: error });
  }
};

export const signInUserWithEmailandPassword = async (
  email: string,
  password: string,
): Promise<UserCredential> => {
  try {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    return credential;
  } catch (error) {
    throw new Error(getAuthErrorMessage(error), { cause: error });
  }
};

export const signInwWithGoogle = async (): Promise<UserCredential> => {
  try {
    const credential = await signInWithPopup(auth, googleProvider);
    return credential;
  } catch (error) {
    throw new Error(getAuthErrorMessage(error), { cause: error });
  }
};

export const logoutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(getAuthErrorMessage(error), { cause: error });
  }
};

// get currentUser
export const getcurrentUser = async (): Promise<User | null> => {
  return auth.currentUser;
};

// get Token

export const getAuthToken = async (): Promise<string | null> => {
  const user = auth.currentUser;
  if (!user) return null;
  console.log(user.getIdToken);
  return user.getIdToken();
};
export const signOutUser = logoutUser;
