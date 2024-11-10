import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import mongoose, { Schema, Document } from 'mongoose';
import {IUser} from './userType';


const userSchema = new mongoose.Schema<IUser>({
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: false  
    }
  });
  
userSchema.pre<IUser>('save', async function (next) {
  console.log('aqui');
  if (this.isModified('password') && this.password && typeof this.password === 'string') {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt); 
      next();
    } catch (error) {
      if ( error instanceof Error){
        next(error);  
      }
    }
  } else {
    next();
  }
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;