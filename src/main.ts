import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // adiciona class-validator
  await app.listen(process.env.PORT ?? 3000);
  console.log(`🚀 App rodando na porta ${port}`);
}
bootstrap();
