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
const schedule_1 = __importDefault(require("./models/schedule"));
function createSchedule(schedule) {
    return __awaiter(this, void 0, void 0, function* () {
        let newSchedule = new schedule_1.default({
            hour: schedule.hour,
            day: schedule.day,
            month: schedule.month,
            year: schedule.year
        });
        let response;
        response = yield schedule_1.default.create(newSchedule);
        /*
            .then((schedule: any) => {
                response = {success: true, message: "Schedule sucessfuly stored", schedule}
            }).catch((err) => {
                response = {success: false, message: "Failed to register a new schedule",err}
            })
            */
        return response;
    });
}
exports.createSchedule = createSchedule;
//# sourceMappingURL=schedule.js.map