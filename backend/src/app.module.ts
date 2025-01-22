import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { UsersModule } from './users/users.module'; // Importa el módulo de usuarios

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://mongo:27017/chatdb'), // Conexión a MongoDB
        AuthModule,
        ChatModule,
        UsersModule, // Agrega el módulo de usuarios
    ],
})
export class AppModule {}
