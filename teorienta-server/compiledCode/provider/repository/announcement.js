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
const announcement_1 = require("../infrastructure/database/mongo/announcement");
class CreateAnnouncementUseCaseRepository {
    createAnnouncement(announcement) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield announcement_1.createAnnouncement(announcement);
        });
    }
}
exports.CreateAnnouncementUseCaseRepository = CreateAnnouncementUseCaseRepository;
class ListAnnouncementsUseCaseRepository {
    listAnnouncements() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield announcement_1.listAnnouncements();
        });
    }
}
exports.ListAnnouncementsUseCaseRepository = ListAnnouncementsUseCaseRepository;
class ListOneAnnouncementsUseCaseRepository {
    listOneAnnouncements(objectId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield announcement_1.listOneAnnouncements(objectId);
        });
    }
}
exports.ListOneAnnouncementsUseCaseRepository = ListOneAnnouncementsUseCaseRepository;
class DeleteAnnouncementsUseCaseRepository {
    deleteAnnouncements(objectId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield announcement_1.deleteAnnouncements(objectId);
        });
    }
}
exports.DeleteAnnouncementsUseCaseRepository = DeleteAnnouncementsUseCaseRepository;
class UpdateAnnouncementsUseCaseRepository {
    updateAnnouncements(announcement) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield announcement_1.updateAnnouncements(announcement);
        });
    }
}
exports.UpdateAnnouncementsUseCaseRepository = UpdateAnnouncementsUseCaseRepository;
//# sourceMappingURL=announcement.js.map