// backend/src/message/message.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './message.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
    private userService: UserService, // Inyecta el UserService
  ) {}

  // Obtener todos los mensajes
  async findAll(): Promise<Message[]> {
    return this.messageRepository.find({ relations: ['user'] });
  }

  // Crear un nuevo mensaje
  async create(content: string, username: string): Promise<Message> {
    const user = await this.userService.findOneByUsername(
      username,
    );
    const message = this.messageRepository.create({
      content,
      user,
      username,
      timestamp: new Date(),
    });
    return this.messageRepository.save(message);
  }
}