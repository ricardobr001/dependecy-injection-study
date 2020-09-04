import { NestFactory } from '@nestjs/core'
import { AppModule } from './appModule'
import { NODE_PORT } from './config/environment'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(NODE_PORT)
}

bootstrap()
