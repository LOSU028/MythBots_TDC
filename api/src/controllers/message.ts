import {io} from '../index'
import { NextFunction, Request, Response } from "express";

export const Message = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    io.send("message", req.body.message);
    console.log(req.body.message);
    res.send('success')
}