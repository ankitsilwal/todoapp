import mongoose from "mongoose";

export class CreateCrudDto {
    id:mongoose.Types.ObjectId;

    title:string;

    date: string;

    completed:string
}
