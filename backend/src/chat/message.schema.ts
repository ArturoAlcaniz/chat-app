import { Schema, Document } from 'mongoose';

export const MessageSchema = new Schema({
  username: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

// Define Message como una clase
export class Message extends Document {
  username: string;
  message: string;
  timestamp: Date;
}