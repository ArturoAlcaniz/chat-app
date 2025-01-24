// backend/src/chat/chat.gateway.ts
import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MessageService } from './message.service';

@WebSocketGateway({
    cors: {
      origin: 'http://localhost:3000', // Permite conexiones desde el frontend
      methods: ['GET', 'POST'],
      credentials: true,
    },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  constructor(private messageService: MessageService) {}

  @SubscribeMessage('chatMessage')
  async handleMessage(@MessageBody() data: { content: string; username: string }) {
    const { content, username } = data;
    const message = await this.messageService.create(content, username);
    this.server.emit('chatMessage', message);
  }
}