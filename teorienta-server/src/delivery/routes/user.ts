import express from 'express'
const router = express.Router()
import passport from 'passport'
import { createUser, authenticateUser } from '../controller/user'

// addUser
router.post('/register', async (req, res, next) => {    
    const user = req.body.user
    
    const response = await createUser(user)

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
    res.json({ user: req.body.user })
})

export default router