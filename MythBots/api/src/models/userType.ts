import { Document } from "mongoose";

export interface IUser extends Document{
  _id: any;
  username: string;
  email: string;
  password: string;
}