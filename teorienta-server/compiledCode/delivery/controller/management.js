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
const management_1 = require("../../provider/repository/management");
const management_2 = require("../../usecase/management");
function createManagement(management) {
    return __awaiter(this, void 0, void 0, function* () {
        const repository = new management_1.CreateManagementUseCaseRepository();
        const usecase = new management_2.CreateManagementUseCase(repository);
        return yield usecase.createManagement(management);
    });
}
exports.createManagement = createManagement;
//# sourceMappingURL=management.js.map