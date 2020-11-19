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
const ManagementSchema = new mongoose_1.Schema({
    cpf: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    description: {
        type: String
    },
    address: {
        type: String
    },
    telefone: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Management', ManagementSchema);
//# sourceMappingURL=management.js.map