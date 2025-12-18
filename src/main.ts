import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: true, // Em produção, especifique domínios específicos
    credentials: true,
  });

  // Habilitar validação global
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  // Configuração do Swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('API de Tarefas (TODO List)')
    .setDescription('API para gerenciamento de tarefas da turma Infoweb 2025')
    .setVersion('1.0')
    .addTag('tasks')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, swaggerDocument);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`API rodando na porta ${port}`);
}
bootstrap();
