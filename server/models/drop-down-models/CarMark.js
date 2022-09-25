import { Schema, model } from "mongoose";

const MarkSchema = new Schema({
  name: String
  
});

const CarMark = model("Mark", MarkSchema);
export default CarMark;
