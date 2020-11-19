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
class CreateAnnouncementUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    createAnnouncement(announcement) {
        return __awaiter(this, void 0, void 0, function* () {
            const useCaseResponse = yield this.repository.createAnnouncement(announcement);
            return useCaseResponse;
        });
    }
}
exports.CreateAnnouncementUseCase = CreateAnnouncementUseCase;
class ListAnnouncementsUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    listAnnouncements() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.listAnnouncements();
        });
    }
}
exports.ListAnnouncementsUseCase = ListAnnouncementsUseCase;
class ListOneAnnouncementsUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    listOneAnnouncements(objectId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.listOneAnnouncements(objectId);
        });
    }
}
exports.ListOneAnnouncementsUseCase = ListOneAnnouncementsUseCase;
class DeleteAnnouncementsUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    deleteAnnouncement(objectId) {
        return __awaiter(this, void 0, void 0, function* () {
            const useCaseResponseDelete = yield this.repository.deleteAnnouncements(objectId);
            return useCaseResponseDelete;
        });
    }
}
exports.DeleteAnnouncementsUseCase = DeleteAnnouncementsUseCase;
class UpdateAnnouncementsUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    updateAnnouncement(announcement) {
        return __awaiter(this, void 0, void 0, function* () {
            const useCaseResponseUpdate = yield this.repository.updateAnnouncements(announcement);
            return useCaseResponseUpdate;
        });
    }
}
exports.UpdateAnnouncementsUseCase = UpdateAnnouncementsUseCase;
//# sourceMappingURL=announcement.js.map