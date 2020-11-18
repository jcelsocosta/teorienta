"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const announcement_1 = require("../../provider/repository/announcement");
const announcement_2 = require("../../usecase/announcement");
function createAnnouncement(announcement) {
    return __awaiter(this, void 0, void 0, function* () {
        const repository = new announcement_1.CreateAnnouncementUseCaseRepository();
        const usecase = new announcement_2.CreateAnnouncementUseCase(repository);
        return yield usecase.createAnnouncement(announcement);
    });
}
exports.createAnnouncement = createAnnouncement;
function listAnnouncements() {
    return __awaiter(this, void 0, void 0, function* () {
        const repository = new announcement_1.ListAnnouncementsUseCaseRepository();
        const usecase = new announcement_2.ListAnnouncementsUseCase(repository);
        return yield usecase.listAnnouncements();
    });
}
exports.listAnnouncements = listAnnouncements;
function listOneAnnouncements(objectId) {
    return __awaiter(this, void 0, void 0, function* () {
        const repository = new announcement_1.ListOneAnnouncementsUseCaseRepository();
        const usecase = new announcement_2.ListOneAnnouncementsUseCase(repository);
        return yield usecase.listOneAnnouncements(objectId);
    });
}
exports.listOneAnnouncements = listOneAnnouncements;
function deleteAnnouncements(objectId) {
    return __awaiter(this, void 0, void 0, function* () {
        const repository = new announcement_1.DeleteAnnouncementsUseCaseRepository();
        const usecase = new announcement_2.DeleteAnnouncementsUseCase(repository);
        return yield usecase.deleteAnnouncement(objectId);
    });
}
exports.deleteAnnouncements = deleteAnnouncements;
function updateAnnouncements(announcement) {
    return __awaiter(this, void 0, void 0, function* () {
        const repository = new announcement_1.UpdateAnnouncementsUseCaseRepository();
        const usecase = new announcement_2.UpdateAnnouncementsUseCase(repository);
        return yield usecase.updateAnnouncement(announcement);
    });
}
exports.updateAnnouncements = updateAnnouncements;
//# sourceMappingURL=announcement.js.map