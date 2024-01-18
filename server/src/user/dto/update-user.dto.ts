import { IsEmail, IsEnum } from "@nestjs/class-validator";
import { UserRole } from "./create-user.dto";

export class UpdateUserDto {
  firstname: string;

  lastname: string;

  @IsEmail()
  emaill:string;

  password: string;

  @IsEnum(UserRole)
  role: UserRole;
}
