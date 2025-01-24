import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Registra la entidad User
  providers: [UserService], // Provee el UserService
  exports: [UserService], // Exporta el UserService para usarlo en otros módulos
})
export class UserModule {}