import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
});

// Define User como una clase
export class User extends Document {
    username: string;
    email: string;
    password: string;
}