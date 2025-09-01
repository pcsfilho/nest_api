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

@Controller("users") // rota /users
export class UserController {
  @Post()
  async create(@Body() { name, email, password }: CreateUserDTO) {
    return {
      body: {
        name,
        email,
        password,
      },
    };
  }

  @Get()
  async list() {
    return { users: [] };
  }

  @Get(":id")
  async show(@Param("id", ParseIntPipe) id) {
    return { user: {}, params: { id } };
  }

  @Put(":id")
  async update(
    @Body() { name, email, password }: UpdateUserDTO,
    @Param("id", ParseIntPipe) id
  ) {
    return {
      method: "put",
      body: {
        name,
        email,
        password,
      },
      params: { id },
    };
  }

  @Patch(":id")
  async updatePartial(
    @Body() { name, email, password }: UpdatePatchUserDTO,
    @Param("id", ParseIntPipe) id
  ) {
    return {
      method: "patch",
      body: {
        name,
        email,
        password,
      },
      params: { id },
    };
  }

  @Delete(":id")
  async delete(@Param("id", ParseIntPipe) id) {
    // valida um parametro id do tipo numérico
    return { id };
  }
}
