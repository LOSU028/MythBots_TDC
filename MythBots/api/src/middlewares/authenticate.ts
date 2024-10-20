import { Request, Response, NextFunction } from "express";
import { ResponseStatus } from "../utils/response-status";
import jwt from "jsonwebtoken";
import { parse } from "path";

export  interface AuthRequest extends Request{
    userId: string;
}

const authenticate = ( req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');

    if (!token){
        return res.status(ResponseStatus.UNAUTHORIZED).send("Authorization token is required");
    }

    try{
        const parsedText = token.split("")[1];
        const decoded = jwt.verify(parsedText, process.env.JWT_SECRET as string);
        const _request = req as AuthRequest;
        _request.userId = decoded.sub as string;

        next();

    }catch(error){
        return res.status(ResponseStatus.UNAUTHORIZED).send("Unauthorized");
    }
}

export default authenticate;