import express from 'express';
import {uploadS3}  from '../middlewares/s3';
import { Message } from '../controllers/message';
const router = express.Router();

router.post('/uploads', uploadS3, (req,res)=>{
    console.log(req.body)
    console.log('Archivos: ', req.files);
    if(req.files){
        res.status(200)
    }else{
        res.status(400).send('Error uploading files')
    }
})

router.post('/message', Message)

export default router;