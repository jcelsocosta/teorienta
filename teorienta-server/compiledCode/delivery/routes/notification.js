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
exports.router = express_1.default.Router();
const notification_1 = require("../controller/notification");
const notification_2 = __importDefault(require("../../provider/infrastructure/database/mongo/models/notification"));
exports.router.post('/notification/createNotification', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let newNotification = new notification_2.default({
        idAnnouncement: req.body.idAnnouncement,
        titleAnnouncement: req.body.titleAnnouncement,
        objectiveAnnouncement: req.body.objectiveAnnouncement,
        fomentationAnnouncement: req.body.fomentationAnnouncement,
        categoryAnnouncement: req.body.categoryAnnouncement,
        dateSubmissionAnnouncement: req.body.dateSubmissionAnnouncement,
        cnpjAnnouncement: req.body.cnpjAnnouncement,
        cpfAnnouncement: req.body.cpfAnnouncement,
        urlDocumentAnnouncement: req.body.urlDocumentAnnouncement,
        availableAnnouncement: req.body.availableAnnouncement,
        nameUser: req.body.nameUser,
        emailUser: req.body.emailUser,
        cpfUser: req.body.cpfUser,
        cnpjUser: req.body.cnpjUser,
        usernameUser: req.body.usernameUser
    });
    const response = yield notification_1.createNotification(newNotification);
    res.send(response);
}));
exports.router.get('/notification/notification', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const response = yield notification_1.listNotification();
    res.send(response);
}));
exports.router.get('/notification/oneNotification/:objectId', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let { objectId } = req.params;
    const response = yield notification_1.listOneNotification(objectId);
    res.send(response);
}));
exports.router.delete('/notification/delete/:objectId', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let { objectId } = req.params;
    const response = yield notification_1.deleteNotification(objectId);
    res.send(response);
}));
exports.default = exports.router;
//# sourceMappingURL=notification.js.map