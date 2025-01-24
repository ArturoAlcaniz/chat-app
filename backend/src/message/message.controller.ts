// backend/src/message/message.controller.ts
import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { MessageService } from './message.service';
import { User } from '../user/user.entity';
import { Request } from 'express';

@Controller('messages')
export class MessageController {
  constructor(private messageService: MessageService) {}

  // Obtener todos los mensajes
  @Get()
  async findAll() {
    return this.messageService.findAll();
  }

  // Crear un nuevo mensaje
  @Post()
  async create(@Body('content') content: string, @Req() req: Request) {
    const user = req.user as User; // Suponiendo que el usuario está en la solicitud (usando un guard de autenticación)
    return this.messageService.create(content, user.username);
  }
}