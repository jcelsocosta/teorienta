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
const notification_1 = require("../infrastructure/database/mongo/notification");
class CreateNotificationUseCaseRepository {
    createNotification(notification) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield notification_1.createNotification(notification);
        });
    }
}
exports.CreateNotificationUseCaseRepository = CreateNotificationUseCaseRepository;
class ListNotificationUseCaseRepository {
    listNotification() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield notification_1.listNotification();
        });
    }
}
exports.ListNotificationUseCaseRepository = ListNotificationUseCaseRepository;
class ListOneNotificationUseCaseRepository {
    listOneNotification(objectId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield notification_1.listOneNotification(objectId);
        });
    }
}
exports.ListOneNotificationUseCaseRepository = ListOneNotificationUseCaseRepository;
class DeleteNotificationUseCaseRepository {
    deleteNotification(objectId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield notification_1.deleteNotification(objectId);
        });
    }
}
exports.DeleteNotificationUseCaseRepository = DeleteNotificationUseCaseRepository;
//# sourceMappingURL=notification.js.map