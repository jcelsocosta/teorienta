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
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const passport_1 = __importDefault(require("passport"));
const user_1 = require("../controller/user");
// addUser
router.post('/register', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const user = req.body.user;
    const response = yield user_1.createUser(user);
    res.send(response);
}));
//Authenticate
router.post('/authenticate', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const response = yield user_1.authenticateUser({ username, password });
    res.send(response);
}));
//get Usuarios
router.post('/getUsers', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const response = yield user_1.listUser();
    res.send(response);
}));
//get email user
router.get('/listUserEmail', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const response = yield user_1.listUserEmail();
    res.send(response);
}));
//Profile
router.get('/profile', passport_1.default.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.body.user });
});
exports.default = router;
//# sourceMappingURL=user.js.map