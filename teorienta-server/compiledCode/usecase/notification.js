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
class CreateNotificationUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    createNotification(notification) {
        return __awaiter(this, void 0, void 0, function* () {
            const useCaseResponse = yield this.repository.createNotification(notification);
            return useCaseResponse;
        });
    }
}
exports.CreateNotificationUseCase = CreateNotificationUseCase;
class ListOneNotificationUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    listOneNotification(objectId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.listOneNotification(objectId);
        });
    }
}
exports.ListOneNotificationUseCase = ListOneNotificationUseCase;
class ListNotificationUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    listNotification() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.listNotification();
        });
    }
}
exports.ListNotificationUseCase = ListNotificationUseCase;
class DeleteNotificationUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    deleteNotification(objectId) {
        return __awaiter(this, void 0, void 0, function* () {
            const useCaseResponseDelete = yield this.repository.deleteNotification(objectId);
            return useCaseResponseDelete;
        });
    }
}
exports.DeleteNotificationUseCase = DeleteNotificationUseCase;
//# sourceMappingURL=notification.js.map