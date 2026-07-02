"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalModel = void 0;
const mongoose_1 = require("mongoose");
const hospitalSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    logo: String,
    phoneNumber: String,
    email: String,
    website: String,
}, {
    timestamps: true,
});
exports.HospitalModel = (0, mongoose_1.model)("Hospital", hospitalSchema);
//# sourceMappingURL=hospitalModel.js.map