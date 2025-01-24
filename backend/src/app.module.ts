import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module'; // Importa el UserModule
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';
import { MessageModule } from './message/message.module';
import { Message } from './message/message.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USERNAME || 'user',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_DATABASE || 'chat_app',
      entities: [User, Message],
      synchronize: true, // Solo para desarrollo
    }),
    AuthModule, // Importa el AuthModule
    UserModule, // Importa el UserModule
    MessageModule, // Importa el MessageModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}