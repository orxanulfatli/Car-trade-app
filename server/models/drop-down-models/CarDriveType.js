import { Schema, model } from "mongoose";

const CarDriveTypeSchema = Schema({
  name: { type: String },
});

const CarDriveType = model("DriveType", CarDriveTypeSchema);
export default CarDriveType;
