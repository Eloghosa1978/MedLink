"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfileService = void 0;
const authModel_1 = require("../../models/authModel");
const patientModel_1 = require("../../models/patientModel");
const doctorModel_1 = require("../../models/doctorModel");
const pickAllowedFields_1 = require("../../utils/pickAllowedFields");
const updateDocument_1 = require("../../utils/updateDocument");
const editableFields_1 = require("../../constants/editableFields");
const updateProfileService = async (user, body) => {
    const { userField, patient, doctor } = editableFields_1.EDITABLE_FIELDS;
    const userData = (0, pickAllowedFields_1.pickAllowedFields)(body, userField);
    const updatedUser = await (0, updateDocument_1.updateDocument)(authModel_1.UserModel, { _id: user._id }, userData, {
        new: true,
        runValidators: true,
    });
    const profileConfig = {
        patient: {
            model: patientModel_1.PatientModel,
            fields: patient,
        },
        doctor: {
            model: doctorModel_1.DoctorModel,
            fields: doctor,
        },
    };
    // ensure correct key type for indexing profileConfig
    const role = user.role;
    const config = profileConfig[role];
    const profileData = (0, pickAllowedFields_1.pickAllowedFields)(body, config.fields);
    const profile = await (0, updateDocument_1.updateDocument)(config.model, {
        userId: user._id,
    }, profileData, {
        new: true,
        runValidators: true,
    });
    return {
        user: updatedUser,
        profile,
    };
};
exports.updateProfileService = updateProfileService;
//# sourceMappingURL=updateProfile.service.js.map