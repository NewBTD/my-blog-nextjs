import { Document } from "mongodb";

export interface UserType extends Document {
    name: string;
    email: string;
    password: string;
    confirmedPassword?: string;
  }