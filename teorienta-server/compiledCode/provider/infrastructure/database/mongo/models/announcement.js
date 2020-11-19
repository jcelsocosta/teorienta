"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
// Announcement Schema
const AnnouncementSchema = new mongoose_1.Schema({
    _id: {
        type: Number,
        required: true
    },
    title: {
        type: String
    },
    objective: {
        type: String,
        required: true
    },
    fomentation: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dateSubmission: {
        type: String,
        required: true
    },
    cnpj: {
        type: String,
        required: false
    },
    cpf: {
        type: String,
        required: false
    },
    urlDocument: {
        type: String
    },
    available: {
        type: Boolean
    },
    question: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Announcement', AnnouncementSchema);
//# sourceMappingURL=announcement.js.map