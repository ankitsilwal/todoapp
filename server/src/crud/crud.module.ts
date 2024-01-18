import { Module } from "@nestjs/common";
import { CrudService } from "./crud.service";
import { CrudController } from "./crud.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { TODO, TODOSchema } from "./schema/todo.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TODO.name, schema: TODOSchema }]),
  ],
  controllers: [CrudController],
  providers: [CrudService],
})
export class CrudModule {}
