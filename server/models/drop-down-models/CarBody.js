import { Schema, model } from "mongoose"

const CarBodySchema = Schema({
    name:{type:String}
})

const CarBody = model("Body", CarBodySchema);
export default CarBody;