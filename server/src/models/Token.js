import {Schema,model} from "mongoose";

const TokenSchema = new Schema({
    // user:{type:Schema.Types.ObjectId,ref:"Users"},
    email:{type:String,required:true},
    refreshToken:{type:String,required:true}
})
const token = model("Token",TokenSchema);
export default token;
