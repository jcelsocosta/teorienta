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
const form_1 = __importDefault(require("./models/form"));
function createForm(form) {
    return __awaiter(this, void 0, void 0, function* () {
        let newForm = new form_1.default({
            question: form.question,
            answer: form.answer
        });
        let response;
        response = yield form_1.default.create(newForm);
        /*
            .then((form) => {
                response = { success: true, message: 'Form successfully stored.', form }
            }).catch((err) => {
                response = { success: false, message: 'Failed to register a new form.', err }
            })*/
        return response;
    });
}
exports.createForm = createForm;
//# sourceMappingURL=form.js.map