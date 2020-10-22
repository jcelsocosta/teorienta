import express from 'express'
export const router = express.Router()

import { createAnnouncement, listAnnouncements } from '../controller/announcement'

// adding a announcement to the database
router.post("/createAnnouncement", async (req, res, next) => {

    let title = req.body.title
    let urlDocument = req.body.urlDocument
    let available = req.body.available

    console.log({
        title,
        urlDocument,
        available
    })

    const response = await createAnnouncement({ title, urlDocument, available })

    res.send(response)
})

router.post("/announcements", async (req, res, next) => {

    const response = await listAnnouncements()

    res.send(response)
})

export default router