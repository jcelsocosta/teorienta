import express from 'express'
const router = express.Router()
import passport from 'passport'
import { createUser, authenticateUser, listUser,listUserEmail } from '../controller/user'

// addUser
router.post('/users/register', async (req, res, next) => {
    const user = req.body.user

    const response = await createUser(user)
    
    res.send(response)
})

//Authenticate
router.post('/users/authenticate', async (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    const response = await authenticateUser({ username, password })

    res.send(response)

})
//get Usuarios
router.post('/users/getUsers',async(req,res:express.Response)=>{
    const response = await listUser();
    res.send(response);
})
//get email user

router.get('/users/listUserEmail', async(req: express.Request, res: express.Response)=>{
    const response = await listUserEmail();
    
    res.send(response);
})

//Profile
router.get('/users/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
   
    res.json({user: req.body.user})
})

export default router