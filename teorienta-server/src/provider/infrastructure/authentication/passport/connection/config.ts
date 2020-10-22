const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
import User from '../../../database/mongo/user'
import config from '../../../database/mongo/config/config'

export default function (passport) {
    let opts: any = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt")
    opts.secretOrKey = config.secret
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.getUser(jwt_payload.data._id, (err, user) => {
            if (err) {
                return done(err, false)
            }

            if (user) {
                return done(null, user)
            } else {
                return done(null, false)
            }
        })
    }))
}
