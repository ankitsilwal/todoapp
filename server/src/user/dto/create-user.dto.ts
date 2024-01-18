import mongoose from "mongoose";
import { IsEmail, IsEnum } from "@nestjs/class-validator";

export enum UserRole {
  USER = "user",
  ADMIN = "admin",
}

export class CreateUserDto {
  id: mongoose.Types.ObjectId;

  firstname: string;

  lastname: string;

  @IsEmail()
  email:string;

  password: string;

  @IsEnum(UserRole)
  role: UserRole;
}
