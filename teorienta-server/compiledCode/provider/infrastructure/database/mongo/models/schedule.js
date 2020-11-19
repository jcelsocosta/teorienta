"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const ScheduleSchema = new mongoose_1.Schema({
    hour: {
        type: String
    },
    day: {
        type: Number
    },
    month: {
        type: String
    },
    year: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Schedule', ScheduleSchema);
//# sourceMappingURL=schedule.js.map