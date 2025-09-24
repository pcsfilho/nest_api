import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { PrismaModule } from "src/prisma/prisma.model";
import { UserIdCheckMiddleware } from "src/middlewares/user-id-check.middleware";

@Module({
  imports: [PrismaModule], // modulos que são importados
  controllers: [UserController], // o user.module possui como recurso o user.controller
  providers: [UserService], // classes que provem os serviços, ou seja quem podem ser injetadas. Possui um decorator dentro delas
  exports: [], // recursos do meu module que quero importar para outros
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserIdCheckMiddleware).forRoutes({
      path: "users/:id",
      method: RequestMethod.ALL,
    });
  }
}
