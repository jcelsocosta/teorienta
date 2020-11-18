"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const config_1 = require("../config/config");
const PORT = config_1.Server.PORT;
const user_1 = __importDefault(require("../../delivery/routes/user"));
const announcements_1 = __importDefault(require("../../delivery/routes/announcements"));
const management_1 = __importDefault(require("../../delivery/routes/management"));
const form_1 = __importDefault(require("../../delivery/routes/form"));
const schedule_1 = __importDefault(require("../../delivery/routes/schedule"));
const email_1 = __importDefault(require("../../delivery/routes/email"));
const notification_1 = __importDefault(require("../../delivery/routes/notification"));
const server_1 = __importDefault(require("../../provider/infrastructure/database/mongo/cmd/server"));
const config_2 = __importDefault(require("../../provider/infrastructure/authentication/passport/connection/config"));
function server() {
    // Setup mongoose
    server_1.default.startDatabase();
    // CORS MIDDLEWARE
    app.use(cors_1.default());
    // Body Parser Middleware
    app.use(body_parser_1.default.json());
    // Passport Middleware
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    config_2.default(passport_1.default);
    // Set users routes
    app.use('/users', user_1.default);
    // Set announcements routes
    app.use('/announcements', announcements_1.default);
    // Set management routes
    app.use('/management', management_1.default);
    // Set form router
    app.use('/form', form_1.default);
    //Set schedule router
    app.use('/schedule', schedule_1.default);
    //Set email router
    app.use('/email', email_1.default);
    //set notification router
    app.use('/notification', notification_1.default);
    // Set static folder
    app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
    // Status route
    app.get("/status", (req, res) => {
        res.send('Server is online.');
    });
    // Start server
    app.listen(PORT, () => console.log("Server is online on port " + PORT));
}
exports.default = {
    server
};
//# sourceMappingURL=server.js.map