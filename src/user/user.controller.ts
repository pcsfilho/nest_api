import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";

@Controller("users") // rota /users
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async create(@Body() data: CreateUserDTO) {
    return await this.userService.create(data);
  }

  @Get()
  async list() {
    return await this.userService.list();
  }

  @Get(":id")
  async show(@Param("id", ParseIntPipe) id) {
    return await this.userService.show(id);
  }

  @Put(":id")
  async update(@Body() data: UpdateUserDTO, @Param("id", ParseIntPipe) id) {
    return await this.userService.update(id, data);
  }

  @Patch(":id")
  async updatePartial(
    @Body() data: UpdatePatchUserDTO,
    @Param("id", ParseIntPipe) id
  ) {
    return await this.userService.updatePartial(id, data);
  }

  @Delete(":id")
  async delete(@Param("id", ParseIntPipe) id) {
    return await this.userService.delete(id);
  }
}
