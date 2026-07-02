"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDocument = void 0;
const updateDocument = async (model, filter, update, options) => {
    if (Object.keys(update).length === 0) {
        return await model.findOne(filter);
    }
    const finalOptions = {
        ...options,
        ...(options?.new && { returnDocument: "after" }),
    };
    delete finalOptions.new;
    return await model.findOneAndUpdate(filter, {
        $set: update,
    }, finalOptions);
};
exports.updateDocument = updateDocument;
//# sourceMappingURL=updateDocument.js.map