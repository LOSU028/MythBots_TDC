import { NextFunction, Request, Response } from "express";
import { ResponseStatus } from "../utils/response-status";
import User from "../models/userSchema";
import userSchema from "../models/userSchema";
import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { measureMemory } from "vm";

interface UserInterface {
    username: string;
    email: string;
    password: string;
}

const registerUser = async (req: Request, res: Response, next: NextFunction) => {
        const { username, email, password } = req.body;
        if( !username || !email || !password){
            return res.status(ResponseStatus.BAD_REQUEST).send('All fields are required');
        }

        let user = await User.findOne({ email });
        if (user) {
            return res.status(ResponseStatus.BAD_REQUEST).json({ error: 'User with that email already exists'});
        }

        try{
            user = new User( {
                username,
                email,
                password 
            });
    
            await user.save();

            return res.json({
                status: ResponseStatus.CREATED,
                message: 'User created',
                data:{_id: user._id, username: user.username, email: user.email }
            })
        }catch(error){
            return res.status(ResponseStatus.INTERNAL_SERVER_ERROR).send('Something went wrong'); 
        }
};

const loginUser = async(req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if( !username || !password){
        return res.status(ResponseStatus.BAD_REQUEST).send('All fields are required');
    }

    const user = await User.findOne({username});
    if (!user){
        return res.status(ResponseStatus.NOT_FOUND).send('User not found');
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch){
        return res.status(ResponseStatus.BAD_REQUEST).send('Incorrect credentials');
    }

    try{
        const token = sign({sub:user._id}, 
            process.env.JWT_SECRET as string, 
            { expiresIn : '1h'}
        );

        return res.status(ResponseStatus.OK).json({
            status: true,
            message: 'User logged in',
            data: {_id: user._id, username: user.username, email: user.email },
            token,
        })
    }catch(error){
        return res.status(ResponseStatus.INTERNAL_SERVER_ERROR).send('Something went wrong');
    }
}



export{
    loginUser,
    registerUser
};