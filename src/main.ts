//import { ServeStaticModule } from '@nestjs/serve-static';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
