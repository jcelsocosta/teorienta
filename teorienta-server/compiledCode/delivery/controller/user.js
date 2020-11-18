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
const user_1 = require("../../provider/repository/user");
const user_2 = require("../../usecase/user");
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const repository = new user_1.CreateUserUseCaseRepository();
        const usecase = new user_2.CreateUserUseCase(repository);
        return yield usecase.createUser(user);
    });
}
exports.createUser = createUser;
function listUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const repository = new user_1.ListUserUseCaseRepository();
        const usecase = new user_2.ListUserUseCase(repository);
        return yield usecase.listUser();
    });
}
exports.listUser = listUser;
function listUserEmail() {
    return __awaiter(this, void 0, void 0, function* () {
        const repository = new user_1.ListUserEmailUseCaseRepository();
        const usecase = new user_2.ListUserEmailUseCase(repository);
        return yield usecase.listUserEmail();
    });
}
exports.listUserEmail = listUserEmail;
function authenticateUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const repository = new user_1.AuthenticateUserUseCaseRepository();
        const usecase = new user_2.AuthenticateUserUseCase(repository);
        return yield usecase.authenticateUser(user);
    });
}
exports.authenticateUser = authenticateUser;
//# sourceMappingURL=user.js.map