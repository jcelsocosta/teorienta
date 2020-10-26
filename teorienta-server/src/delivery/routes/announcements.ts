import express from 'express'
export const router = express.Router()

import { createAnnouncement, listAnnouncements } from '../controller/announcement'

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

export default router