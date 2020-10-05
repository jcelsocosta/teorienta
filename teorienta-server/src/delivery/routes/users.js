const express = require('express')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')
const config = require('../../provider/infrastructure/database/mongo/config/config')
const { createUser, authenticateUser } = require('../controller/user')

const User = require('../../provider/infrastructure/database/mongo/entities/user')

// addUser
router.post('/register', async (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password
    const userType = req.body.userType

    const response = await createUser({ name, email, username, password, userType })

    res.send(response)
})

//Authenticate
router.post('/authenticate', async (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    const response = await authenticateUser({ username, password })

    res.send(response)

})

//Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user })
})

module.exports = router