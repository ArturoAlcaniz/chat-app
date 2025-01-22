import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './message.schema';

@Injectable()
export class ChatService {
  constructor(@InjectModel('Message') private messageModel: Model<Message>) {}

  async saveMessage(username: string, message: string): Promise<Message> {
    const newMessage = new this.messageModel({ username, message });
    return newMessage.save();
  }

  async getMessages(): Promise<Message[]> {
    return this.messageModel.find().sort({ timestamp: 1 }).exec(); // Ordena por fecha ascendente
  }
}