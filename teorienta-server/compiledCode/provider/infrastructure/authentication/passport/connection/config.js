"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const user_1 = __importDefault(require("../../../database/mongo/user"));
const config_1 = __importDefault(require("../../../database/mongo/config/config"));
function default_1(passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = config_1.default.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        user_1.default.getUser(jwt_payload.data._id, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        });
    }));
}
exports.default = default_1;
//# sourceMappingURL=config.js.map