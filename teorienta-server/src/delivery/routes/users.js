const express = require('express')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')
const config = require('../../provider/infrastructure/database/mongo/config/config')

const User = require('../../provider/infrastructure/database/mongo/entities/user')

//Register 
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.user.name,
        email: req.body.user.email,
        username: req.body.user.username,
        password: req.body.user.password,
        userType: req.body.user.userType
    })

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to register user' })
        } else {
            res.json({ success: true, msg: 'User registered' })
        }
    })
})

//Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err
        if (!user) {
            return res.json({ success: false, msg: 'User not found' })
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err
            if (isMatch) {
                const token = jwt.sign({ data: user }, config.secret, {
                    expiresIn: 604800 // 1 week
                })

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        userType: user.userType
                    }
                })
            } else {
                return res.json({ success: false, msg: 'Wrong password.' })
            }
        })
    })


})

//Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user })
})

module.exports = router