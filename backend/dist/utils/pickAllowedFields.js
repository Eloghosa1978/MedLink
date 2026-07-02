"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickAllowedFields = void 0;
const pickAllowedFields = (data, allowedFields) => {
    return allowedFields.reduce((result, field) => {
        if (field in data) {
            result[field] = data[field];
        }
        return result;
    }, {});
};
exports.pickAllowedFields = pickAllowedFields;
//# sourceMappingURL=pickAllowedFields.js.map