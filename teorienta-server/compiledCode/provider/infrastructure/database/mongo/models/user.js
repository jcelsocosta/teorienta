"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
;
exports.UserSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    cnpj: { type: String },
    cpf: { type: String },
    password: { type: String, required: true },
    userType: { type: String, required: true },
    somethingElse: Number,
});
const User = mongoose_1.default.model('User', exports.UserSchema);
exports.default = User;
//# sourceMappingURL=user.js.map