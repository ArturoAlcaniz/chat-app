import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    // Crea una instancia de la aplicación NestJS
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: 'http://localhost:3000', // Permite solicitudes desde el frontend
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true, // Permite enviar cookies y encabezados de autenticación
      });
      
    // Inicia el servidor en el puerto 3000
    await app.listen(3000);

    // Muestra un mensaje en la consola
    console.log('Servidor NestJS escuchando en http://localhost:3000');
}

// Ejecuta la función bootstrap para iniciar la aplicación
bootstrap();