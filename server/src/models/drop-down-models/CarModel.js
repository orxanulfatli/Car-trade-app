import { Schema, model } from "mongoose";

const CarModelSchema = new Schema({
    name:String,
    mark:{type:Schema.Types.ObjectId,ref:'Mark'}
    
})

const CarModel = model("Models", CarModelSchema);
export default CarModel