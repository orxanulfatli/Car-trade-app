import userModel from "../../models/User"

 
export async function  getUser (email){
   const user = await userModel.findOne({email});
   return user
}