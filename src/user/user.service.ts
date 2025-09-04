import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create({ email, name, password }: CreateUserDTO) {
    return await this.prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });
  }

  async list() {
    return await this.prisma.user.findMany();
  }

  async show(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, data: UpdateUserDTO) {
    await this.exists(id);
    const updateData: any = {
      ...data,
      birthAt: data.birthAt ? new Date(data.birthAt) : null,
    };

    return await this.prisma.user.update({
      data: updateData,
      where: {
        id,
      },
    });
  }

  async updatePartial(id: number, data: UpdatePatchUserDTO) {
    await this.exists(id);
    let updateData: any = {
      ...data,
    };

    if (data.birthAt) updateData.birthAt = new Date(data.birthAt);

    return await this.prisma.user.update({
      data: updateData,
      where: {
        id,
      },
    });
  }

  async delete(id: number) {
    const user = await this.show(id);
    await this.exists(id);
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async exists(id: number) {
    const user = await this.show(id);
    if (!user) throw new NotFoundException(`User ${id} not Found`);
  }
}
