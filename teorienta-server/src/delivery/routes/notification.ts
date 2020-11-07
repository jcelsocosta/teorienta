import express from 'express';
export  const router = express.Router();


import {createNotification,deleteNotification,listNotification} from '../controller/notification'

import Notification from '../../provider/infrastructure/database/mongo/models/notification';

router.post('/createNotification', async(req: express.Request, res:express.Response)=>{
   
    let newNotification = new Notification({
        idAnnouncement:req.body.idAnnouncement,
        titleAnnouncement: req.body.titleAnnouncement,
        objectiveAnnouncement: req.body.objectiveAnnouncement,
        fomentationAnnouncement: req.body.fomentationAnnouncement,
        categoryAnnouncement: req.body.categoryAnnouncement,
        dateSubmissionAnnouncement: req.body.dateSubmissionAnnouncement,
        cnpjAnnouncement: req.body.cnpjAnnouncement,
        cpfAnnouncement: req.body.cpfAnnouncement,
        urlDocumentAnnouncement: req.body.urlDocumentAnnouncement,
        availableAnnouncement: req.body.availableAnnouncement,

        nameUser: req.body.nameUser,
        emailUser:req.body.emailUser,
        cpfUser: req.body.cpfUser,
        cnpjUser: req.body.cnpjUser,
        usernameUser: req.body.usernameUser
    })
    const response = await createNotification(newNotification);
    res.send(response);
})

router.get('/notification',async(req: express.Request, res: express.Response)=>{
    const response = await listNotification();
    res.send(response);
})

router.delete('/delete/:objectId', async(req: express.Request, res: express.Response)=>{
    let {objectId} = req.params;
    const response = await deleteNotification(objectId);
    res.send(response);
})
export default router