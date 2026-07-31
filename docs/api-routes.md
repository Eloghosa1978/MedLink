# MedLink API Documentation

This document lists the API endpoints currently available in the backend, their purpose, expected request/response patterns, and frontend usage examples for the React app.

---

## 1. Base information

- Base URL: `http://localhost:<PORT>`
- Global prefix: `/api`
- Authentication:
  - Firebase ID token is expected in the `Authorization` header
  - Format: `Bearer <firebase-id-token>`
- Content type:
  - `application/json`

Current route groups:

- `/api/auth`
- `/api/profile`

---

## 2. Health check

### GET /

Purpose:

- Confirms that the backend is running.

Example:

```http
GET /
```

Example response:

```json
{
  "success": true,
  "message": "MedLink API is running"
}
```

---

## 3. User sync with Firebase Auth

### GET /api/auth/user

Purpose:

- Fetches the backend user record for the currently authenticated Firebase user.
- Used after a Firebase login to confirm whether the same user already exists in MongoDB.

Headers:

```http
Authorization: Bearer <firebase-id-token>
```

Example:

```http
GET /api/auth/user
```

Example response:

```json
{
  "success": true,
  "user": {
    "_id": "64f...",
    "uid": "firebase-uid",
    "email": "test@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "patient",
    "onboardingStatus": "pending",
    "onboardingStep": 0
  }
}
```

---

### POST /api/auth/user

Purpose:

- Syncs a Firebase-authenticated user into the backend MongoDB database.
- This is the user creation step after the frontend signs in with Firebase.

Headers:

```http
Authorization: Bearer <firebase-id-token>
Content-Type: application/json
```

Example body:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "role": "patient"
}
```

Example:

```http
POST /api/auth/user
```

Example response:

```json
{
  "success": true,
  "message": "User synchronized successfully",
  "user": {
    "_id": "64f...",
    "uid": "firebase-uid",
    "email": "test@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "patient",
    "onboardingStatus": "pending",
    "onboardingStep": 0
  }
}
```

Use case:

- Called immediately after the user signs in or registers with Firebase in the frontend.
- This ensures the backend has a persistent MongoDB record for the user.

---

## 4. Fetch profile

### GET /api/profile

Purpose:

- Fetches the authenticated user's profile and related profile document.

Headers:

```http
Authorization: Bearer <firebase-id-token>
```

Example:

```http
GET /api/profile
```

Example response:

```json
{
  "success": true,
  "code": "PROFILE_FETCHED",
  "message": "Profile fetched successfully",
  "data": {
    "user": {
      "_id": "64f...",
      "uid": "firebase-uid",
      "email": "test@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "role": "patient",
      "onboardingStatus": "pending"
    },
    "profile": {
      "_id": "64f...",
      "userId": "64f...",
      "bloodGroup": "O+",
      "genotype": "AA"
    }
  }
}
```

Use case:

- Used when the user opens their dashboard/profile page to load saved profile data.

---

## 5. Onboarding flow

### POST /api/profile/onboarding

Purpose:

- Handles the onboarding workflow for the authenticated user.
- The backend uses the user's current `onboardingStep` to decide which onboarding step handler to run.

Headers:

```http
Authorization: Bearer <firebase-id-token>
Content-Type: application/json
```

### Step 0 - basic profile

Used for:

- Initial basic user details such as:
  - phone number
  - date of birth
  - profile image
  - gender

Example body:

```json
{
  "phoneNumber": "08012345678",
  "dateOfBirth": "1990-01-01",
  "profileImage": "avatar.png",
  "gender": "male"
}
```

Example response:

```json
{
  "success": true,
  "code": "ONBOARDING_STEP_COMPLETED",
  "message": "Onboarding step completed successfully",
  "data": {
    "onboardingStep": 1
  }
}
```

---

### Patient onboarding step examples

#### Step 1

Purpose:

- Saves the patient’s medical identity basics.

Example body:

```json
{
  "bloodGroup": "O+",
  "genotype": "AA"
}
```

#### Step 2

Purpose:

- Saves the patient’s health measurements and conditions.

Example body:

```json
{
  "height": 170,
  "weight": 68,
  "allergies": ["penicillin"],
  "chronicConditions": ["asthma"]
}
```

#### Step 3

Purpose:

- Saves the patient’s address details.

Example body:

```json
{
  "address": {
    "street": "12 Marina Road",
    "city": "Lagos",
    "state": "Lagos State",
    "country": "Nigeria"
  }
}
```

#### Step 4

Purpose:

- Saves the patient’s emergency contact details.

Example body:

```json
{
  "emergencyContact": {
    "name": "Mary Doe",
    "relationship": "Sister",
    "phoneNumber": "08012345678"
  }
}
```

Use case:

- These requests are used by the patient onboarding wizard in the React frontend.
- Each successful step advances the user’s onboarding state.

---

## 6. Update existing profile

### PATCH /api/profile

Purpose:

- Updates an existing user or profile document after onboarding.
- Supports partial updates and validates protected fields.

Headers:

```http
Authorization: Bearer <firebase-id-token>
Content-Type: application/json
```

### Patient update example

Example body:

```json
{
  "phoneNumber": "08012345678",
  "height": 180,
  "weight": 75
}
```

Example:

```http
PATCH /api/profile
```

Example response:

```json
{
  "success": true,
  "code": "PROFILE_UPDATED",
  "message": "Profile updated successfully",
  "data": {
    "user": {
      "phoneNumber": "08012345678"
    },
    "profile": {
      "height": 180,
      "weight": 75
    }
  }
}
```

### Doctor onboarding step examples

#### Step 1

Purpose:

- Saves the doctor’s profile basics such as contact info, license details, and practice type.

Example body:

```json
{
  "phoneNumber": "08012345678",
  "licenseNumber": "MD-2024-001",
  "licensedSince": "2020-01-01",
  "practiceType": "private"
}
```

#### Step 2

Purpose:

- Saves specialization, qualifications, biography, and specialist start date.

Example body:

```json
{
  "primarySpecialization": "Cardiology",
  "specializations": ["Internal Medicine", "Cardiology"],
  "qualifications": ["MBBS", "FWACP"],
  "biography": "Experienced cardiologist with 8 years of practice.",
  "specialistSince": "2018-01-01"
}
```

#### Step 3

Purpose:

- Saves either a hospital reference or a practice location depending on the doctor’s `practiceType`.

If `practiceType` is `private`:

```json
{
  "practiceLocation": {
    "street": "12 Marina Road",
    "city": "Lagos",
    "state": "Lagos State",
    "country": "Nigeria"
  }
}
```

If `practiceType` is `hospital`:

```json
{
  "hospitalId": "64f2d4c1a5b9e1f2c3d4e5f6"
}
```

If `practiceType` is `both`:

```json
{
  "hospitalId": "64f2d4c1a5b9e1f2c3d4e5f6",
  "practiceLocation": {
    "street": "12 Marina Road",
    "city": "Lagos",
    "state": "Lagos State",
    "country": "Nigeria"
  }
}
```

#### Step 4

Purpose:

- Saves consultation mode information for the doctor.

Example body:

```json
{
  "consultationModes": ["physical", "virtual"]
}
```

Protected fields that must not be changed:

- `role`
- `uid`
- `email`
- `_id`
- `onboardingStatus`

Use case:

- Used by profile editing screens after the user has already completed onboarding.

---

## 7. Frontend React use cases

The React frontend currently has screens such as [frontend/src/pages/LoginPage.tsx](frontend/src/pages/LoginPage.tsx), [frontend/src/pages/HomePage.tsx](frontend/src/pages/HomePage.tsx), [frontend/src/pages/PatientDashboard.tsx](frontend/src/pages/PatientDashboard.tsx), and [frontend/src/pages/DoctorDashboard.tsx](frontend/src/pages/DoctorDashboard.tsx). The expected API usage pattern is:

### A. Registration / login flow

1. Use Firebase authentication in the frontend.
2. After Firebase login succeeds, call:
   - `GET /api/auth/user`
   - `POST /api/auth/user` if the MongoDB record does not exist

Purpose:

- Create the backend user record once the frontend has a Firebase token.

### B. Patient onboarding flow

1. Open the patient onboarding wizard.
2. Send step-by-step `POST /api/profile` calls:
   - Step 0: basic profile
   - Step 1: medical basics
   - Step 2: measurements
   - Step 3: address
   - Step 4: emergency contact

Purpose:

- Complete the patient profile journey from a React page form.

### C. Profile viewing and editing

1. Load the current profile by calling `GET /api/profile`.
2. Allow user edits from a React form.
3. Send updates with `PATCH /api/profile`.

Purpose:

- Show the profile in the dashboard and let the user update personal or medical info.

### D. Role-based profile experience

- If a user is a patient, the frontend should use patient-specific fields.
- If a user is a doctor, the frontend should use doctor-specific update fields.

---

## 8. Current data model summary

### User document

Stores:

- `uid`
- `email`
- `firstName`
- `lastName`
- `phoneNumber`
- `dateOfBirth`
- `gender`
- `role`
- `profileImage`
- `onboardingStatus`
- `onboardingStep`

### Patient document

Stores:

- `userId`
- `bloodGroup`
- `genotype`
- `height`
- `weight`
- `allergies`
- `chronicConditions`
- `address`
- `emergencyContact`

### Doctor document

Stores:

- `userId`
- `primarySpecialization`
- `specializations`
- `licenseNumber`
- `licensedSince`
- `specialistSince`
- `qualifications`
- `biography`
- `practiceType`
- `hospitalId`
- `practiceLocation`
- `consultationModes`
- `verificationStatus`

---

## 9. Current backend route inventory

These are the routes currently wired in the application:

- `GET /`
- `GET /api/auth/user`
- `POST /api/auth/user`
- `GET /api/profile`
- `POST /api/profile/onboarding`
- `PATCH /api/profile`

---

## 10. Notes for development

- The onboarding flow is currently driven through `POST /api/profile/onboarding`.
- The patch route is the authenticated profile update endpoint.
- The backend currently uses Firebase as the identity source and MongoDB as the persistence source.
- For frontend API integration, the React team should attach the Firebase token in the `Authorization` header for every protected request.
- Field like Onboarding step, User Id are not necessarily exposed to the frontend that is the request should not contain these fields. The backend will handle the logic of determining the current step and user id based on the authenticated Firebase token.
