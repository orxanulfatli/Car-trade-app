import { Schema, model } from "mongoose";

const CarColorSchema = Schema({
  name: { type: String },
});

const CarColor = model("Colors", CarColorSchema);
export default CarColor;
