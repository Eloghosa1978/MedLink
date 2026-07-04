import { UserDocument, UserModel } from "../../models/authModel";
import { PatientDocument, PatientModel } from "../../models/patientModel";
import { DoctorDocument, DoctorModel } from "../../models/doctorModel";
import { pickAllowedFields } from "../../utils/pickAllowedFields";
import { updateDocument } from "../../utils/updateDocument";
import { EDITABLE_FIELDS } from "../../constants/editableFields";
import { findUserById } from "../auth.service";

export const updateProfileService = async (
  user: UserDocument,
  body: Record<string, unknown>,
) => {
  const { userField, patient, doctor } = EDITABLE_FIELDS;
  const userData = pickAllowedFields(body, userField);
  const updatedUser = await updateDocument(
    UserModel,
    { _id: user._id },
    userData,
    {
      new: true,
      runValidators: true,
    },
  );

  const profileConfig = {
    patient: {
      model: PatientModel,
      fields: patient,
    },
    doctor: {
      model: DoctorModel,
      fields: doctor,
    },
  };
  // ensure correct key type for indexing profileConfig
  const role = user.role as keyof typeof profileConfig;
  const config = profileConfig[role];

  const profileData = pickAllowedFields(body, config.fields);
  const profile = await updateDocument<PatientDocument | DoctorDocument>(
    config.model,
    {
      userId: user._id,
    },
    profileData,
    {
      new: true,
      runValidators: true,
    },
  );

  return {
    user: updatedUser,
    profile,
  };
};
