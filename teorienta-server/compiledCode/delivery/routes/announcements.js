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
const announcement_1 = require("../controller/announcement");
const announcement_2 = __importDefault(require("../../provider/infrastructure/database/mongo/models/announcement"));
const announcement_3 = require("../../provider/infrastructure/database/mongo/announcement");
exports.router.post('/announcements/createAnnouncement', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let newAnnouncement = new announcement_2.default({
        title: req.body.title,
        objective: req.body.objective,
        fomentation: req.body.fomentation,
        category: req.body.category,
        dateSubmission: req.body.dateSubmission,
        cnpj: req.body.cnpj,
        cpf: req.body.cpf,
        urlDocument: req.body.urlDocument,
        available: req.body.available,
        question: req.body.question
    });
    const response = yield announcement_1.createAnnouncement(newAnnouncement);
    res.send(response);
}));
exports.router.get("/announcements/announcements", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const response = yield announcement_1.listAnnouncements();
    res.send(response);
}));
exports.router.get("/announcements/oneAnnouncements/:objectId", (req, res) => __awaiter(this, void 0, void 0, function* () {
    let { objectId } = req.params;
    const response = yield announcement_1.listOneAnnouncements(objectId);
    res.send(response);
}));
exports.router.delete("/announcements/delete/:objectId", (req, res) => __awaiter(this, void 0, void 0, function* () {
    let { objectId } = req.params;
    const reponse = yield announcement_1.deleteAnnouncements(objectId);
    res.send(reponse);
}));
exports.router.put("/announcements/update", (req, res) => __awaiter(this, void 0, void 0, function* () {
    let newAnnouncement = new announcement_2.default({
        _id: req.body._id,
        title: req.body.title,
        objective: req.body.objective,
        fomentation: req.body.fomentation,
        category: req.body.category,
        dateSubmission: req.body.dateSubmission,
        cnpj: req.body.cnpj,
        cpf: req.body.cpf,
        urlDocument: req.body.urlDocument,
        available: req.body.available
    });
    const response = yield announcement_3.updateAnnouncements(newAnnouncement);
    res.send(response);
}));
exports.default = exports.router;
//# sourceMappingURL=announcements.js.map