import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto'; // Usamos crypto para encriptación manual

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    /**
     * Hashea una contraseña usando SHA-256.
     * @param password Contraseña en texto plano.
     * @returns Contraseña hasheada.
     */
    private hashPassword(password: string): string {
        return crypto
            .createHash('sha256') // Usamos SHA-256 para hashing
            .update(password)
            .digest('hex'); // Devuelve el hash en formato hexadecimal
    }

    /**
     * Valida las credenciales del usuario.
     * @param username Nombre de usuario.
     * @param password Contraseña en texto plano.
     * @returns El usuario si las credenciales son válidas, de lo contrario null.
     */
    async validateUser(username: string, password: string): Promise<any> {
        // Simulación de base de datos
        const user = {
            username: 'user',
            password: this.hashPassword('password'), // Hasheamos la contraseña manualmente
        };

        // Compara el nombre de usuario y el hash de la contraseña
        if (username === user.username && this.hashPassword(password) === user.password) {
            return user;
        }
        return null;
    }

    /**
     * Genera un token JWT para el usuario.
     * @param user Datos del usuario.
     * @returns Un objeto con el token de acceso.
     */
    async login(user: any) {
        const payload = { username: user.username };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}