import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ChatService } from './chat.service';

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

  constructor(private chatService: ChatService) {}

  @SubscribeMessage('chatMessage')
  async handleMessage(@MessageBody() data: { username: string; message: string }) {
    // Guarda el mensaje en la base de datos
    const savedMessage = await this.chatService.saveMessage(data.username, data.message);

    // Emite el mensaje a todos los clientes conectados
    this.server.emit('chatMessage', savedMessage);
  }
}