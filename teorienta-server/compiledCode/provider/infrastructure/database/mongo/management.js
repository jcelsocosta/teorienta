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
const management_1 = __importDefault(require("./models/management"));
function createManagement(management) {
    return __awaiter(this, void 0, void 0, function* () {
        let newManagement = new management_1.default({
            cpf: management.cpf,
            name: management.name,
            email: management.email,
            description: management.description,
            address: management.address,
            telefone: management.telefone
        });
        let response;
        yield management_1.default.create(newManagement)
            .then((management) => {
            response = { success: true, message: 'Management successfully stored.', management };
        }).catch((err) => {
            response = { success: false, message: 'Failed to register a new management.', err };
        });
        return response;
    });
}
exports.createManagement = createManagement;
//# sourceMappingURL=management.js.map