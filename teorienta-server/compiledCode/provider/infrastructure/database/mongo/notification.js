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
const notification_1 = __importDefault(require("../mongo/models/notification"));
function createNotification(notitication) {
    return __awaiter(this, void 0, void 0, function* () {
        let arrayCount = [];
        let len;
        arrayCount = yield notification_1.default.find();
        len = arrayCount.length + 1;
        if (len == 0)
            len = 1;
        let newNotification = new notification_1.default({
            _id: len,
            idAnnouncement: notitication.idAnnouncement,
            titleAnnouncement: notitication.titleAnnouncement,
            objectiveAnnouncement: notitication.objectiveAnnouncement,
            fomentationAnnouncement: notitication.fomentationAnnouncement,
            categoryAnnouncement: notitication.categoryAnnouncement,
            dateSubmissionAnnouncement: notitication.dateSubmissionAnnouncement,
            cnpjAnnouncement: notitication.cnpjAnnouncement,
            cpfAnnouncement: notitication.cpfAnnouncement,
            urlDocumentAnnouncement: notitication.urlDocumentAnnouncement,
            availableAnnouncement: notitication.availableAnnouncement,
            nameUser: notitication.nameUser,
            emailUser: notitication.emailUser,
            cpfUser: notitication.cpfUser,
            cnpjUser: notitication.cnpjUser,
            usernameUser: notitication.usernameUser
        });
        let response;
        response = yield notification_1.default.create(newNotification);
        return response;
    });
}
exports.createNotification = createNotification;
function deleteNotification(objectId) {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        response = yield notification_1.default.deleteOne({ "_id": objectId });
        return response;
    });
}
exports.deleteNotification = deleteNotification;
function listNotification() {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        response = yield notification_1.default.find({});
        return response;
    });
}
exports.listNotification = listNotification;
function listOneNotification(objectId) {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        response = yield notification_1.default.find({ "titleAnnouncement": objectId });
        return response;
    });
}
exports.listOneNotification = listOneNotification;
//# sourceMappingURL=notification.js.map