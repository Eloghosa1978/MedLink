"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.findUserById = void 0;
const authModel_1 = require("../models/authModel");
const findUserById = async (uid) => {
    return await authModel_1.UserModel.findOne({ uid });
};
exports.findUserById = findUserById;
const createUser = async ({ uid, email, firstName, lastName, role, }) => {
    return authModel_1.UserModel.create({
        uid,
        email,
        firstName,
        lastName,
        role,
    });
};
exports.createUser = createUser;
//# sourceMappingURL=auth.service.js.map