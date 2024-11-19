import express from 'express';
import {uploadS3}  from '../middlewares/s3';
import { Message } from '../controllers/message';
const router = express.Router();

router.post('/uploads', uploadS3 , (req,res)=>{
    console.log(req.body)
    console.log('Archivo: ', req.file);
    if(req.file){
        res.send('File uploaded succesfully')
    }else{
        res.status(400).send('File not supported')
    }
})

router.post('/message', Message)

export default router;