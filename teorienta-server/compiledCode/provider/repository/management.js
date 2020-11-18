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
const management_1 = require("../infrastructure/database/mongo/management");
class CreateManagementUseCaseRepository {
    createManagement(management) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield management_1.createManagement(management);
        });
    }
}
exports.CreateManagementUseCaseRepository = CreateManagementUseCaseRepository;
//# sourceMappingURL=management.js.map