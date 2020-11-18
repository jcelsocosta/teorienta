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
const NotificationSchema = new mongoose_1.Schema({
    _id: {
        type: Number,
        require: true
    },
    idAnnouncement: {
        type: Number
    },
    titleAnnouncement: {
        type: String
    },
    objectiveAnnouncement: {
        type: String,
        required: false
    },
    fomentationAnnouncement: {
        type: Number,
        required: false
    },
    categoryAnnouncement: {
        type: String,
        required: false
    },
    dateSubmissionAnnouncement: {
        type: String,
        required: false
    },
    cnpjAnnouncement: {
        type: String,
        required: false
    },
    cpfAnnouncement: {
        type: String,
        required: false
    },
    urlDocumentAnnouncement: {
        type: String,
        required: false
    },
    availableAnnouncement: {
        type: Boolean,
        required: false
    },
    nameUser: {
        type: String,
        required: false
    },
    emailUser: {
        type: String,
        required: false
    },
    cpfUser: {
        type: String
    },
    cnpjUser: {
        type: String
    },
    usernameUser: {
        type: String,
        required: false
    }
});
exports.default = mongoose_1.default.model('Notification', NotificationSchema);
//# sourceMappingURL=notification.js.map