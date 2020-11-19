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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../provider/infrastructure/database/mongo/config/config"));
class CreateUserUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const useCaseResponse = yield this.repository.createUser(user);
            return useCaseResponse;
        });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
class ListUserEmailUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    listUserEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.listUserEmail();
        });
    }
}
exports.ListUserEmailUseCase = ListUserEmailUseCase;
class ListUserUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    listUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.listUser();
        });
    }
}
exports.ListUserUseCase = ListUserUseCase;
class AuthenticateUserUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    authenticateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userResponse = yield this.repository.authenticateUser(user);
            if (userResponse.success) {
                let user = userResponse.user;
                const token = jsonwebtoken_1.default.sign({ data: user }, config_1.default.secret, {
                    expiresIn: 604800 // 1 week
                });
                const response = {
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                        cpf: user.cpf,
                        cnpj: user.cnpj,
                        username: user.username,
                        userType: user.userType
                    }
                };
                return response;
            }
            return userResponse;
        });
    }
}
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;
//# sourceMappingURL=user.js.map