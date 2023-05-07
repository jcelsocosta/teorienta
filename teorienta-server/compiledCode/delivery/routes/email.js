"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mail_1 = __importDefault(require("../../services/email/mail"));
exports.router = express_1.default.Router();
exports.router.post('/email//sendEmail', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const message = Object.assign({}, req.body);
    mail_1.default.to = message.to;
    mail_1.default.subject = message.subject;
    mail_1.default.message = message.message;
    let result = mail_1.default.sendEmail();
    res.send(result).status(200);
}));
exports.default = exports.router;
//# sourceMappingURL=email.js.map