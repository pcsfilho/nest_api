import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";

@Module({
  imports: [], // modulos que são importados
  controllers: [UserController], // o user.module possui como recurso o user.controller
  providers: [], // classes que provem os serviços, ou seja quem podem ser injetadas. Possui um decorator dentro delas
  exports: [], // recursos do meu module que quero importar para outros
})
export class UserModule {}
