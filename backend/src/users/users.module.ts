import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User, UserSchema } from './user.schema'; // Importa la entidad/esquema de usuario

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // Registra el esquema de usuario
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Exporta el servicio si otros módulos lo necesitan
})
export class UsersModule {}