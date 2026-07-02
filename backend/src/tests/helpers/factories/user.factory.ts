import { UserModel, UserDocument } from "../../../models/authModel";

type CreateUserOptions = Partial<{
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "patient" | "doctor";
  onboardingStatus: "pending" | "completed" | "skipped";
  onboardingStep: number;
  phoneNumber: string;
}>;

export const createUser = async (
  overrides: CreateUserOptions = {},
): Promise<UserDocument> => {
  const user = await UserModel.create({
    uid: overrides.uid ?? crypto.randomUUID(),
    email: overrides.email ?? `user-${Date.now()}-${Math.random()}@test.com`,
    firstName: overrides.firstName ?? "John",
    lastName: overrides.lastName ?? "Doe",
    role: overrides.role ?? "patient",
    phoneNumber: overrides.phoneNumber ?? "08012345678",
    gender: "male",
    onboardingStatus: overrides.onboardingStatus ?? "pending",
    onboardingStep: overrides.onboardingStep ?? 0,
    isActive: true,
  });

  return user;
};
