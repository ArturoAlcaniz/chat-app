import { Model } from 'mongoose';
import { Message } from './message.schema';
export declare class ChatService {
    private messageModel;
    constructor(messageModel: Model<Message>);
    saveMessage(username: string, message: string): Promise<void>;
    getMessages(): Promise<Message[]>;
}
