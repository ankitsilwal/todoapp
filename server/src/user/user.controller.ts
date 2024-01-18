import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpException,
  Put,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import mongoose from "mongoose";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("add")
  create(@Body() createUserDto: CreateUserDto) {
    try {
      return this.userService.create(createUserDto);
    } catch (error) {
      throw new HttpException(error.message, error.statuscode ?? 400);
    }
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: mongoose.Types.ObjectId) {
    return this.userService.findOne(id);
  }

  @Put(":id")
  update(
    @Param("id") id: mongoose.Types.ObjectId,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: mongoose.Types.ObjectId) {
    return this.userService.remove(id);
  }
}
