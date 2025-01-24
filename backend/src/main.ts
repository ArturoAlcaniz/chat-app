// main.ts (continuación)
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para el servidor HTTP
  app.enableCors({
    origin: 'http://localhost:3000', // Permite solicitudes desde el frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(3001); // Puerto del backend
}
bootstrap();