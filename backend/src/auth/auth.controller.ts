import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginDto } from 'src/user/dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
      return this.authService.login(loginDto);
    }

    @Post('register')
    async register(@Body() registerDto: CreateUserDto) {
      return this.authService.register(registerDto);
    }
}