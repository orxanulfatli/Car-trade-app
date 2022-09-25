import { Schema, model } from "mongoose";

const CarSeriesSchema = new Schema({
    name: String,
    model: { type: Schema.Types.ObjectId, ref: 'Models' }
});

const CarSeries = model("Series", CarSeriesSchema);
export default CarSeries;