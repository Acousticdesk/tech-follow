import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
// todo akicha: choose between Prisma and TypeORM
// todo akicha: remove the direct connection through the mongodb driver
import { MongoClient } from 'mongodb';

// todo akicha: pass the url via environment variables
const url = 'mongodb://mongo:27017';
const client = new MongoClient(url);

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000);

  // todo akicha: move to a separate file or delete completely
  // todo akicha: setup a logger for the server
  try {
    await client.connect();
    console.log('Connected successfully to server');
  } catch (e) {
    console.error(e);
  }
}
bootstrap();
