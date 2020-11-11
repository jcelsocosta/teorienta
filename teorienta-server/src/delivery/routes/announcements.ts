import express from 'express'
export const router = express.Router()

import { createAnnouncement, listAnnouncements,listOneAnnouncements, deleteAnnouncements } from '../controller/announcement'

import Announcement from '../../provider/infrastructure/database/mongo/models/announcement';
import { updateAnnouncements } from '../../provider/infrastructure/database/mongo/announcement';


router.post('/createAnnouncement',async(req: express.Request,res: express.Response)=>{
    let newAnnouncement = new Announcement({
        title: req.body.title,
        objective: req.body.objective ,
        fomentation: req.body.fomentation ,
        category: req.body.category ,
        dateSubmission: req.body.dateSubmission ,
        cnpj: req.body.cnpj,
        cpf: req.body.cpf,
        urlDocument: req.body.urlDocument,
        available: req.body.available
    })
    const response = await createAnnouncement(newAnnouncement);

    res.send(response) 
})

router.get("/announcements", async(req: express.Request,res:express.Response) =>{
    const response = await listAnnouncements();
    res.send(response);
})

router.get("/OneAnnouncements/:objectId", async(req: express.Request, res: express.Response)=>{
    let {objectId} = req.params;
    const response = await listOneAnnouncements(objectId);
    res.send(response);

})

router.delete("/delete/:objectId", async(req: express.Request, res: express.Response)=>{
    let {objectId} = req.params;
    const reponse = await deleteAnnouncements(objectId);
    res.send(reponse);
})

router.put("/update", async(req:express.Request, res: express.Response)=>{
    let newAnnouncement = new Announcement({
        _id: req.body._id,
        title: req.body.title,
        objective: req.body.objective ,
        fomentation: req.body.fomentation ,
        category: req.body.category ,
        dateSubmission: req.body.dateSubmission ,
        cnpj: req.body.cnpj,
        cpf: req.body.cpf,
        urlDocument: req.body.urlDocument,
        available: req.body.available
    })

    const response = await updateAnnouncements(newAnnouncement);
    res.send(response);
})


export default router