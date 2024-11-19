import { Request } from "express";
import multer, {FileFilterCallback} from "multer";
import { S3Client } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from 'uuid';
import multerS3 from 'multer-s3';
const dotenv = require('dotenv');
const aws = require('aws-sdk');

dotenv.config();

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const isValid = file.mimetype.startsWith('image/');
    cb(null, isValid);
}

aws.config.update({
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    accessKeyId: process.env.ACCESS_KEY_ID,
    sessionToken: process.env.AWS_SESSION_TOKEN,
    region: process.env.S3_REGION
});

const s3 = new aws.S3();

const upload = multer({
    fileFilter: fileFilter,
    storage: multerS3({
        s3:s3,
        bucket: process.env.AWS_BUCKET_NAME as string,
        key: (req, file, cb) => {
            const extension = file.originalname.split('.').pop();
            const filename = `${uuidv4()}.${extension}`;
            cb(null, filename);
        }
    })
})

export const uploadS3 = upload.array('files');
