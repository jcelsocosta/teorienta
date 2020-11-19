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
const schedule_1 = require("../../provider/repository/schedule");
const schedule_2 = require("../../usecase/schedule");
function createSchedule(schedule) {
    return __awaiter(this, void 0, void 0, function* () {
        const repository = new schedule_1.CreateScheduleUseCaseRepository();
        const usecase = new schedule_2.CreateScheduleUseCase(repository);
        return yield usecase.createSchedule(schedule);
    });
}
exports.createSchedule = createSchedule;
//# sourceMappingURL=schedule.js.map