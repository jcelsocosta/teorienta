import express from 'express'
export const router = express.Router()


import { createSchedule } from '../controller/schedule'



router.post('/schedule/createSchedule', async (req,res) => {
    
    let hour = req.body.hour;
    let day = req.body.day;
    let month = req.body.month;
    let year = req.body.year

    const response = await createSchedule({ hour,day,month,year})
    res.send(response);
    
})

export default router

