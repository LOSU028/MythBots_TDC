import { Request } from "express";
import multer, {FileFilterCallback} from "multer";
import { S3Client } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from 'uuid';
import multerS3 from 'multer-s3';

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const isValid = file.mimetype.startsWith('image/');
    cb(null, isValid);
}

const accessKey = process.env.S3_ACCESS_KEY;
const secretKey = process.env.S3_SECRET_KEY;
const region = process.env.S3_REGION;

const s3Client = new S3Client({
    region,
    credentials: {
        accessKeyId: accessKey!,
        secretAccessKey: secretKey || ''
    }
});

const upload = multer({
    fileFilter: fileFilter,
    storage: multerS3({
        s3:s3Client,
        bucket: process.env.AWS_BUCKET_NAME as string,
        key: (req, file, cb) => {
            const extension = file.originalname.split('.').pop();
            const filename = `${uuidv4()}.${extension}`;
            cb(null, filename);
        }
    })
})

const uploadS3 = multer({ fileFilter});