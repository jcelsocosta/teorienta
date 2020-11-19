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
const form_1 = require("../../provider/repository/form");
const form_2 = require("../../usecase/form");
function createForm(form) {
    return __awaiter(this, void 0, void 0, function* () {
        const repository = new form_1.CreateFormUseCaseRepository();
        const usecase = new form_2.CreateFormUseCase(repository);
        return yield usecase.createForm(form);
    });
}
exports.createForm = createForm;
//# sourceMappingURL=form.js.map