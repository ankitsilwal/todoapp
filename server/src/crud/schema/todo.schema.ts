import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({ timestamps: true })
export class TODO {
  @Prop()
  id: mongoose.Types.ObjectId;

  @Prop()
  title: string;

  @Prop()
  date: string;

  @Prop()
  completed: string;
}

export const TODOSchema = SchemaFactory.createForClass(TODO);
