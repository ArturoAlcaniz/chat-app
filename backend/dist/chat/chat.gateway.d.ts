import { Server } from 'socket.io';
import { ChatService } from './chat.service';
export declare class ChatGateway {
    private chatService;
    server: Server;
    constructor(chatService: ChatService);
    handleMessage(data: {
        username: string;
        message: string;
    }): Promise<void>;
}
