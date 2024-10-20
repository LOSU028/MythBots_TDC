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

const registerUser = async (req: Request, res: Response) => {
    try {
        const { username, email, password }: UserInterface = req.body;

        console.log(`Registrando usuario: ${username}, Email: ${email}, Password: ${password}`);

        let user = await User.findOne({ email });
        if (user) {
            console.log(`El usuario con el email ${email} ya existe.`);
            return res.status(ResponseStatus.BAD_REQUEST).json({ msg: 'El usuario ya existe' });
        }

        user = new User({
            username,
            email,
            password 
        });

        await user.save();
        console.log(`Usuario ${username} creado exitosamente.`);
        res.status(ResponseStatus.CREATED).send("Usuario creado correctamente");
        //res.redirect('/login');
    } catch (err) {
        console.error('Error durante el registro:', err);
        res.status(ResponseStatus.INTERNAL_SERVER_ERROR).send('Error del servidor');
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