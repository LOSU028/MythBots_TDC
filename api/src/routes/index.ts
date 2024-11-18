import express from 'express';
import {uploadS3}  from '../middlewares/s3';
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

export default router;