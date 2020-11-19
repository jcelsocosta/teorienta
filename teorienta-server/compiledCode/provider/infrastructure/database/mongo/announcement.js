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
const announcement_1 = __importDefault(require("./models/announcement"));
function createAnnouncement(announcement) {
    return __awaiter(this, void 0, void 0, function* () {
        let arrayCount = [];
        let len;
        arrayCount = yield announcement_1.default.find();
        len = arrayCount.length + 1;
        if (len == 0)
            len = 1;
        let newAnnouncement = new announcement_1.default({
            _id: len,
            title: announcement.title,
            objective: announcement.objective,
            fomentation: announcement.fomentation,
            category: announcement.category,
            dateSubmission: announcement.dateSubmission,
            cnpj: announcement.cnpj,
            cpf: announcement.cpf,
            urlDocument: announcement.urlDocument,
            available: announcement.available,
            question: announcement.question
        });
        let response;
        response = yield announcement_1.default.create(newAnnouncement);
        /*
             .then((announcement: any) => {
                 response = { success: true, message: 'Announcement successfully stored.', announcement }
             }).catch((err) => {
                 response = { success: false, message: 'Failed to register a new announcement.', err }
             })*/
        return response;
    });
}
exports.createAnnouncement = createAnnouncement;
function listAnnouncements() {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        response = yield announcement_1.default.find({});
        /*
        await Announcement.find({})
            .then((announcements) => {
                response = { success: true, message: 'Announcements obtained successfully.', announcements }
            }).catch((err) => {
                response = { success: false, message: 'Failed to get the announcements.', err }
            })
            */
        return response;
    });
}
exports.listAnnouncements = listAnnouncements;
function listOneAnnouncements(objectId) {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        response = yield announcement_1.default.find({ "title": objectId });
        return response;
    });
}
exports.listOneAnnouncements = listOneAnnouncements;
function deleteAnnouncements(objectId) {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        response = yield announcement_1.default.deleteOne({ "title": objectId });
        return response;
    });
}
exports.deleteAnnouncements = deleteAnnouncements;
function updateAnnouncements(announcement) {
    return __awaiter(this, void 0, void 0, function* () {
        let ObjectId = announcement._id;
        let newAnnouncement = {
            title: announcement.title,
            objective: announcement.objective,
            fomentation: announcement.fomentation,
            category: announcement.category,
            dateSubmission: announcement.dateSubmission,
            cnpj: announcement.cnpj,
            cpf: announcement.cpf,
            urlDocument: announcement.urlDocument,
            available: announcement.available,
            question: announcement.question
        };
        let response;
        response = yield announcement_1.default.update({ "_id": ObjectId }, { "title": newAnnouncement.title,
            "objective": newAnnouncement.objective,
            "fomentation": newAnnouncement.fomentation,
            "category": newAnnouncement.category,
            "dateSubmission": newAnnouncement.dateSubmission,
            "cnpj": newAnnouncement.cnpj,
            "cpf": newAnnouncement.cpf,
            "urlDocument": newAnnouncement.urlDocument,
            "available": newAnnouncement.available,
            "question": newAnnouncement.question
        });
        return response;
    });
}
exports.updateAnnouncements = updateAnnouncements;
//# sourceMappingURL=announcement.js.map