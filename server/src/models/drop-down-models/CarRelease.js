import { Schema, model } from "mongoose";

const CarReleaseSchema = Schema({
  name: { type: String },
});

const CarRelease = model("Release", CarReleaseSchema);
export default CarRelease;
