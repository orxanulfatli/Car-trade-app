import { Schema, model } from "mongoose"

const OtpSchema = new Schema({
    email: {
        type: String,
        required:true
    },
    otp: {
        type: String,
        required:true
    },
    createdAt:{type:Date,default:Date.now,index:{expireAfterSeconds:60}}

},{timestamps:true})
const Otp = model('Otp', OtpSchema);
export default Otp;