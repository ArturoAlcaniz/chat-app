// backend/src/message/message.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { Message } from './message.entity';
import { UserModule } from '../user/user.module';
import { ChatGateway } from './chat.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Message]), UserModule],
  controllers: [MessageController],
  providers: [MessageService, ChatGateway],
  exports: [MessageService],
})
export class MessageModule {}