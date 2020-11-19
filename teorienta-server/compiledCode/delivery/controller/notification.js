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
const notification_1 = require("../../provider/repository/notification");
const notification_2 = require("../../usecase/notification");
function createNotification(notification) {
    return __awaiter(this, void 0, void 0, function* () {
        const repository = new notification_1.CreateNotificationUseCaseRepository();
        const usecase = new notification_2.CreateNotificationUseCase(repository);
        return yield usecase.createNotification(notification);
    });
}
exports.createNotification = createNotification;
function listNotification() {
    return __awaiter(this, void 0, void 0, function* () {
        const repository = new notification_1.ListNotificationUseCaseRepository();
        const usecase = new notification_2.ListNotificationUseCase(repository);
        return yield usecase.listNotification();
    });
}
exports.listNotification = listNotification;
function listOneNotification(objectId) {
    return __awaiter(this, void 0, void 0, function* () {
        const repository = new notification_1.ListOneNotificationUseCaseRepository();
        const usecase = new notification_2.ListOneNotificationUseCase(repository);
        return yield usecase.listOneNotification(objectId);
    });
}
exports.listOneNotification = listOneNotification;
function deleteNotification(objectId) {
    return __awaiter(this, void 0, void 0, function* () {
        const repository = new notification_1.DeleteNotificationUseCaseRepository();
        const usecase = new notification_2.DeleteNotificationUseCase(repository);
        return yield usecase.deleteNotification(objectId);
    });
}
exports.deleteNotification = deleteNotification;
//# sourceMappingURL=notification.js.map