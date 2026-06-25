import { useState } from "react";
import {
  registerWithEmailAndPassword,
  signInUserWithEmailandPassword,
  signInwWithGoogle,
  logoutUser,
  getAuthToken,
} from "./services/auth.service";

const App = () => {
  const [status, setStatus] = useState("Ready");

  const testEmailLogin = async () => {
    try {
      const credential = await signInUserWithEmailandPassword(
        "test@example.com",
        "password123",
      );
      setStatus(`Signed in: ${credential.user.email}
     `);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Login failed");
    }
  };

  const testGoogleLogin = async () => {
    try {
      const credential = await signInwWithGoogle();
      setStatus(`Google signed in: ${credential.user.email}`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Google login failed");
    }
  };

  const testLogout = async () => {
    try {
      await logoutUser();
      setStatus("Logged out");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Logout failed");
    }
  };
  const createUser = async () => {
    try {
      const credential = await registerWithEmailAndPassword(
        "test@example.com",
        "password123",
      );
      setStatus(`Created a user with ${credential.user.email}`);
    } catch (error) {
      setStatus(`${error}`);
    }
  };

  const handleTestBackend = async () => {
    try {
      const token = await getAuthToken();

      const response = await fetch("http://localhost:5000/api/auth/sync-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName: "John",
          lastName: "Doe",
          role: "patient",
        }),
      });
      const contentType = response.headers.get("content-type");
      if (
        !response.ok ||
        !contentType ||
        !contentType.includes("application/json")
      ) {
        const errorText = await response.text();
        throw new Error(
          `Expected JSON but got ${contentType}. Status: ${response.status}. Body: ${errorText}`,
        );
      }
      const data = await response.json();
      console.log("Backend Data: ", data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      MedLink
      <h1>Testing the auth services </h1>
      <button onClick={testEmailLogin}>Test Email Login</button>
      <button onClick={testGoogleLogin}>Test Google Login</button>
      <button onClick={testLogout}>Test Logout</button>
      <button onClick={createUser}>Create User </button>
      <button onClick={handleTestBackend}>Test Backend </button>
      <p>{status}</p>
    </div>
  );
};

export default App;
