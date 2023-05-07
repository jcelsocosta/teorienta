"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const app = express_1.default();
exports.app = app;
const options = {
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    allowedHeaders: ['x-requested-with, content-type', 'authorization', 'origin', 'accept', 'x-access-token'],
    credentials: true,
    maxAge: 86400,
    preflightContinue: true
};
app.use(cors_1.default(options));
app.options('*', cors_1.default(options));
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(routes_1.router);
//# sourceMappingURL=app.js.map