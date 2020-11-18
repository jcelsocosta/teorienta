"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config/config"));
function startDatabase() {
    // Setup mongoose
    mongoose_1.default.connect(config_1.default.database, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose_1.default.connection.on('connected', () => {
        console.log('Connected to database ' + config_1.default.database);
    });
    mongoose_1.default.connection.on('error', (error) => {
        console.log('Database error: ' + error);
    });
}
exports.default = {
    startDatabase
};
//# sourceMappingURL=server.js.map