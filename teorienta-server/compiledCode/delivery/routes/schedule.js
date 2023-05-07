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
exports.router = express_1.default.Router();
const schedule_1 = require("../controller/schedule");
exports.router.post('/schedule/createSchedule', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let hour = req.body.hour;
    let day = req.body.day;
    let month = req.body.month;
    let year = req.body.year;
    const response = yield schedule_1.createSchedule({ hour, day, month, year });
    res.send(response);
}));
exports.default = exports.router;
//# sourceMappingURL=schedule.js.map