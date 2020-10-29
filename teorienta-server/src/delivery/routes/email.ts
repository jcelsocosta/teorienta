import express from 'express';
import bodyParser from 'body-parser';
import Mail from '../../services/email/mail';
export const router = express.Router();



router.post('/sendEmail', async(req,res)=>{
    const message = Object.assign( {} , req.body);
    Mail.to = message.to;
    Mail.subject = message.subject;
    Mail.message = message.message;
    let result =  Mail.sendEmail();
    res.status(200).json({'result': result})

})
export default router;
