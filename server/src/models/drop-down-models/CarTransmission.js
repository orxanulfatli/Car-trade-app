Transmission;
import { Schema, model } from "mongoose";

const CarTransmissionSchema = Schema({
  name: { type: String },
});

const CarTransmission = model("Transmission", CarTransmissionSchema);
export default CarTransmission;
