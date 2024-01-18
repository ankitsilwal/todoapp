import { Injectable } from "@nestjs/common";
import { CreateCrudDto } from "./dto/create-crud.dto";
import { UpdateCrudDto } from "./dto/update-crud.dto";
import { InjectModel } from "@nestjs/mongoose";
import { TODO } from "./schema/todo.schema";
import mongoose, { Model } from "mongoose";

@Injectable()
export class CrudService {
  constructor(@InjectModel(TODO.name) private TODOModel: Model<TODO>) {}

  async create(createCrudDto: CreateCrudDto) {
    return await this.TODOModel.create(createCrudDto);
  }

  async findAll() {
    return await this.TODOModel.find();
  }

  async findOne(id: mongoose.Types.ObjectId) {
    return await this.TODOModel.findById(id);
  }

  async update(id: mongoose.Types.ObjectId, updateCrudDto: UpdateCrudDto) {
    return await this.TODOModel.findByIdAndUpdate(id, updateCrudDto, {
      new: true,
    });
  }

  async remove(id: mongoose.Types.ObjectId) {
    const removee = await this.TODOModel.findByIdAndDelete(id);
    return { message: `Task Deleted` };
  }
}
