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
const user_1 = __importDefault(require("./models/user"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        let newUser = new user_1.default({
            name: user.name,
            email: user.email,
            cpf: user.cpf,
            cnpfj: user.cnpj,
            username: user.username,
            password: user.password,
            userType: user.userType
        });
        let response;
        const salt = bcryptjs_1.default.genSaltSync(10);
        const hash = bcryptjs_1.default.hashSync(newUser.password, salt);
        newUser.password = hash;
        yield user_1.default.create(newUser)
            .then((user) => {
            response = { success: true, message: 'User successfully stored.', user };
        }).catch((err) => {
            response = { success: false, message: 'Failed to register a new user.', err };
        });
        return response;
    });
}
exports.createUser = createUser;
function getUser(ID, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield user_1.default.findById(ID);
        return response;
    });
}
function getUserByUsername(username) {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        yield user_1.default.findOne({ username }).
            then((user) => {
            response = { success: true, message: 'Usuário Encontrado', user };
        }).catch((err) => {
            response = { success: false, message: 'Usuário não encontrado', err };
        });
        return response;
    });
}
function listUserEmail() {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        response = yield user_1.default.find({ "userType": 2 }, { "email": "" });
        return response;
    });
}
exports.listUserEmail = listUserEmail;
function listUser() {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        yield user_1.default.find({})
            .then((user) => {
            response = { success: true, message: 'Announcements obtained successfully.', user };
        }).catch((err) => {
            response = { success: false, message: 'Failed to get the announcements.', err };
        });
        return response;
    });
}
exports.listUser = listUser;
function authenticateUser({ username, password }) {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        yield user_1.default.findOne({ username }).
            then((user) => {
            response = { success: true, message: 'Usuário Encontrado', user };
        }).catch((err) => {
            response = { success: false, message: 'Usuário não encontrado', err };
        });
        let user = response.user;
        if (bcryptjs_1.default.compareSync(password, user.password)) {
            delete user.password;
            return response;
        }
        else {
            return { success: false, message: 'Senha incorreta' };
        }
    });
}
exports.authenticateUser = authenticateUser;
exports.default = {
    getUserByUsername,
    getUser
};
//# sourceMappingURL=user.js.map