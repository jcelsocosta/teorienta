import express from 'express'
export const router = express.Router()

import { createAnnouncement, listAnnouncements, deleteAnnouncements } from '../controller/announcement'
import { json } from 'body-parser'
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

router.delete("/delete/:objectId", async(req: express.Request, res: express.Response)=>{
    let {objectId} = req.params;
    console.log(objectId);
    const reponse = await deleteAnnouncements(objectId);
    res.send(reponse);
})
router.put("/update", async(req:express.Request, res: express.Response)=>{
    console.log(req.body);
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
/*
// adding a announcement to the database
router.post('/createAnnouncement', async (req, res, next) => {

    let title = req.body.title
    let objective = req.body.objective
    let fomentation = req.body.fomentation
    let category =  req.body.category
    let dateSubmission = req.body.dateSubmission
    let cnpj = req.body.cnpj
    let cpf = req.body.cpf
    let urlDocument = req.body.urlDocument
    let available = req.body.available

    console.log({
        title,
        objective, 
        fomentation , 
        category, 
        dateSubmission,
        cnpj,
        cpf, 
        urlDocument, 
        available 
    })

    const response = await createAnnouncement({ title,objective, fomentation , category, dateSubmission, cnpj, cpf, urlDocument, available })

    res.send(response)
})

router.post("/announcements", async (req, res, next) => {

    const response = await listAnnouncements()

    res.send(response)
})
*/


export default router