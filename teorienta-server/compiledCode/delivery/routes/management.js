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
const management_1 = require("../controller/management");
router.post('/createManagement', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const cpf = req.body.cpf;
    const name = req.body.name;
    const email = req.body.email;
    const description = req.body.description;
    const address = req.body.address;
    const telefone = req.body.telefone;
    res.send(yield management_1.createManagement({ cpf, name, email, description, address, telefone }));
}));
exports.default = router;
//# sourceMappingURL=management.js.map