import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Module({
  providers: [PrismaService], //
  exports: [PrismaService], // Serviço disponibilizado para quem importar este modulo
})
export class PrismaModule {}
