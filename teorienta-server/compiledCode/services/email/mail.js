"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = __importStar(require("nodemailer"));
const config_1 = __importDefault(require("../config/config"));
class Mail {
    constructor(to, subject, message) {
        this.to = to;
        this.subject = subject;
        this.message = message;
    }
    sendEmail() {
        let mailOptions = {
            from: "teorienta422@gmail.com",
            to: this.to,
            subject: this.subject,
            html: this.message
        };
        const transporter = nodemailer.createTransport({
            host: config_1.default.host,
            port: config_1.default.port,
            secure: false,
            auth: {
                user: config_1.default.user,
                pass: config_1.default.password
            },
            tls: { rejectUnauthorized: false }
        });
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return error;
            }
            else {
                return "E-mail enviado com sucesso!";
            }
        });
    }
}
exports.default = new Mail;
//# sourceMappingURL=mail.js.map