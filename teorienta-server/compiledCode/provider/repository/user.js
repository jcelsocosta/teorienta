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
const user_1 = require("../infrastructure/database/mongo/user");
class CreateUserUseCaseRepository {
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_1.createUser(user);
        });
    }
}
exports.CreateUserUseCaseRepository = CreateUserUseCaseRepository;
class ListUserUseCaseRepository {
    listUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_1.listUser();
        });
    }
}
exports.ListUserUseCaseRepository = ListUserUseCaseRepository;
class ListUserEmailUseCaseRepository {
    listUserEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_1.listUserEmail();
        });
    }
}
exports.ListUserEmailUseCaseRepository = ListUserEmailUseCaseRepository;
class AuthenticateUserUseCaseRepository {
    authenticateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_1.authenticateUser(user);
        });
    }
}
exports.AuthenticateUserUseCaseRepository = AuthenticateUserUseCaseRepository;
//# sourceMappingURL=user.js.map