"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const passport_local_mongoose_1 = __importDefault(require("passport-local-mongoose"));
const Schema = mongoose_1.default.Schema;
const BusinessContactSchema = new Schema({
    name: String,
    email: String,
    contact: String
}, {
    collection: 'business_contacts'
});
BusinessContactSchema.plugin(passport_local_mongoose_1.default);
const Model = mongoose_1.default.model('BusinessContact', BusinessContactSchema);
exports.default = Model;
//# sourceMappingURL=business_contact.js.map