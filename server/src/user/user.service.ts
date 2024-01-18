import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schema/user.schema";
import mongoose, { Model } from "mongoose";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const { firstname, lastname, password,email, role } = createUserDto;
    const hashedpassword = await bcrypt.hash(password, 10);
    const usercreation = await this.userModel.create({
      firstname,
      lastname,
      password: hashedpassword,
      email,
      role,
    });
    if (!usercreation) {
      throw new BadRequestException(`Invalid Details`);
    }
    return usercreation;
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findOne(id: mongoose.Types.ObjectId) {
    return await this.userModel.findById(id);
  }

  async update(id: mongoose.Types.ObjectId, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
  }

  async remove(id: mongoose.Types.ObjectId) {
    const deleteuser = await this.userModel.findByIdAndDelete(id);
    return { message: `User Deleted` };
  }
}
