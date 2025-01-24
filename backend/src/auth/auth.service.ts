import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';
import { User } from '../user/user.entity';
import { LoginDto } from 'src/user/dto/login.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService, // Inyecta el UserService
    private jwtService: JwtService, // Inyecta el JwtService
  ) {}

  // Validar usuario (para login)
  async validateUser(loginDto: LoginDto): Promise<User | null> {
    const user = await this.userService.findOneByUsername(
      loginDto.username,
    );

    if (user && bcrypt.compareSync(loginDto.password, user.password)) {
      return user;
    }
    return null;
  }

  // Iniciar sesión
  async login(loginDto: LoginDto): Promise<{ access_token: string, username: string }> {
    const user = await this.validateUser(loginDto);
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Generar token JWT
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      username: user.username,
    };
  }

  // Registrar un nuevo usuario
  async register(registerDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userService.findOneByUsername(
      registerDto.username,
    );
    if (existingUser) {
      throw new UnauthorizedException('El nombre de usuario ya existe');
    }

    const newUser = await this.userService.create(
      registerDto,
    );

    return newUser;
  }
}