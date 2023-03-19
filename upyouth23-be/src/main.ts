import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import cors
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // use cors
  app.use(cors());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3333);
}
bootstrap();
