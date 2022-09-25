import { Schema, model } from "mongoose";

const CarFuelSchema = Schema({
  name: { type: String },
});

const CarFuel = model("Fuel", CarFuelSchema);
export default CarFuel;
